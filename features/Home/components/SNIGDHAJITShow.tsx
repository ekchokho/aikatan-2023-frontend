import React from 'react'

import Logo from '@/assets/events/SNIGDHAJIT.png'
import {
  EventImage,
  EventWrapper
} from '@/features/Home/components/EventHelper'

const SnigdhajitShow = () => {
  return (
    <EventWrapper>
      <EventImage src={Logo.src}></EventImage>
    </EventWrapper>
  )
}

export default SnigdhajitShow
