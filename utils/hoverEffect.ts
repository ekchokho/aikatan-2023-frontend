import gsap from 'gsap'
import * as THREE from 'three'

type optsParams = {
  parent: HTMLDivElement
  image1: string
  image2: string
  displacementImage: string
  intensity?: number
  intensity1?: number
  intensity2?: number
  angle?: number
  angle1?: number
  angle2?: number
  speed?: number
  speedIn?: number
  speedOut?: number
  hover?: boolean
  easing?: gsap.Ease['easeOut']
  video?: boolean
  imagesRatio?: number
}

const hoverEffect = (opts: optsParams) => {
  let texture2
  let texture1
  const vertex = `
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}
`

  const fragment = `
varying vec2 vUv;
uniform sampler2D tex;
uniform sampler2D tex2;
uniform sampler2D disp;
uniform float _rot;
uniform float dispFactor;
uniform float effectFactor;
void main() {
  vec2 uv = vUv;
  vec4 disp = texture2D(disp, uv);
  vec2 distortedPosition = vec2(uv.x + dispFactor * (disp.r*effectFactor), uv.y);
  vec2 distortedPosition2 = vec2(uv.x - (1.0 - dispFactor) * (disp.r*effectFactor), uv.y);
  vec4 _texture = texture2D(tex, distortedPosition);
  vec4 _texture2 = texture2D(tex2, distortedPosition2);
  vec4 finalTexture = mix(_texture, _texture2, dispFactor);
  gl_FragColor = finalTexture;
  #include <tonemapping_fragment>
  #include <encodings_fragment>
}
`

  // please respect authorship and do not remove
  console.log(
    '%c Hover effect by Robin Delaporte: https://github.com/robin-dela/hover-effect ',
    'color: #bada55; font-size: 0.8rem'
  )

  const parent = opts.parent
  const dispImage = opts.displacementImage
  const image1 = opts.image1
  const image2 = opts.image2
  const imagesRatio = opts.imagesRatio || 1.0
  const intensity1 = opts.intensity1 || opts.intensity || 1
  const intensity2 = opts.intensity2 || opts.intensity || 1
  const commonAngle = opts.angle || Math.PI / 4 // 45 degrees by default, so grayscale images work correctly
  const angle1 = opts.angle1 || commonAngle
  const angle2 = opts.angle2 || -commonAngle * 3
  const speedIn = opts.speedIn || opts.speed || 1.6
  const speedOut = opts.speedOut || opts.speed || 1.2
  const userHover = opts.hover || true
  const easing = opts.easing || 'expo.out'
  const video = opts.video || false

  if (!parent) {
    console.warn('Parent missing')
    return
  }

  if (!(image1 && image2 && dispImage)) {
    console.warn('One or more images are missing')
    return
  }

  const scene = new THREE.Scene()
  const camera = new THREE.OrthographicCamera(
    parent.offsetWidth / -2,
    parent.offsetWidth / 2,
    parent.offsetHeight / 2,
    parent.offsetHeight / -2,
    1,
    1000
  )

  camera.position.z = 1

  const renderer = new THREE.WebGLRenderer({
    antialias: false,
    alpha: true
  })

  renderer.setPixelRatio(2.0)
  renderer.setClearColor(0xffffff, 0.0)
  renderer.setSize(parent.offsetWidth, parent.offsetHeight)
  parent.appendChild(renderer.domElement)

  const render = function () {
    // This will be called by the TextureLoader as well as Gsap.
    renderer.render(scene, camera)
  }

  const loader = new THREE.TextureLoader()
  loader.crossOrigin = ''

  const disp = loader.load(dispImage, render)
  disp.magFilter = disp.minFilter = THREE.LinearFilter

  if (video) {
    const animate = function () {
      requestAnimationFrame(animate)

      renderer.render(scene, camera)
    }
    animate()

    const video1 = document.createElement('video')
    video1.autoplay = true
    video1.loop = true
    video1.muted = true
    video1.src = image1
    video1.load()

    const video2 = document.createElement('video')
    video2.autoplay = true
    video2.loop = true
    video2.muted = true
    video2.src = image2
    video2.load()

    texture1 = new THREE.VideoTexture(video1)
    texture2 = new THREE.VideoTexture(video2)
    texture1.magFilter = texture2.magFilter = THREE.LinearFilter
    texture1.minFilter = texture2.minFilter = THREE.LinearFilter

    video2.addEventListener(
      'loadeddata',
      function () {
        video2.play()

        texture2 = new THREE.VideoTexture(video2)
        texture2.magFilter = THREE.LinearFilter
        texture2.minFilter = THREE.LinearFilter

        mat.uniforms.texture2.value = texture2
      },
      false
    )

    video1.addEventListener(
      'loadeddata',
      function () {
        video1.play()

        texture1 = new THREE.VideoTexture(video1)

        texture1.magFilter = THREE.LinearFilter
        texture1.minFilter = THREE.LinearFilter

        mat.uniforms.texture1.value = texture1
      },
      false
    )
  } else {
    texture1 = loader.load(image1, render)
    texture2 = loader.load(image2, render)

    texture1.magFilter = texture2.magFilter = THREE.LinearFilter
    texture1.minFilter = texture2.minFilter = THREE.LinearFilter
  }

  let a1, a2
  const imageAspect = imagesRatio
  if (parent.offsetHeight / parent.offsetWidth < imageAspect) {
    a1 = 1
    a2 = parent.offsetHeight / parent.offsetWidth / imageAspect
  } else {
    a1 = (parent.offsetWidth / parent.offsetHeight) * imageAspect
    a2 = 1
  }

  const mat = new THREE.ShaderMaterial({
    uniforms: {
      intensity1: {
        value: intensity1
      },
      intensity2: {
        value: intensity2
      },
      dispFactor: {
        value: 0.0
      },
      angle1: {
        value: angle1
      },
      angle2: {
        value: angle2
      },
      texture1: {
        value: texture1
      },
      texture2: {
        value: texture2
      },
      disp: {
        value: disp
      },
      res: {
        value: new THREE.Vector4(
          parent.offsetWidth,
          parent.offsetHeight,
          a1,
          a2
        )
      },
      dpr: {
        value: window.devicePixelRatio
      }
    },

    vertexShader: vertex,
    fragmentShader: fragment,
    transparent: true,
    opacity: 1.0
  })

  const geometry = new THREE.PlaneGeometry(
    parent.offsetWidth,
    parent.offsetHeight,
    1
  )
  const object = new THREE.Mesh(geometry, mat)
  scene.add(object)

  function transitionIn() {
    gsap.to(mat.uniforms.dispFactor, {
      duration: speedIn,
      value: 1,
      ease: easing,
      onUpdate: render,
      onComplete: render
    })
  }

  function transitionOut() {
    gsap.to(mat.uniforms.dispFactor, {
      duration: speedOut,
      value: 0,
      ease: easing,
      onUpdate: render,
      onComplete: render
    })
  }

  if (userHover) {
    parent.addEventListener('mouseenter', transitionIn)
    parent.addEventListener('touchstart', transitionIn)
    parent.addEventListener('mouseleave', transitionOut)
    parent.addEventListener('touchend', transitionOut)
  }

  window.addEventListener('resize', function () {
    if (parent.offsetHeight / parent.offsetWidth < imageAspect) {
      a1 = 1
      a2 = parent.offsetHeight / parent.offsetWidth / imageAspect
    } else {
      a1 = (parent.offsetWidth / parent.offsetHeight) * imageAspect
      a2 = 1
    }
    object.material.uniforms.res.value = new THREE.Vector4(
      parent.offsetWidth,
      parent.offsetHeight,
      a1,
      a2
    )
    renderer.setSize(parent.offsetWidth, parent.offsetHeight)

    render()
  })

  return {
    next: transitionIn,
    previous: transitionOut
  }
}

export default hoverEffect
