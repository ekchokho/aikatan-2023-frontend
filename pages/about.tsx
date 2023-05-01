import React from 'react'

import { AppPage } from '@/types'

const About: AppPage = () => {
  return (
    <section
      className={
        'h-full flex flex-col max-w-xl mx-auto items-center justify-center flex-1'
      }>
      <h2 className={'uppercase text-4xl 2xl:text-5xl my-8 text-content'}>
        <span className="text-orange-500 font-extrabold">About Aikatan</span>
      </h2>
      <div className={'text-lg text-gray-300'}>
        <p>
          <b>Aikatan</b> is the Annual Techno - Cultural Fest of RKMGEC. As one
          of the largest Techno - Cultural fest of west bengal, It is a medium
          to promote technology and cultural events in young minds in order to
          feed an arduous Tomorrow.
        </p>
        <br />
        <p>
          <a
            href="https://rkmgec.ac.in/"
            className={'underline hover:text-sky-500'}>
            <b>Ramkrishna Mahato Government Engineering College</b>
          </a>{' '}
          was established in 2016.It is a center of excellence with a total of 5
          branches and allied areas by the government of india.
        </p>
      </div>
    </section>
  )
}

About.seo = {
  title: 'ঐকtan2.0 | About Us',
  openGraph: {
    title: 'ঐকtan2.0 | About Us',
    images: [
      {
        url: '/about.png'
      }
    ]
  }
}

export default About
