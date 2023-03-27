import { LayoutProps } from 'components'
import { NextPage } from 'next'
import { AppProps as NextAppProps } from 'next/app'
import { ReactElement } from 'react'

export type AppPage = NextPage & {
  (): ReactElement
  layout?: LayoutProps
}

export type AppProps = NextAppProps & {
  Component: AppPage
}
