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
    id: 7,
    description:
      'Get ready to experience the Vibrant & Rhythmic Chhou Nach, the Heritage of Purulia, with the award-winning team of Bubhan Chandra Kumar!',
    title: 'Chhau Nach',
    imgSrc: ChoNach.src,
    time: 'May 5th Firday at 5 PM',
    location: 'College Playground'
  },
  {
    id: 6,
    description: `️Harmony in Motion Team Octaves Live in Action!.Grooving to the Bengali Beats. The Octaves is going to Rocking the Stage`,
    title: 'The Octaves',
    imgSrc: TheOctaves.src,
    time: '5th May Friday at 10PM',
    location: 'College Playground'
  },
  {
    id: 2,
    description:
      'Join us for a night of non-stop music, dance and entertainment that will leave you wanting more. Featuring a lineup of talented artists and performers.',
    title: 'Rocking Twilight',
    imgSrc: RockingTwilight.src,
    time: 'May 6th Saturday at 5 PM',
    location: 'College Playground'
  },
  {
    id: 3,
    description:
      'Feel the Music Surge with Snigdhajit & Lifeline!! Get ready for a mind-blowing band performance at 2nd day of Our Aikatan2.0 that will make your heart race, your feet tap, and your soul soar to the rhythm of the music!',
    title: 'Snigdhajit & Lifeline',
    imgSrc: Snigdhajit.src,
    time: '6th May Saturday at 10:00PM',
    location: 'College Playground'
  },
  {
    id: 4,
    description: `Get ready to be TRAPPED in a web of radical rock! Let TRAP's - The Radical Array Project dynamic sound and vibes take you on a journey like never before.`,
    title: 'Trap Music',
    imgSrc: TrapMusic.src,
    time: '7th May Sunday at 8:00PM',
    location: 'College Playground'
  },
  {
    id: 5,
    description: `️Dance, mix, beat - Repeat! with DJ Koyel !! Get ready to move to the hottest tracks & create memories that will last a lifetime. Don't miss out on the ultimate dance extravaganza on Grand Night of Aikatan2.0`,
    title: 'DJ koyel',
    imgSrc: DJkoyel.src,
    time: '7th May Sunday at 10PM',
    location: 'College Playground'
  }
] as const

const CulturalEvent = () => {
  return (
    <section
      className={'flex flex-col gap-2 items-center pt-10'}
      id={'event-cultural'}>
      <a href="#event-cultural">
        <h2
          className={'text-4xl 2xl:text-5xl sm:text-center my-10 text-content'}>
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
      <div className={'flex flex-col gap-2 items-center my-10'}>
        <p className="text-2xl">
          Book your Pass{' '}
          <span className="text-green-500 font-semibold">@899/-</span> Only
        </p>
        <a
          href={
            'https://docs.google.com/forms/d/e/1FAIpQLScwB6FMJgCbiLqHWogkUMeQdbFHLM8Hd4exIsmp-INE_quDaQ/viewform'
          }>
          <button
            className={
              'bg-blue-700 px-4 rounded-sm py-1 text-lg hover:bg-blue-900'
            }>
            Book Now
          </button>
        </a>
      </div>
    </section>
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
    <div className={'h-max w-80 rounded shadow-xl overflow-hidden'}>
      <div
        className={`bg-center bg-cover w-full h-32 overflow-auto bg-[url(${imgSrc})]`}></div>
      <SpotLightItem>
        <div className="px-4 py-5 flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <h3 className={'text-xl 2xl:text-2xl font-semibold'}>{title}</h3>
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
