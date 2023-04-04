import dynamic from 'next/dynamic'
import React from 'react'

import Logo from '@/assets/icons/logo.svg'
import ImageCarousel from '@/features/Home/components/ImageCarousel'

import GradientHeroSection from './GradientHeroSection'

const CountDownTimerDynamic = dynamic(
  () => import('../components/CountDownTimer'),
  {
    ssr: false
  }
)

const HeroSection = () => {
  return (
    <div className="w-full h-full min-h-screen flex-1 flex flex-col">
      <div className="z-10 absolute w-full h-full top-0 left-0 overflow-hidden">
        <div className="absolute w-full h-full">
          <ImageCarousel />
        </div>
        <GradientHeroSection />
      </div>
      <div className="z-50 flex-1 w-full h-full justify-center flex items-center flex-col gap-10">
        <div>
          <img src={Logo.src} alt="aikatan 2.0 logo" />
        </div>
        <div>
          <h1 className="text-xl sm:7xl text-center font-bold">
            The TechFest presented by RKMGEC
          </h1>
        </div>
        <CountDownTimerDynamic />
      </div>
    </div>
  )
}

export default HeroSection
