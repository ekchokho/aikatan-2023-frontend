import React, { useEffect, useMemo, useState } from 'react'

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
import Image0 from '@/assets/events/img.png'
import HeightMap from '@/assets/images/heightMap.png'
import FadingImage from '@/features/Home/components/FadingImage'
import ImageCarousel from '@/features/Home/components/ImageCarousel'
import { useWindowSize } from '@/hooks'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

import GradientHeroSection from './GradientHeroSection'
import IntroSection from './IntroSection'

export const events = [
  {
    id: 0,
    label: 'college',
    imageSrc: { mobile: Image0.src, desktop: Image0.src }
  },
  {
    id: 2,
    label: 'Tech Lavya',
    imageSrc: { mobile: Image2Mobile.src, desktop: Image2Desktop.src }
  },
  {
    id: 3,
    label: 'Reunion night',
    imageSrc: { mobile: Image3Mobile.src, desktop: Image3Desktop.src }
  },
  {
    id: 1,
    label: 'ROCKING TWILIGHT',
    imageSrc: { mobile: Image1Mobile.src, desktop: Image1Desktop.src }
  },
  {
    id: 4,
    label: 'SNIGDHAJIT',
    imageSrc: { mobile: Image4Mobile.src, desktop: Image4Desktop.src }
  },
  {
    id: 5,
    label: 'trap music',
    imageSrc: { mobile: Image5Mobile.src, desktop: Image5Desktop.src }
  },
  {
    id: 6,
    label: 'dj koyel',
    imageSrc: { mobile: Image6Mobile.src, desktop: Image6Desktop.src }
  },
  {
    id: 7,
    label: 'the octaves',
    imageSrc: { mobile: Image7Mobile.src, desktop: Image7Desktop.src }
  },
  {
    id: 8,
    label: 'cho nach',
    imageSrc: { mobile: Image8Mobile.src, desktop: Image8Desktop.src }
  }
] as const

const HeroSection = () => {
  const [dispFactor, setDispFactor] = useState<1 | 0>(1)
  const [selected, setSelected] = useState(0)
  const windowSize = useWindowSize()
  const isInMobile = windowSize.width < 640

  const images = useMemo(
    () =>
      events.map((value) => {
        return !isInMobile ? value.imageSrc.desktop : value.imageSrc.mobile
      }),
    [isInMobile]
  )

  useEffect(() => {
    const interval = setInterval(() => {
      setDispFactor(dispFactor === 0 ? 1 : 0)

      const arrlen = images.length
      let current = selected
      if (arrlen - 1 === current) {
        current = 0
      } else {
        current++
      }
      setSelected(current)
    }, 5000)
    return () => clearInterval(interval)
  })

  return (
    <section id={'home'} className={'w-full h-full flex-1 flex flex-col'}>
      <a href="#home" className={'w-full h-full flex-1 flex flex-col'}>
        <div className="w-full h-full flex-1 flex flex-col items-center justify-center gap-10">
          <div className="absolute w-full h-full top-0 left-0">
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
          <IntroSection />

          <a
            href="#event-schedule"
            className="absolute bottom-3 z-10 text-secondary animate-bounce">
            <ChevronDownIcon className="w-5 sm:w-7" />
          </a>
        </div>
      </a>
    </section>
  )
}

export default HeroSection
