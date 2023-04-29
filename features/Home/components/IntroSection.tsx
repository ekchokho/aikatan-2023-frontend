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
    <div className="z-10 w-full flex items-center flex-col gap-3">
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
          className={'w-52 sm:w-full sm:max-w-sm h-full scale-150 opacity-90'}>
          <img
            src={NeonEffect.src}
            alt="aikatan 2.0 logo"
            className={'w-full h-full animate-spin'}
          />
        </div>
      </div>
      <div className="z-20 typewriter font-bengali-noto-sans text-3xl sm:text-5xl font-semibold text-amber-400">
        <p className={'border-r-4 border-amber-400 px-2'}>#এক ধনুকে পঞ্চবাণ</p>
      </div>
      <h1 className="text-center text-lg sm:text-3xl text-content font-semibold">
        Get ready to experience a world of{' '}
        <span className={'text-emerald-500 text-xl'}>Creativity</span>,{' '}
        <span className={'text-amber-500 text-xl'}>Innovation</span> and{' '}
        <span className={'text-sky-500 text-xl'}>Entertainment</span>!
      </h1>

      <CountDownTimerDynamic />
    </div>
  )
}
