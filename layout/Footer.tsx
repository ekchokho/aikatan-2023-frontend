import React from 'react'
import { BsFacebook, BsInstagram } from 'react-icons/bs'
import { GrYoutube } from 'react-icons/gr'
import { HiLocationMarker } from 'react-icons/hi'

import Logo from '@/assets/icons/Aikatan-logo.webp'

const Footer = () => {
  return (
    <div className="flex flex-col gap-3 pt-5 pb-3 bg-gray-800">
      <div className={'flex flex-col justify-center gap-2 items-center'}>
        <img src={Logo.src} alt="" width={60} />
        <h3 className={'text-center text-2xl'}>Aikatan 2k23</h3>
      </div>
      <div className={'flex flex-row justify-center gap-4 items-center'}>
        <a href="https://www.facebook.com/aikatan2.0">
          <BsFacebook size={20} />
        </a>
        <a href="https://www.instagram.com/aikatan2.0/">
          <BsInstagram size={20} />
        </a>
        <a href="https://www.youtube.com/@RKMGECOFFICIAL">
          <GrYoutube size={20} />
        </a>
        <a href="https://www.google.com/maps/place/Ram+Krishna+Mahato+Government+Engineering+College,+Purulia,+Purulia,+West+Bengal+723201/data=!4m2!3m1!1s0x39f42bd030b6ed53:0x4b97db1500c8b4a3?entry=gps&lucs=47064836&coh=175364&g_ep=CAESCTExLjcxLjMwMBgAIIgnKgg0NzA2NDgzNkICSU4%3D">
          <HiLocationMarker size={20} />
          {/* <span>Ram Krishna Mahato Government Engineering College</span> */}
        </a>
      </div>
      <p className="text-center">
        ©2023{' '}
        <a href="https://rkmgec.ac.in/" className="underline text-blue-500">
          RKMGEC
        </a>
        . All rights reserved.
      </p>
    </div>
  )
}

export default Footer
