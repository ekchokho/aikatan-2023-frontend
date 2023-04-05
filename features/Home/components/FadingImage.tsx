import React, { useRef } from 'react'
import { MathUtils, ShaderMaterial, Texture } from 'three'

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

type FadingImageProps = {
  images: string[]
  dispImage: string
  width: number
  height: number
  dispFactor: number
  selected: number
}

function FadingImage({
  images,
  dispImage,
  width,
  height,
  dispFactor,
  selected
}: FadingImageProps) {
  const ref = useRef<ImageFadeMaterialType & ShaderMaterial>(null)
  const [dispTexture, ...textures] = useTexture([dispImage, ...images])

  useFrame(() => {
    if (ref.current) {
      ref.current.dispFactor = MathUtils.lerp(
        ref.current.dispFactor,
        dispFactor,
        0.075
      )
    }
  })

  const size = useAspect(width, height, 1)

  return (
    <mesh scale={size}>
      <planeGeometry />
      <imageFadeMaterial
        ref={ref}
        tex={textures[selected]}
        tex2={textures[selected]}
        disp={dispTexture}
        toneMapped={false}
        dispFactor={0}
        effectFactor={1.9}
      />
    </mesh>
  )
}

export default FadingImage
