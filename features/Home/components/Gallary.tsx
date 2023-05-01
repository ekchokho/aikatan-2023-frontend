import { motion } from 'framer-motion'
import React from 'react'

import Image2 from '@/assets/Aikatan19/2.jpg'
import Image3 from '@/assets/Aikatan19/3.jpg'
import Image4 from '@/assets/Aikatan19/4.jpg'
import Image6 from '@/assets/Aikatan19/6.jpg'
import Image8 from '@/assets/Aikatan19/8.jpg'
import Image9 from '@/assets/Aikatan19/9.jpg'
import Image10 from '@/assets/Aikatan19/10.jpg'
import Image11 from '@/assets/Aikatan19/11.jpg'
import SpotLightItem from '@/features/Home/components/SpotLightItem'

const GallaryData = [
  {
    id: '1',
    imgSrc: Image8.src
  },
  {
    id: '9',
    imgSrc: Image9.src
  },
  {
    id: '10',
    imgSrc: Image10.src
  },
  {
    id: '11',
    imgSrc: Image11.src
  },
  {
    id: '2',
    imgSrc: Image2.src
  },
  {
    id: '3',
    imgSrc: Image3.src
  },
  {
    id: '4',
    imgSrc: Image4.src
  },
  {
    id: '6',
    imgSrc: Image6.src
  }
] as const

const Gallary = () => {
  return (
    <section
      className={'flex flex-col gap-2 items-center pt-10'}
      id={'gallary'}>
      <a href="#gallary">
        <h2
          className={
            'font-extrabold uppercase text-4xl 2xl:text-5xl sm:text-center my-10 text-content'
          }>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-yellow-500">
            Gallary
          </span>
        </h2>
      </a>
      <div className="flex flex-wrap gap-2 justify-center">
        {GallaryData.map(({ id, imgSrc }) => (
          <GallaryCard key={id} imgSrc={imgSrc} />
        ))}
      </div>
    </section>
  )
}

export default Gallary

const GallaryCard = ({ imgSrc }: { imgSrc: string }) => {
  return (
    <SpotLightItem className="p-1">
      <div className={'w-60 h-60 overflow-hidden rouned'}>
        <motion.img
          src={imgSrc}
          alt=""
          className={'object-cover w-full h-full transition'}
          whileHover={{
            scale: 1.09
          }}
        />
      </div>
    </SpotLightItem>
  )
}
