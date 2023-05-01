import { DefaultSeo, DefaultSeoProps, NextSeo, NextSeoProps } from 'next-seo'
import React from 'react'

const common = {
  title: 'ঐকtan2.0 - Unleash your tech skills and creativity!',
  desc: `Aikatan is the Annual Techno - Cultural fest of Ramkrishna Mahato Government Engineering College. As one of the largest Techno - Cultural fest of west bengal, It is a medium to promote technology and cultural events in young minds in order to feed an arduous Tomorrow.`,
  logo: 'https://www.aikatan.org.in/favicon.svg',
  banner: 'https://www.aikatan.org.in/mainbanner-v2.png',
  link: 'https://www.aikatan.org.in/'
} as const

const seoConfig: DefaultSeoProps = {
  defaultTitle: common.title,
  description: common.desc,
  additionalLinkTags: [
    {
      rel: 'icon',
      href: common.logo
    }
  ],
  openGraph: {
    url: common.link,
    title: common.title,
    description: common.desc,
    site_name: common.title,
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: common.banner,
        width: 1920,
        height: 1080,
        alt: 'Aikatan Banner'
      }
    ]
  },
  twitter: {
    site: common.link,
    handle: '',
    cardType: 'summary'
  }
}

const HeadManager = (props: NextSeoProps) => {
  return (
    <>
      <DefaultSeo {...seoConfig} />
      <NextSeo {...props} />
    </>
  )
}

export default HeadManager
