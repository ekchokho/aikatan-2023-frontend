import React from 'react'
import {
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsLink45Deg,
  BsLinkedin,
  BsTwitter,
  BsYoutube
} from 'react-icons/bs'
import { HiLocationMarker } from 'react-icons/hi'

import ArdentComputech from '@/assets/sponsers/ardent_logo.png'
import Bongochorcha from '@/assets/sponsers/bongochorcha.png'
import KBCityMall from '@/assets/sponsers/city-mall.png'
import Ekchokho from '@/assets/sponsers/ekchokho.png'
import EventMas from '@/assets/sponsers/eventmas.png'
import FriendsFM from '@/assets/sponsers/friends-fm.png'
import PragatiCement from '@/assets/sponsers/pragati-cement.png'
import Reel2Real from '@/assets/sponsers/reel2real.png'
import SagarRajResorts from '@/assets/sponsers/sagar-raj-resorts.png'
import SriRajharia from '@/assets/sponsers/sri-rajgharia.png'
import TelegraphOnline from '@/assets/sponsers/telegraph.png'
import SpotLightItem from '@/features/Home/components/SpotLightItem'
import { tx } from '@twind/core'

import EventCardWrapper from './EventCardWrapper'

export const socialIconMap = {
  facebook: BsFacebook,
  instagram: BsInstagram,
  linkedin: BsLinkedin,
  website: BsLink45Deg,
  youtube: BsYoutube,
  location: HiLocationMarker,
  twitter: BsTwitter,
  github: BsGithub
}

const SponserShipData = [
  {
    id: 1,
    imgSrc: EventMas.src,
    description: '',
    title: 'EventMas',
    location: '',
    type: 'Official Event Partner',
    social: [
      {
        id: 'instagram',
        link: 'https://www.instagram.com/eventmas_india_official/'
      },
      {
        id: 'facebook',
        link: 'https://www.instagram.com/eventmas_india_official/'
      }
    ]
  },
  {
    id: 2,
    imgSrc: TelegraphOnline.src,
    description: '',
    title: 'Edugraph',
    location: '',
    type: 'Digital Media Partner',
    social: [
      {
        id: 'instagram',
        link: 'https://www.instagram.com/tt_edugraph/'
      },
      {
        id: 'website',
        link: 'https://linktr.ee/edugraph1'
      }
    ]
  },
  {
    id: 3,
    imgSrc: SagarRajResorts.src,
    description: '',
    title: 'Sagar Raj Resorts',
    location: '',
    type: 'Hotel & Lodging Partner',
    social: [
      {
        id: 'website',
        link: 'https://sagarrajresort.com/'
      }
    ]
  },
  {
    id: 6,
    imgSrc: Reel2Real.src,
    description: '',
    title: 'Reel2Real',
    location: '',
    type: 'Merchandise Partner',
    social: [
      {
        id: 'facebook',
        link: 'https://www.facebook.com/reel2real.ronit/'
      }
    ]
  },
  {
    id: 11,
    imgSrc: KBCityMall.src,
    description: '',
    title: 'KB City Mall',
    location: '',
    type: 'Asociate Sponsor',
    social: [
      {
        id: 'facebook',
        link: 'https://www.facebook.com/kbcitymallpurulia'
      }
    ]
  },
  {
    id: 4,
    imgSrc: ArdentComputech.src,
    description: '',
    title: 'Ardent Computech',
    location: '',
    type: 'Training Partner',
    social: [
      {
        id: 'facebook',
        link: 'https://www.facebook.com/Ardentgroup/'
      },
      {
        id: 'linkedin',
        link: 'https://www.linkedin.com/company/ardentinternships/'
      },
      {
        id: 'website',
        link: 'https://www.ardentcollaborations.com/'
      }
    ]
  },
  {
    id: 5,
    imgSrc: PragatiCement.src,
    description: '',
    title: 'Pragati Cement',
    location: '',
    type: 'Asociate Sponsor',
    social: [
      {
        id: 'website',
        link: 'https://pragatigranito.com/pragaticement.php'
      },
      {
        id: 'facebook',
        link: 'https://www.facebook.com/PragatiCementIndiaPvtLtd'
      }
    ]
  },
  {
    id: 7,
    imgSrc: SriRajharia.src,
    description: '',
    title: 'Sri Rajgaria Jewel.',
    location: '',
    type: 'Asociate Sponsor',
    social: [
      {
        id: 'facebook',
        link: 'https://www.facebook.com/profile.php?id=100063572274391'
      }
    ]
  },
  {
    id: 8,
    imgSrc: FriendsFM.src,
    description: '',
    title: '91.9Friends FM',
    location: '',
    type: 'Radio Partner',
    social: [
      {
        id: 'instagram',
        link: 'https://www.instagram.com/919friendsfm/'
      }
    ]
  },
  {
    id: 9,
    imgSrc: Ekchokho.src,
    description: '',
    title: 'Ekchokho',
    location: '',
    type: 'Graphic Design & Content',
    social: [
      {
        id: 'facebook',
        link: 'https://www.facebook.com/ekchokhocom'
      },
      {
        id: 'website',
        link: 'https://www.ekchokho.com/'
      }
    ]
  },
  {
    id: 10,
    imgSrc: Bongochorcha.src,
    description: '',
    title: 'Bongochorcha',
    location: '',
    type: 'Social Media Partner',
    social: [
      {
        id: 'facebook',
        link: 'https://www.facebook.com/bongochorcha'
      },
      {
        id: 'instagram',
        link: 'https://www.instagram.com/__bongochorcha__/'
      },
      {
        id: 'youtube',
        link: 'https://www.youtube.com/channel/UCod9erptzxXoaUPgEiSSyvA'
      },
      {
        id: 'website',
        link: 'https://bongochorcha.wixsite.com/bongochorcha'
      }
    ]
  }
] as const

