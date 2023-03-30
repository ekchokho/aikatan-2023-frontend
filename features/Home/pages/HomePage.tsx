import dynamic from 'next/dynamic'
import React from 'react'

import Logo from '@/assets/icons/logo.svg'
import { AppPage } from '@/types'

const CountDownTimerDynamic = dynamic(
  () => import('../components/CountDownTimer'),
  {
    ssr: false
  }
)

const Home: AppPage = () => {
  return (
    <div className="flex-1 justify-center flex items-center flex-col gap-10">
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
  )
}

Home.layout = {
  hideFooter: true,
  pageClassName: 'px-3',
  hideNavbar: true
}

export default Home
