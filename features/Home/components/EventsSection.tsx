import dynamic from 'next/dynamic'
import React from 'react'

import Logo from '@/assets/icons/Aikatan-logo.webp'
import NeonEffect from '@/assets/icons/neon-effect.png'

const CountDownTimerDynamic = dynamic(
  () => import('../components/CountDownTimer'),
  {
    ssr: false
  }
)

export const IntroSection = () => {
  return (
    <div className="z-10 flex-1 w-full h-full mt-44 sm:mt-0 sm:justify-center flex items-center flex-col gap-3">
      <div className="relative flex items-center flex-col">
        {/* <div> */}
        {/*   <p className="text-xl sm:7xl text-center text-content"> */}
        {/*     Welcome to */}
        {/*   </p> */}
        {/* </div> */}
        <div className="z-20 absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 h-full w-full flex flex-col items-center">
          <img
            src={Logo.src}
            alt="aikatan 2.0 logo"
            className={'h-full w-full'}
          />
        </div>
        <div
          className={'w-52 sm:w-full sm:max-w-sm h-full scale-125 opacity-90'}>
          <img
            src={NeonEffect.src}
            alt="aikatan 2.0 logo"
            className={'w-full h-full animate-spin'}
          />
        </div>
        {/* <div className="absolute w-32 h-32 bg-gray-300 rounded-full"></div> */}
      </div>
      <div className="z-20 typewriter font-bengali-noto-sans text-2xl sm:text-5xl font-semibold text-amber-400">
        <h1 className={'border-r-4 border-amber-400 px-2'}>
          #এক ধনুকে পঞ্চবাণ
        </h1>
      </div>
      <div>
        <p className="text-xl sm:7xl text-center text-content">
          Techno, Cultural Fest and Alumni Meet.
        </p>
      </div>

      <CountDownTimerDynamic />
    </div>
  )
}
