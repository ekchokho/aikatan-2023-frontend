import React from 'react'

import { Loading } from '@/components'
import { AppPage } from '@/types'
import { useProgress } from '@react-three/drei'
import { tx } from '@twind/core'

import { HeroSection } from '../components'

const Home: AppPage = () => {
  const { progress } = useProgress()

  const isCompelted = progress === 100

  return (
    <>
      {!isCompelted && <Loading />}
      <div
        className={tx(
          'flex-1 flex flex-col',
          isCompelted ? 'visible' : 'invisible'
        )}>
        <HeroSection />
        {/* <div className="text-7xl">hhh</div> */}
      </div>
    </>
  )
}

Home.layout = {
  hideFooter: true,
  pageClassName: 'px-3',
  hideNavbar: true
}

export default Home
