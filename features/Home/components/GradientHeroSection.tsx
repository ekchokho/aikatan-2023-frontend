import React from 'react'

const GradientHeroSection = () => {
  return (
    <>
      <div
        className="absolute w-full h-full top-0 left-0"
        style={{
          background: `linear-gradient(rgba(0, 11, 17, 0) 60%, rgba(1, 15, 27, 0.99)),linear-gradient(120deg, rgba(0, 11, 17, 0.80), rgba(121, 56, 50, 0.70), rgba(121, 56, 50, 0.80), rgba(1, 15, 60, 0.80))`
        }}></div>
      <div
        className="absolute w-full h-full -bottom-full left-0"
        style={{
          background: `linear-gradient(rgba(1, 15, 27, 0.99) 10%, rgba(0, 11, 17, 0))`
        }}></div>
    </>
  )
}

export default GradientHeroSection
