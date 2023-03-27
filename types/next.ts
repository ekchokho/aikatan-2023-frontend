import { NextPage } from 'next'
import { AppProps as NextAppProps } from 'next/app'
import { NextSeoProps } from 'next-seo'
import { ReactElement } from 'react'

import { LayoutProps } from '@/layout'

export type AppPage = NextPage & {
  (): ReactElement
  layout?: LayoutProps
  seo?: NextSeoProps
}

export type AppProps = NextAppProps & {
  Component: AppPage
}
