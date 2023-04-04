import React, { Suspense } from 'react'

import FadingImage from '@/features/Home/components/FadingImage'
import { Canvas } from '@react-three/fiber'

const ImageCarousel = () => {
  return (
    <div className="top-0 left-0 absolute w-full h-screen">
      <Canvas>
        <Suspense fallback={null}>
          <FadingImage />
        </Suspense>
      </Canvas>
    </div>
  )
}

export default ImageCarousel
