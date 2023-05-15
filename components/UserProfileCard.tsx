import React from 'react'

// import { AiOutlinePhone } from 'react-icons/ai'
import {
  Social,
  SocialCard,
  SocialCardWrapper
} from '@/features/Home/components/SponserShip'
import SpotLightItem from '@/features/Home/components/SpotLightItem'

type UserProfileCardProps = {
  name: {
    fistName: string
    lastName: string
  }
  contact_no?: string
  imgSrc?: string
  title: string
  social?: readonly Social[]
}

const UserProfileCard = ({
  // contact_no,
  imgSrc,
  name,
  title,
  social
}: UserProfileCardProps) => {
  const { fistName, lastName } = name
  return (
    <SpotLightItem className={'rounded'}>
      <div className="w-64 2xl:w-72 px-4 rounded shadow-xl py-4 flex flex-col gap-4 items-center">
        {imgSrc && (
          <div className={'p-1 rounded-full'}>
            <div className={'p-1 bg-red-500 rounded-full'}>
              <div
                className={
                  'w-36 h-36 2xl:w-40 2xl:h-40 overflow-hidden rounded-full'
                }>
                <img src={imgSrc} alt={'profile picture of' + name} />
              </div>
            </div>
          </div>
        )}
        <div className="flex flex-col items-center gap-1">
          <div className="flex flex-col items-center">
            <p className={'font-extrabold text-2xl 2xl:text-3xl text-rose-500'}>
              {fistName} {lastName}
            </p>
            <p className={'font-semibold text-lg'}>{title}</p>
          </div>
          {/* <div className="flex flex-row items-center justify-center gap-1 text-gray-300">
            <AiOutlinePhone size={18} />
            <p>{contact_no}</p>
          </div> */}
          {social && social.length > 0 && (
            <SocialCardWrapper>
              {social.map(({ id, link }) => (
                <SocialCard link={link} id={id} key={id} />
              ))}
            </SocialCardWrapper>
          )}
        </div>
      </div>
    </SpotLightItem>
  )
}

export default UserProfileCard
