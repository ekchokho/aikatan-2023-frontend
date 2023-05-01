import React from 'react'

import { Loading } from '@/components'
import ContactUs from '@/features/Home/components/ContactUs'
import CulturalEvent from '@/features/Home/components/CulturalEvent'
import Esports from '@/features/Home/components/Esports'
import EventSchedule from '@/features/Home/components/EventSchedule'
import Gallary from '@/features/Home/components/Gallary'
import SponserShip from '@/features/Home/components/SponserShip'
import TechLavya from '@/features/Home/components/TechLavya'
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
        <div className={'z-10 flex flex-col mb-20 mt-10'}>
          <EventSchedule />
          <TechLavya />
          <Esports />
          <CulturalEvent />
          <Gallary />
          <SponserShip />
          <ContactUs />
        </div>
      </div>
    </>
  )
}

export default Home
