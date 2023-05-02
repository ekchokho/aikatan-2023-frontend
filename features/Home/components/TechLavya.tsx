import React from 'react'

import Codethon from '@/assets/events/codethon.png'
import Design from '@/assets/events/design.png'
import Exibition from '@/assets/events/exhibition.png'
import Hackthon from '@/assets/events/hackthon.png'
import Quiz from '@/assets/events/quiz.png'
import RoboRush from '@/assets/events/roborush.png'

import { EventCardV2 } from './EventCard'
import EventCardWrapper from './EventCardWrapper'

export const YetToBeAnnounced = 'Yet to be announced!!'

export const TechLavyaEvents = [
  {
    id: '8',
    limitWord: 'default',
    name: 'BRAIN-BUSTER school',
    topic: 'Technical Quiz',
    imgSrc: Quiz.src,
    time: '5th May from 09:00AM to 11:30AM',
    description:
      'Gear up folks to put your knowledge to the ultimate test. A chance for the geeks to show off your technical knowledge in the best way possible.',
    rules_regulation_link:
      'https://drive.google.com/file/d/1RVvvFJ7O-nvPQ5zgereduEyKiLL6rse1/view?usp=share_link',
    register_link:
      'https://docs.google.com/forms/d/e/1FAIpQLSc5urxGA3jBbxvSDbyZ7BoPjwPxnooJX9e0NC_cXazUGJMA6g/viewform',
    contact: [
      {
        name: '',
        number: '+91 9123353573'
      },
      {
        name: '',
        number: '+91 8240435348'
      }
    ],
    prizes: {
      winner: 'Trophy',
      runner_up: 'Trophy',
      runner_up_2nd: ''
    },
    location: 'EE Seminar Hall',
    entry_fee: ''
  },
  {
    id: '4',
    limitWord: 'default',
    name: 'Gravity Algogem',
    topic: 'Codethon',
    imgSrc: Codethon.src,
    time: '5th May at 9:00AM – 11AM',
    description:
      'Gear up folks to put your coding knowledge to the ultimate coding test. A chance for the geeks to show off your knowledge in the best way possible and stand a chance to win prizes.',
    rules_regulation_link: 'https://forms.gle/QvfYipBoHcNKxDQZA',
    register_link: 'https://forms.gle/QvfYipBoHcNKxDQZA',
    contact: [
      {
        name: '',
        number: '+91 7872644150'
      },
      {
        name: '',
        number: '+91 7001673308'
      }
    ],
    prizes: {
      winner: '3k',
      runner_up: '2k',
      runner_up_2nd: '1.5k'
    },
    location: 'Computer Lab',
    entry_fee: ''
  },
  {
    id: '1',
    limitWord: 'default',
    name: 'ACADEXPO - College',
    topic: 'project exhibition',
    time: '5th May 10:00AM-2:00PM',
    description:
      'Here comes one of the grandest project exhibition of the town for science and technology like no other. So buckle up and put your projects and stand a chance to win cool prizes.',
    rules_regulation_link:
      'https://drive.google.com/file/d/1LydTPN8M4WBapFf054mp63_3-mXmorJO/view?usp=sharing',
    register_link:
      'https://docs.google.com/forms/d/e/1FAIpQLSej1ZS2tne5M7rYo3Kxp-gmaaB05RxGNEEE59W_VlGU_3vchg/viewform',
    contact: [
      {
        name: '',
        number: '+91 9123353573'
      },
      {
        name: '',
        number: '+91 6291631796'
      }
    ],
    prizes: {
      winner: '8k',
      runner_up: '6k',
      runner_up_2nd: '5k'
    },
    imgSrc: Exibition.src,
    location: 'Front of CE/ECE Building',
    entry_fee: '1200Rs/Team'
  },
  {
    id: '7',
    limitWord: 'default',
    name: 'ACADEXPO - School ',
    topic: 'project exhibition',
    time: '5th May 10:00AM-2:00PM',
    description:
      'Here comes one of the grandest project exhibition of the town for science and technology like no other. So buckle up and put your projects and stand a chance to win cool prizes.',
    rules_regulation_link:
      'https://drive.google.com/file/d/1LydTPN8M4WBapFf054mp63_3-mXmorJO/view?usp=sharing',
    register_link:
      'https://docs.google.com/forms/d/e/1FAIpQLSej1ZS2tne5M7rYo3Kxp-gmaaB05RxGNEEE59W_VlGU_3vchg/viewform',
    contact: [
      {
        name: '',
        number: '+91 9123353573'
      },
      {
        name: '',
        number: '+91 6291631796'
      }
    ],
    prizes: {
      winner: '5k',
      runner_up: '3k',
      runner_up_2nd: '2k'
    },
    entry_fee: '500/team',
    imgSrc: Exibition.src,
    location: 'Front of CE/ECE Building'
  },
  {
    id: '6',
    limitWord: 'default',
    name: 'Graphic Designing',
    topic: 'Graphic Designing',
    imgSrc: Design.src,
    time: '5th May at 03:00PM-05:00PM',
    description:
      'Brings to you a graphics design challenge like never before. A chance for the geeks to show off your design knowledge in the best way possible and stand a chance to win prizes.',
    rules_regulation_link:
      'https://docs.google.com/forms/d/e/1FAIpQLScHI8YRhNJdUuPUfhfw3voRJp9n722Xj_YWwcVf1S-rZTcpbw/viewform',
    register_link:
      'https://docs.google.com/forms/d/e/1FAIpQLScHI8YRhNJdUuPUfhfw3voRJp9n722Xj_YWwcVf1S-rZTcpbw/viewform',
    contact: [
      {
        name: '',
        number: '+91 7872644150'
      },
      {
        name: '',
        number: '+91 7001673308'
      }
    ],
    prizes: {
      winner: '2K',
      runner_up: '1.5K',
      runner_up_2nd: '1K'
    },
    location: 'Classrooms',
    entry_fee: ''
  },
  {
    id: '3',
    limitWord: 16,
    name: 'HACK-VENGERS',
    topic: 'Hackathon',
    imgSrc: Hackthon.src,
    time: 'Question Declaration: 6th May 9:00AM, Presentation: 6th May at 3:00PM',
    description:
      'Get ready solve the real life problems which are tormenting  the real world. So gear up and get ready to leave your mark in this epic event of creativity and technical knowledge.',
    rules_regulation_link:
      'https://drive.google.com/file/d/12NpsZRvS-dH9PENtIe4JVk0IyBQDUEjQ/view?usp=sharing',
    register_link:
      'https://docs.google.com/forms/d/e/1FAIpQLSefzoV6R0LiqZ36Kci5_9_ugvYkYhzqJMKJ1wDkavwWQXDSXQ/viewform?usp=send_form',
    contact: [
      {
        name: '',
        number: '+91 9123353573'
      },
      {
        name: '',
        number: '+91 6291631796'
      }
    ],
    prizes: {
      winner: '3k',
      runner_up: '2k',
      runner_up_2nd: '1.5k'
    },
    location: 'ECE Seminar Hall',
    entry_fee: ''
  },
  {
    id: '5',
    limitWord: 'default',
    name: 'Robo-Rush',
    imgSrc: RoboRush.src,
    topic: 'Robo Car Racing',
    time: '06th May at 11:00AM-01:00PM',
    description:
      'Design your own robo car and prepare them for dirt, hills, pots and obstacles!!!!! So rub out the dust from your tools here the time comes to start innovation with exciting prizes for the winners.',
    rules_regulation_link:
      'https://drive.google.com/file/d/1unn2SRYUfMXJknRAxo_idAPH0WYmZzCs/view?usp=sharing',
    register_link:
      'https://docs.google.com/forms/d/e/1FAIpQLSf9F3ul_1vwi2jFO5fazw-30PEdyoAunoGwamja0sVogPP4Nw/viewform',
    contact: [
      {
        name: '',
        number: '+91 9123353573'
      },
      {
        name: '',
        number: '+91 8240435348'
      }
    ],
    prizes: {
      winner: '10k',
      runner_up: '7k',
      runner_up_2nd: '5k'
    },
    location: 'Volleyball Ground',
    entry_fee: '1200Rs/Team'
  },
  {
    id: '2',
    limitWord: 'default',
    name: 'BRAIN-BUSTER college',
    topic: 'Technical Quiz',
    imgSrc: Quiz.src,
    time: '6th May 03:00PM-05:00PM',
    description:
      'Gear up folks to put your knowledge to the ultimate test. A chance for the geeks to show off your technical knowledge in the best way possible.',
    rules_regulation_link:
      'https://drive.google.com/file/d/1RVvvFJ7O-nvPQ5zgereduEyKiLL6rse1/view?usp=share_link',
    register_link:
      'https://docs.google.com/forms/d/e/1FAIpQLSc5urxGA3jBbxvSDbyZ7BoPjwPxnooJX9e0NC_cXazUGJMA6g/viewform',
    contact: [
      {
        name: '',
        number: '+91 9123353573'
      },
      {
        name: '',
        number: '+91 8240435348'
      }
    ],
    prizes: {
      winner: 'Trophy',
      runner_up: 'Trophy',
      runner_up_2nd: ''
    },
    location: 'EE Seminar Hall',
    entry_fee: ''
  }
] as const

const TechLavya = () => {
  return (
    <section className="pt-10" id={'tech-event'}>
      <a href="#tech-event">
        <h2
          className={
            'uppercase text-4xl 2xl:text-5xl sm:text-center my-10 text-content'
          }>
          <span className="text-orange-500 font-extrabold">Techlavya </span>
          Event
        </h2>
      </a>
      <EventCardWrapper>
        {TechLavyaEvents.map(
          ({
            id,
            description,
            imgSrc,
            register_link,
            rules_regulation_link,
            name,
            contact,
            prizes,
            time,
            location,
            limitWord,
            entry_fee
          }) => (
            <EventCardV2
              key={id}
              description={description}
              imgSrc={imgSrc}
              heading={name}
              registrationLink={register_link}
              rulesLink={rules_regulation_link}
              contacts={contact}
              prizes={prizes}
              time={time}
              location={location}
              limitWord={limitWord}
              entry_fee={entry_fee}
            />
          )
        )}
      </EventCardWrapper>
    </section>
  )
}

export default TechLavya
