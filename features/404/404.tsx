import React from 'react'

import { AppPage } from '@/types'

const Custom404: AppPage = () => {
  return (
    <div className={'h-full flex items-center justify-center flex-1'}>
      <h1 className="text-3xl">404 - Page Not Found</h1>
    </div>
  )
}
Custom404.seo = {
  title: 'ঐকtan2.0 | 404 - Page Not Found',
  openGraph: {
    title: 'ঐকtan2.0 | 404 - Page Not Found',
    images: [
      {
        url: '/404.png'
      }
    ]
  }
}

export default Custom404
