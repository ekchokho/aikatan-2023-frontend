import dynamic from 'next/dynamic'
import React from 'react'

import { AppPage } from '@/types'

const CountDownTimerDynamic = dynamic(
  () => import('../components/CountDownTimer'),
  {
    ssr: false
  }
)

const Home: AppPage = () => {
  return (
    <div className="flex-1 justify-center flex items-center">
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
