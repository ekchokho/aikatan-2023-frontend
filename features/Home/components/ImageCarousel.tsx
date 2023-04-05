import React, { Suspense } from 'react'

import { Canvas } from '@react-three/fiber'

const ImageCarousel = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="top-0 left-0 absolute w-full h-screen">
      <Canvas>
        <Suspense fallback={null}>{children}</Suspense>
      </Canvas>
    </div>
  )
}

export default ImageCarousel