const SponserShip = () => {
  return (
    <section
      className={'flex flex-col gap-2 items-center pt-10'}
      id={'partner-sponsor'}>
      <a href="#partner-sponsor">
        <h2
          className={
            'font-extrabold uppercase text-4xl 2xl:text-5xl sm:text-center my-10 text-content'
          }>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-indigo-500">
            Partner
          </span>{' '}
          &{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
            Sponsor
          </span>
        </h2>
      </a>
      <EventCardWrapper>
        {SponserShipData.map(
          ({ description, type, imgSrc, location, social, title, id }) => (
            <SponserShipCard
              type={type}
              key={id}
              description={description}
              imgSrc={imgSrc}
              location={location}
              social={social}
              title={title}
            />
          )
        )}
      </EventCardWrapper>
    </section>
  )
}

export default SponserShip

export type Social = { id: keyof typeof socialIconMap; link: string }
type SponserShipCardProps = {
  imgSrc: string
  description: string
  title: string
  type: string
  location: string
  social: readonly Social[]
}

const SponserShipCard = ({
  description,
  imgSrc,
  location,
  title,
  type,
  social
}: SponserShipCardProps) => {
  return (
    <div
      className={
        'w-full h-max sm:w-72 2xl:w-80 rounded shadow-xl overflow-hidden'
      }>
      <div
        className={`bg-center bg-cover w-full h-32 overflow-auto bg-[url(${imgSrc})]`}></div>
      <SpotLightItem>
        <div className="px-4 py-5 flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <h3 className={'text-xl 2xl:text-2xl font-semibold uppercase'}>
              {title}
            </h3>
            <h4 className={'2xl:text-xl text-gray-100'}>{type}</h4>
            <div className="text-content-medium flex flex-col gap-2">
              {description && (
                <p className="text-content-medium">{description}</p>
              )}
              {location && (
                <div>
                  <p>
                    <b>Location:</b>{' '}
                  </p>
                  <p>{location}</p>
                </div>
              )}
              <SocialCardWrapper>
                {social.map(({ id, link }) => (
                  <SocialCard link={link} id={id} key={id} />
                ))}
              </SocialCardWrapper>
            </div>
          </div>
        </div>
      </SpotLightItem>
    </div>
  )
}

export const SocialCardWrapper = ({
  children,
  className
}: {
  children: React.ReactNode
  className?: string
}) => {
  return (
    <div
      className={tx(
        'flex flex-row gap-2 pt-4 items-center text-gray-300',
        className
      )}>
      {children}
    </div>
  )
}
export const SocialCard = ({
  id,
  link,
  showText = false
}: { size?: number; showText?: boolean } & Social) => {
  const Icon = socialIconMap[id]
  return (
    <a
      href={link}
      key={id}
      target={'_blank'}
      rel="noreferrer"
      className={
        'transition hover:text-blue-400 flex flex-row items-center gap-1'
      }>
      <Icon className={'text-base 2xl:text-lg'} />
      {showText && <span className="capitalize">{id}</span>}
    </a>
  )
}
