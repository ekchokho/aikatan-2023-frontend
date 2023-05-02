import React from 'react'

import { tx } from '@twind/core'

const EventCardWrapper = ({
  children,
  className
}: {
  children: React.ReactNode
  className?: string
}) => {
  return (
    <div className={tx('flex flex-wrap gap-10 justify-center', className)}>
      {children}
    </div>
  )
}

export default EventCardWrapper
