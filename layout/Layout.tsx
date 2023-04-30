import { Alfa_Slab_One, Noto_Sans_Bengali, Roboto } from 'next/font/google'
import NextProgress from 'nextjs-progressbar'
import React from 'react'

import { HTMLDivProps } from '@/types/html'
import { tx } from '@twind/core'

import Footer from './Footer'
import Navbar from './Navbar'

const sigmarOne = Alfa_Slab_One({
  display: 'swap',
  variable: '--font-sigmar-one',
  weight: ['400'],
  subsets: ['latin']
})

const notoSansBengali = Noto_Sans_Bengali({
  display: 'swap',
  variable: '--font-bengali-noto-sans',
  subsets: ['bengali']
})

const roboto = Roboto({
  display: 'swap',
  weight: ['100', '300', '400', '500', '700', '900'],
  variable: '--font-roboto',
  subsets: ['latin']
})

export type LayoutProps = {
  children?: React.ReactNode | React.ReactNode[]
  hideFooter?: boolean
  hideNavbar?: boolean
  pageClassName?: string
  /**
   * If height of this page should be equal to screen height
   */
  screenHeight?: boolean
} & HTMLDivProps

const Layout = ({
  children,
  hideFooter,
  hideNavbar,
  className,
  pageClassName,
  screenHeight,
  ...props
}: LayoutProps) => {
  return (
    <div
      className={tx(
        roboto.variable,
        notoSansBengali.variable,
        sigmarOne.variable,
        'font-roboto bg-gray-900 text-white',
        className
      )}
      {...props}>
      <div
        className={tx(
          `flex flex-col min-h-screen`,
          screenHeight && `h-screen`
        )}>
        {!hideNavbar && <Navbar />}

        <NextProgress
          color="#6366f1"
          startPosition={0.3}
          stopDelayMs={0}
          height={3}
          showOnShallow={false}
        />

        <div
          className={tx(
            'flex-1 flex flex-col max-w-7xl w-full mx-auto overflow-hidden',
            pageClassName
          )}>
          {children}
        </div>
      </div>

      {!hideFooter && <Footer />}
    </div>
  )
}

export default Layout
