import React from 'react'

import RockingTwilight from '@/assets/events/1.jpg'
// import Reunion from '@/assets/events/3.jpg'
import Snigdhajit from '@/assets/events/4.jpg'
import TrapMusic from '@/assets/events/5.jpg'
import DJkoyel from '@/assets/events/6.jpg'
import TheOctaves from '@/assets/events/7.jpg'
import ChoNach from '@/assets/events/8.jpg'

import EventCardWrapper from './EventCardWrapper'
import SpotLightItem from './SpotLightItem'

const CulturalEventData = [
  // {
  //   id: 1,
  //   description: '',
  //   title: 'Reunion & Facilitation',
  //   imgSrc: Reunion.src,
  //   time: '',
  //   location: ''
  // },
  {
    id: 2,
    description: '',
    title: 'Rocking Twilight',
    imgSrc: RockingTwilight.src,
    time: '',
    location: ''
  },
  {
    id: 3,
    description: '',
    title: 'Snigdhajit',
    imgSrc: Snigdhajit.src,
    time: '',
    location: ''
  },
  {
    id: 4,
    description: '',
    title: 'Trap Music',
    imgSrc: TrapMusic.src,
    time: '',
    location: ''
  },
  {
    id: 5,
    description: '',
    title: 'DJ koyel',
    imgSrc: DJkoyel.src,
    time: '',
    location: ''
  },
  {
    id: 6,
    description: '',
    title: 'The Octaves',
    imgSrc: TheOctaves.src,
    time: '',
    location: ''
  },
  {
    id: 7,
    description: '',
    title: 'Cho Nach',
    imgSrc: ChoNach.src,
    time: '',
    location: ''
  }
] as const

const CulturalEvent = () => {
  return (
    <div>
      <a href="#event-cultural">
        <h2 className={'text-5xl sm:text-center my-10 text-content'}>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-green-500 font-extrabold">
            CULTURAL{' '}
          </span>
          EVENT
        </h2>
      </a>
      <EventCardWrapper>
        {CulturalEventData.map(
          ({ description, id, imgSrc, location, time, title }) => (
            <CulturalEventCard
              key={id}
              time={time}
              description={description}
              imgSrc={imgSrc}
              location={location}
              title={title}
            />
          )
        )}
      </EventCardWrapper>
    </div>
  )
}

export default CulturalEvent

type CulturalEventCardProps = {
  imgSrc: string
  description: string
  title: string
  time: string
  location: string
}
const CulturalEventCard = ({
  description,
  imgSrc,
  location,
  time,
  title
}: CulturalEventCardProps) => {
  return (
    <div className={'w-full h-max sm:w-80 rounded shadow-xl overflow-hidden'}>
      <div
        className={`bg-center bg-cover w-full h-32 overflow-auto bg-[url(${imgSrc})]`}></div>
      <SpotLightItem>
        <div className="px-4 py-5 flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <h3 className={'text-2xl font-semibold'}>{title}</h3>
            <div className="text-content-medium flex flex-col gap-2">
              {description && (
                <p className="text-content-medium">{description}</p>
              )}
              {time && (
                <div>
                  <p>
                    <b>Time:</b>{' '}
                  </p>
                  <p>{time}</p>
                </div>
              )}
              {location && (
                <div>
                  <p>
                    <b>Location:</b>{' '}
                  </p>
                  <p>{location}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </SpotLightItem>
    </div>
  )
}
