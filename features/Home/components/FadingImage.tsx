import React, { useEffect, useRef, useState } from 'react'
import { MathUtils, ShaderMaterial, Texture } from 'three'

import HeightMap from '@/assets/images/heightMap.png'
import Image1 from '@/assets/mask images/1.jpeg'
import Image2 from '@/assets/mask images/2.jpeg'
import Image3 from '@/assets/mask images/3.jpeg'
import Image4 from '@/assets/mask images/4.jpeg'
import Image5 from '@/assets/mask images/5.jpeg'
import Image6 from '@/assets/mask images/6.jpeg'
import Image7 from '@/assets/mask images/7.jpeg'
import Image8 from '@/assets/mask images/8.jpeg'
import Image9 from '@/assets/mask images/9.jpeg'
import Image10 from '@/assets/mask images/10.jpeg'
import Image11 from '@/assets/mask images/11.jpeg'
import Image12 from '@/assets/mask images/12.jpeg'
import { shaderMaterial, useAspect, useTexture } from '@react-three/drei'
import { extend, useFrame } from '@react-three/fiber'

const ImageFadeMaterial = shaderMaterial(
  {
    effectFactor: 1.2,
    dispFactor: 0,
    tex: null,
    tex2: null,
    disp: null
  },
  `
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}
  `,
  `
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
)

extend({ ImageFadeMaterial })

type ImageFadeMaterialType = {
  effectFactor: number
  dispFactor: number
  tex: Texture
  tex2: Texture
  disp: Texture
} & JSX.IntrinsicElements['shaderMaterial']

declare global {
  namespace JSX {
    interface IntrinsicElements {
      imageFadeMaterial: ImageFadeMaterialType
    }
  }
}

function FadingImage() {
  const ref = useRef<ImageFadeMaterialType & ShaderMaterial>(null)
  const [dispTexture, ...textures] = useTexture([
    HeightMap.src,
    Image1.src,
    Image2.src,
    Image3.src,
    Image4.src,
    Image5.src,
    Image6.src,
    Image7.src,
    Image8.src,
    Image9.src,
    Image10.src,
    Image11.src,
    Image12.src
  ])
  const [dispFactor, setDispFactor] = useState(1)
  const [currentTextureIndex, setCurrentTextureIndex] = useState(0)

  useFrame(() => {
    if (ref.current) {
      ref.current.dispFactor = MathUtils.lerp(
        ref.current.dispFactor,
        dispFactor,
        0.075
      )
    }
  })

  useEffect(() => {
    const interval = setInterval(() => {
      setDispFactor(dispFactor === 0 ? 1 : 0)

      const arrlen = textures.length
      let current = currentTextureIndex
      if (arrlen - 1 === current) {
        current = 0
      } else {
        current++
      }
      setCurrentTextureIndex(current)
    }, 3000)
    return () => clearInterval(interval)
  })

  const size = useAspect(1920, 1080, 1.06)

  return (
    <mesh scale={size}>
      <planeGeometry />
      <imageFadeMaterial
        ref={ref}
        tex={textures[currentTextureIndex]}
        tex2={textures[currentTextureIndex]}
        disp={dispTexture}
        toneMapped={false}
        dispFactor={0}
        effectFactor={1.9}
      />
    </mesh>
  )
}

export default FadingImage
