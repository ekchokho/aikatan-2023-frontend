import React, { useMemo, useState } from 'react'

import Image1Desktop from '@/assets/events/1.jpg'
import Image1Mobile from '@/assets/events/1-mobile.jpg'
import Image2Desktop from '@/assets/events/2.jpg'
import Image2Mobile from '@/assets/events/2-mobile.jpg'
import Image3Desktop from '@/assets/events/3.jpg'
import Image3Mobile from '@/assets/events/3-mobile.jpg'
import Image4Desktop from '@/assets/events/4.jpg'
import Image4Mobile from '@/assets/events/4-mobile.jpg'
import Image5Desktop from '@/assets/events/5.jpg'
import Image5Mobile from '@/assets/events/5-mobile.jpg'
import Image6Desktop from '@/assets/events/6.jpg'
import Image6Mobile from '@/assets/events/6-mobile.jpg'
import Image7Desktop from '@/assets/events/7.jpg'
import Image7Mobile from '@/assets/events/7-mobile.jpg'
import Image8Desktop from '@/assets/events/8.jpg'
import Image8Mobile from '@/assets/events/8-mobile.jpg'
import HeightMap from '@/assets/images/heightMap.png'
import FadingImage from '@/features/Home/components/FadingImage'
import ImageCarousel from '@/features/Home/components/ImageCarousel'
import { useWindowSize } from '@/hooks'
import {
  ArrowSmallLeftIcon,
  ArrowSmallRightIcon
} from '@heroicons/react/20/solid'
import { tx } from '@twind/core'

import { IntroSection } from './EventsSection'
import GradientHeroSection from './GradientHeroSection'

export const events = [
  {
    id: 1,
    imageSrc: { mobile: Image1Mobile.src, desktop: Image1Desktop.src },
    Component: IntroSection
  },
  {
    id: 2,
    imageSrc: { mobile: Image2Mobile.src, desktop: Image2Desktop.src },
    Component: IntroSection
  },
  {
    id: 3,
    imageSrc: { mobile: Image3Mobile.src, desktop: Image3Desktop.src },
    Component: IntroSection
  },
  {
    id: 4,
    imageSrc: { mobile: Image4Mobile.src, desktop: Image4Desktop.src },
    Component: IntroSection
  },
  {
    id: 5,
    imageSrc: { mobile: Image5Mobile.src, desktop: Image5Desktop.src },
    Component: IntroSection
  },
  {
    id: 6,
    imageSrc: { mobile: Image6Mobile.src, desktop: Image6Desktop.src },
    Component: IntroSection
  },
  {
    id: 7,
    imageSrc: { mobile: Image7Mobile.src, desktop: Image7Desktop.src },
    Component: IntroSection
  },
  {
    id: 8,
    imageSrc: { mobile: Image8Mobile.src, desktop: Image8Desktop.src },
    Component: IntroSection
  }
  // {
  //   id: 9,
  //   imageSrc: { mobile: Image8Mobile.src, desktop: Image8Desktop.src },
  //   Component: IntroSection
  // }
] as const

const HeroSection = () => {
  const [dispFactor, setDispFactor] = useState<1 | 0>(1)
  const [selected, setSelected] = useState(0)
  // const [intervalTime, setIntervalTime] = useState(5000)
  const windowSize = useWindowSize()
  const isInMobile = windowSize.width < 640

  const currentSelectedEvent = events[selected]
  const SelectedEventComponet = currentSelectedEvent.Component

  const images = useMemo(
    () =>
      events.map((value) => {
        return !isInMobile ? value.imageSrc.desktop : value.imageSrc.mobile
      }),
    [isInMobile]
  )

  const handleChangeContent = (type: 'left' | 'right') => {
    let newSelected = selected
    const totalImages = images.length

    switch (type) {
      case 'left':
        newSelected = newSelected === 0 ? 0 : --newSelected
        break
      case 'right':
        newSelected =
          totalImages - 1 === newSelected ? totalImages - 1 : ++newSelected
        break
      default:
        throw Error('not supported')
    }
    setDispFactor(dispFactor === 0 ? 1 : 0)
    setSelected(newSelected)
    // setIntervalTime(5000)
  }

  const isInFist = selected === 0
  const isInLast = selected === images.length - 1

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setDispFactor(dispFactor === 0 ? 1 : 0)
  //
  //     const arrlen = images.length
  //     let current = selected
  //     if (arrlen - 1 === current) {
  //       current = 0
  //     } else {
  //       current++
  //     }
  //     setSelected(current)
  //   }, intervalTime)
  //   return () => clearInterval(interval)
  // })

  return (
    <div className={'w-full h-full flex-1 flex flex-col min-h-screen'}>
      <div className="w-full h-full flex-1 flex flex-col">
        <div className="absolute w-full h-full top-0 left-0 overflow-hidden">
          <div className="absolute w-full h-full">
            <ImageCarousel>
              <FadingImage
                dispImage={HeightMap.src}
                images={images}
                height={windowSize.height}
                width={windowSize.width}
                selected={selected}
                dispFactor={dispFactor}
              />
            </ImageCarousel>
          </div>
          <GradientHeroSection />
        </div>
        <SelectedEventComponet />
        <div className="z-10 absolute flex flex-row gap-6 top-[90vh] left-1/2 -translate-x-1/2">
          <button
            className={tx(
              'border-2 border-primary-3 text-primary-3 hover:border-transparent hover:text-white hover:bg-primary hover:scale-110 transition-all rounded-full p-1',
              isInFist ? 'invisible' : 'visible'
            )}
            name={'left'}
            disabled={isInFist}
            onClick={() => handleChangeContent('left')}>
            <ArrowSmallLeftIcon className="w-5 sm:w-8" />
          </button>
          <button
            className={tx(
              'border-2 border-primary-3 text-primary-3 hover:border-transparent hover:text-white hover:bg-primary hover:scale-110 transition-all rounded-full p-1',
              isInLast ? 'invisible' : 'visible'
            )}
            name={'right'}
            disabled={isInLast}
            onClick={() => handleChangeContent('right')}>
            <ArrowSmallRightIcon className="w-5 sm:w-8" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
