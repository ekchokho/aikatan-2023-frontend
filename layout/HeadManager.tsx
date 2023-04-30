import Head from 'next/head'
import { DefaultSeo, DefaultSeoProps, NextSeo, NextSeoProps } from 'next-seo'
import React from 'react'

const common = {
  title:
    'Aikatan 2.0 - Get ready to experience a world of Creativity Innovation Entertainment.',
  longTitle:
    'Aikatan 2.0 - Get ready to experience a world of Creativity Innovation Entertainment..',
  desc: 'Aikatan 2.0 - Get ready to experience a world of Creativity Innovation Entertainment. Presented By Ramkrishna Mahato Government Engineering College.',
  logo: '/favicon.svg',
  banner: '/favicon.svg',
  link: 'https://www.aikatan.org.in/'
} as const

const seoConfig: DefaultSeoProps = {
  defaultTitle: common.longTitle,
  description: common.desc,
  additionalLinkTags: [
    {
      rel: 'icon',
      href: common.logo
    }
  ],
  openGraph: {
    url: common.link,
    title: common.longTitle,
    description: common.desc,
    site_name: common.title,
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: common.logo,
        width: 512,
        height: 512,
        alt: 'Aikatan Logo',
        type: 'image/png'
      },
      {
        url: common.banner,
        width: 1920,
        height: 1080,
        alt: 'Aikatan Banner',
        type: 'image/svg'
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
      <Head>
        <link rel="icon" href="/favicon.svg" />
        <title>{common.title}</title>
      </Head>
      <DefaultSeo {...seoConfig} />
      <NextSeo {...props} />
    </>
  )
}

export default HeadManager
