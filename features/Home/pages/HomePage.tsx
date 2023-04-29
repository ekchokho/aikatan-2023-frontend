import React from 'react'

import { Loading } from '@/components'
import EventSchedule from '@/features/Home/components/EventSchedule'
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
          'flex-1 flex flex-col px-3',
          isCompelted ? 'visible' : 'invisible'
        )}>
        <div className={'w-full h-screen'}>
          <HeroSection />
        </div>
        <EventSchedule />
      </div>
    </>
  )
}

Home.layout = {
  hideNavbar: true
}

export default Home
