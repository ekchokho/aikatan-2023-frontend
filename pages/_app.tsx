import React from 'react'

import { twindConfig } from '@/config'
import { HeadManager, Layout } from '@/layout'
import { AppProps } from '@/types'
import install from '@twind/with-next/app'

import '@/styles/globals.scss'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <HeadManager {...(Component.seo || {})} />
      <Layout {...(Component.layout || {})}>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default install(twindConfig, App)
