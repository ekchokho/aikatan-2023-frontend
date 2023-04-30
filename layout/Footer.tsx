import React from 'react'

import Logo from '@/assets/icons/Aikatan-logo.webp'
import {
  Social,
  SocialCard,
  SocialCardWrapper
} from '@/features/Home/components/SponserShip'
import SpotLightItem from '@/features/Home/components/SpotLightItem'

const social: Social[] = [
  { id: 'facebook', link: 'https://www.facebook.com/aikatan2.0' },
  { id: 'instagram', link: 'https://www.instagram.com/aikatan2.0/' },
  { id: 'youtube', link: 'https://www.youtube.com/@RKMGECOFFICIAL' },
  {
    id: 'location',
    link: 'https://www.google.com/maps/place/Ram+Krishna+Mahato+Government+Engineering+College,+Purulia,+Purulia,+West+Bengal+723201/data=!4m2!3m1!1s0x39f42bd030b6ed53:0x4b97db1500c8b4a3?entry=gps&lucs=47064836&coh=175364&g_ep=CAESCTExLjcxLjMwMBgAIIgnKgg0NzA2NDgzNkICSU4%3D'
  }
]

const Footer = () => {
  return (
    <SpotLightItem className={'mt-20'}>
      <div className="flex flex-col gap-3 pt-5 pb-3 items-center">
        <div className={'flex flex-col justify-center gap-2 items-center'}>
          <img src={Logo.src} alt="" width={60} />
          <h3 className={'text-center text-2xl'}>Aikatan 2k23</h3>
        </div>
        <SocialCardWrapper>
          {social.map(({ id, link }) => (
            <SocialCard link={link} id={id} key={id} size={20} />
          ))}
        </SocialCardWrapper>
        <p className="text-center">
          ©2023 Aikatan2.0 - Web & Designer Team. All rights reserved.
        </p>
      </div>
    </SpotLightItem>
  )
}

export default Footer
