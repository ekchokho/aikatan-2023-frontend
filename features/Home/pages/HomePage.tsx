import React from 'react'

import { AppPage } from '@/types'

import { HeroSection } from '../components'

const Home: AppPage = () => {
  return (
    <div className="flex-1 flex flex-col">
      <HeroSection />
    </div>
  )
}

Home.layout = {
  hideFooter: true,
  pageClassName: 'px-3',
  hideNavbar: true
}

export default Home
