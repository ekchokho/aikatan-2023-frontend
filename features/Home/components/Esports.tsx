import React from 'react'

import Asphalt from '@/assets/events/asphalt.png'
import BGMI from '@/assets/events/bgmi.png'
import ClashRoyale from '@/assets/events/ClashRoyale.png'
import FIFA from '@/assets/events/Fifa.png'
import FreeFire from '@/assets/events/freefire.png'
import Valorant from '@/assets/events/valorant.png'

import EventCard from './EventCard'
import EventCardWrapper from './EventCardWrapper'

export const EsportsEventData = [
  {
    id: '2',
    rules: '',
    imgSrc: FreeFire.src,
    name: 'FREE FIRE MAX',
    description: `Are you ready to enter the ultimate battle arena? The FREE FIRE MAX esports competition offers a opportunity to showcase your skills in a fast-paced, intense battle royale game. Don't miss out on this unique chance to elevate your gaming experience and become a legend in the world of esports. Register now and let the games begin!`,
    time: '',
    register_link:
      'https://docs.google.com/forms/d/e/1FAIpQLSft52Xm7qPndepi40rkxPtzwB7-CeZrLkZRinlqOe0XZhPQgQ/viewform',
    contact: [],
    prizes: {
      winner: '',
      runner_up: ''
    }
  },
  {
    id: '3',
    imgSrc: BGMI.src,
    name: 'BGMI',
    rules: '',
    description: `Ready to battle it out on the virtual battlegrounds? Participate in the BGMI esports competition and put your skills to the test against the best players. With thrilling gameplay and nail-biting matches, and win amazing prizes. Don't miss out on this adrenaline-fueled gaming experience and register today to be a part of the action-packed BGMI esports competition!`,
    time: '',
    register_link: 'https://forms.gle/vPjsmEMiYf2w6a9VA',
    contact: [],
    prizes: {
      winner: '',
      runner_up: ''
    }
  },
  {
    id: '1',
    imgSrc: FIFA.src,
    name: 'FIFA-18',
    description: `Join the FIFA-18 e sports competition in college and compete against the best players in the state. This is your chance to represent your college and make a name for yourself in the gaming world. With exciting prizes up for grabs. Don't miss out on this incredible opportunity to be a part of the FIFA-18 esports craze!`,
    time: '',
    register_link:
      'https://docs.google.com/forms/d/e/1FAIpQLSegacye9rhbAOSjv4zq6l1Erm-HUDl6bzSuYmr8NDANvWBHAA/viewform',
    contact: [],
    rules: '',
    prizes: {
      winner: '',
      runner_up: ''
    }
  },
  {
    id: '4',
    rules: '',
    imgSrc: Asphalt.src,
    name: 'Asphalt-8',
    description:
      "Get ready to burn some rubber and dominate the track in the Asphalt-8 e sports competition. This high-octane event is the ultimate test of speed, skill, and strategy, where you'll compete against other top players in a race to the finish line. With thrilling prizes. Don't miss out on this adrenaline-fueled event. Register now and start your engines!",
    time: '',
    register_link:
      'https://docs.google.com/forms/d/e/1FAIpQLSendeWNEt5Oq80SsKw0zxh1Y0-pXb6Ixo-woge6-zBxb4Ta0Q/viewform',
    contact: [],
    prizes: {
      winner: '',
      runner_up: ''
    }
  },
  {
    id: '5',
    rules: '',
    imgSrc: Valorant.src,
    name: 'Valorant',
    description:
      'Are you ready to unleash your tactical prowess and become a champion in the world of Valorant? Join the Valorant esports competition and compete against other skilled players. With thrilling gameplay and unique character abilities, this game is perfect for those who love strategy and teamwork. Register today and take the first step towards becoming a Valorant legend!',
    time: '',
    register_link:
      'https://docs.google.com/forms/d/e/1FAIpQLSd9TGrcR6G-9CMjn8pUZoYFk2b7x9Deatg2_pq3OPdpWcNCcw/viewform',
    contact: [],
    prizes: {
      winner: '',
      runner_up: ''
    }
  },
  {
    id: '6',
    rules: '',
    imgSrc: ClashRoyale.src,
    name: 'Clash Royale',
    description: `Get ready to clash with the best players in college esports! The Clash Royale competition is coming to campus, and it's time to show off your skills. Battle it out in this fast-paced strategy game for a chance to win exciting prizes. Don't miss your chance to compete in one of the hottest esports games around. Register today and get ready to clash!`,
    time: '',
    register_link:
      'https://docs.google.com/forms/d/e/1FAIpQLSci4aLKOmNEzxflT76JzPnCB_MosXDzGK6IJ6bm08t5_OgmfQ/viewform',
    contact: [],
    prizes: {
      winner: '',
      runner_up: ''
    }
  }
]

const Esports = () => {
  return (
    <section id={'esport-event'} className={'pt-10'}>
      <a href="#esport-event">
        <h2
          className={
            'uppercase text-4xl sm:text-5xl sm:text-center my-10 text-content'
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
            time
          }) => (
            <EventCard
              key={id}
              imgSrc={imgSrc}
              registrationLink={register_link}
              heading={name}
              description={description}
              time={time}
              prizes={prizes}
              rulesLink={rules}
              contacts={contact}
            />
          )
        )}
      </EventCardWrapper>
    </section>
  )
}

export default Esports
