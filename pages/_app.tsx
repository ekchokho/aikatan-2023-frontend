import React from 'react'

import { twindConfig } from '@/config'
import { Layout } from '@/layout'
import { AppProps } from '@/types'
import install from '@twind/with-next/app'

import '@/styles/globals.css'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout {...(Component.layout || {})}>
      <Component {...pageProps} />
    </Layout>
  )
}

export default install(twindConfig, App)
