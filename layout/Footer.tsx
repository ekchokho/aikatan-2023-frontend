import React from 'react'

import {
  Social,
  SocialCard,
  SocialCardWrapper
} from '@/features/Home/components/SponserShip'
import SpotLightItem from '@/features/Home/components/SpotLightItem'

const social: Social[] = [
  { id: 'facebook', link: 'https://www.facebook.com/aikatan2.0' },
  { id: 'instagram', link: 'https://www.instagram.com/aikatan2.0/' },
  { id: 'youtube', link: 'https://www.youtube.com/@RKMGECOFFICIAL' }
]

const Footer = () => {
  return (
    <SpotLightItem className={'mt-20 text-gray-300'}>
      <div className="px-3 flex flex-col gap-5 pt-5 pb-3 items-center justify-center sm:max-w-3xl mx-auto">
        <div className="flex flex-wrap gap-5 sm:gap-10">
          <div className="flex flex-col">
            <a
              href={'#home'}
              className="text-xl sm:text-2xl 2xl:text-3xl font-extrabold">
              <span className={'font-bengali-noto-sans'}>ঐক</span>tan2.0
            </a>
            <p className={'max-w-xs'}>
              Experience the thrill of innovation, the ultimate tech fest! Join
              us for a day of exciting events and workshops covering from coding
              to design.
            </p>
            <p className="font-semibold pt-1">Email:</p>
            <p>fest@rkmgec.ac.in</p>
          </div>

          <div className="flex flex-col">
            <p className="font-semibold">Socials:</p>

            <SocialCardWrapper
              className={'!flex-col !pt-0 !items-start !gap-1'}>
              {social.map(({ id, link }) => (
                <SocialCard link={link} id={id} key={id} showText />
              ))}
            </SocialCardWrapper>
          </div>
          <div className="flex flex-col">
            <p className="font-semibold">Address:</p>
            <p className={'max-w-[10rem]'}>
              Ramkrishna Mahato Government Engineering College, Agharpur,
              Purulia 723103.
            </p>
            <SocialCard
              id={'location'}
              link={
                'https://www.google.com/maps/place/Ram+Krishna+Mahato+Government+Engineering+College,+Purulia,+Purulia,+West+Bengal+723201/data=!4m2!3m1!1s0x39f42bd030b6ed53:0x4b97db1500c8b4a3?entry=gps&lucs=47064836&coh=175364&g_ep=CAESCTExLjcxLjMwMBgAIIgnKgg0NzA2NDgzNkICSU4%3D'
              }
              showText
            />
          </div>
        </div>
      </div>
      <p className="text-center border-t-2 mt-5 py-5 border-gray-600 px-3">
        ©2023 Aikatan2.0 - Web & Designer Team. All rights reserved.
      </p>
    </SpotLightItem>
  )
}

export default Footer
