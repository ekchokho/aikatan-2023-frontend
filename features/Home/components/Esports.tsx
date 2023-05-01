import React from 'react'

import Asphalt from '@/assets/events/asphalt.png'
import BGMI from '@/assets/events/bgmi.png'
import ClashRoyale from '@/assets/events/ClashRoyale.png'
import FIFA from '@/assets/events/Fifa.png'
import FreeFire from '@/assets/events/freefire.png'
import Valorant from '@/assets/events/valorant.png'
import { YetToBeAnnounced } from '@/features/Home/components/TechLavya'

import { EventCardV2 } from './EventCard'
import EventCardWrapper from './EventCardWrapper'

export const EsportsEventData = [
  {
    id: '2',
    rules: '',
    imgSrc: FreeFire.src,
    name: 'FREE FIRE MAX',
    description: `The FREE FIRE MAX esports competition offers a unique chance to elevate your gaming experience and become a legend in the world of esports. Register now and let the games begin!`,
    time: YetToBeAnnounced,
    register_link:
      'https://docs.google.com/forms/d/e/1FAIpQLSft52Xm7qPndepi40rkxPtzwB7-CeZrLkZRinlqOe0XZhPQgQ/viewform',
    contact: [],
    prizes: {
      winner: YetToBeAnnounced,
      runner_up: YetToBeAnnounced
    },
    location: YetToBeAnnounced,
    limitWord: 'default'
  },
  {
    id: '3',
    imgSrc: BGMI.src,
    name: 'BGMI',
    rules: '',
    description: `Ready to battle it out on the virtual battlegrounds? Put your skills with thrilling gameplay and nail-biting matches, and win amazing prizes. Don't miss out on this adrenaline-fueled gaming experience!`,
    time: YetToBeAnnounced,
    register_link: 'https://forms.gle/vPjsmEMiYf2w6a9VA',
    contact: [],
    prizes: {
      winner: YetToBeAnnounced,
      runner_up: YetToBeAnnounced
    },
    location: YetToBeAnnounced,
    limitWord: 'default'
  },
  {
    id: '1',
    imgSrc: FIFA.src,
    name: 'FIFA-18',
    description: `Join the FIFA-18 e sports competition in college and compete against the best players. With exciting prizes up for grabs. Don't miss out on this incredible opportunity!`,
    time: YetToBeAnnounced,
    register_link:
      'https://docs.google.com/forms/d/e/1FAIpQLSegacye9rhbAOSjv4zq6l1Erm-HUDl6bzSuYmr8NDANvWBHAA/viewform',
    contact: [],
    rules: '',
    prizes: {
      winner: YetToBeAnnounced,
      runner_up: YetToBeAnnounced
    },
    location: YetToBeAnnounced,
    limitWord: 'default'
  },
  {
    id: '4',
    rules: '',
    imgSrc: Asphalt.src,
    name: 'Asphalt-8',
    description:
      'Get ready to burn some rubber and dominate the track. This high-octane event is the ultimate test of speed, skill, and strategy. With thrilling prizes. Register now and start your engines!',
    time: YetToBeAnnounced,
    register_link:
      'https://docs.google.com/forms/d/e/1FAIpQLSendeWNEt5Oq80SsKw0zxh1Y0-pXb6Ixo-woge6-zBxb4Ta0Q/viewform',
    contact: [],
    prizes: {
      winner: YetToBeAnnounced,
      runner_up: YetToBeAnnounced
    },
    location: YetToBeAnnounced,
    limitWord: 'default'
  },
  {
    id: '5',
    rules: '',
    imgSrc: Valorant.src,
    name: 'Valorant',
    description:
      'Unleash your tactical prowess, with thrilling gameplay and unique character abilities, strategy and teamwork. Register today and take the first step towards becoming a Valorant legend!',
    time: YetToBeAnnounced,
    register_link:
      'https://docs.google.com/forms/d/e/1FAIpQLSd9TGrcR6G-9CMjn8pUZoYFk2b7x9Deatg2_pq3OPdpWcNCcw/viewform',
    contact: [],
    prizes: {
      winner: YetToBeAnnounced,
      runner_up: YetToBeAnnounced
    },
    location: YetToBeAnnounced,
    limitWord: 'default'
  },
  {
    id: '6',
    rules: '',
    imgSrc: ClashRoyale.src,
    name: 'Clash Royale',
    description: `Get ready to clash with the best player in college. Battle it out in this fast-paced strategy game for a chance to win exciting prizes. Register today and get ready to clash!`,
    time: YetToBeAnnounced,
    register_link:
      'https://docs.google.com/forms/d/e/1FAIpQLSci4aLKOmNEzxflT76JzPnCB_MosXDzGK6IJ6bm08t5_OgmfQ/viewform',
    contact: [],
    prizes: {
      winner: YetToBeAnnounced,
      runner_up: YetToBeAnnounced
    },
    location: YetToBeAnnounced,
    limitWord: 'default'
  }
] as const

const Esports = () => {
  return (
    <section id={'esport-event'} className={'pt-10'}>
      <a href="#esport-event">
        <h2
          className={
            'uppercase text-4xl 2xl:text-5xl sm:text-center my-10 text-content'
          }>
          <span className="text-sky-500 font-extrabold">Esports </span>Event
        </h2>
      </a>
      <EventCardWrapper>
        {EsportsEventData.map(
          ({
            id,
            imgSrc,
            register_link,
            name,
            description,
            contact,
            prizes,
            rules,
            time,
            location,
            limitWord
          }) => (
            <EventCardV2
              location={location}
              key={id}
              imgSrc={imgSrc}
              registrationLink={register_link}
              heading={name}
              description={description}
              time={time}
              prizes={prizes}
              rulesLink={rules}
              contacts={contact}
              limitWord={limitWord}
            />
          )
        )}
      </EventCardWrapper>
    </section>
  )
}

export default Esports
