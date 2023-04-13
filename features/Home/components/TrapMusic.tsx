import React from 'react'

import Logo from '@/assets/events/trap.png'
import {
  EventImage,
  EventWrapper
} from '@/features/Home/components/EventHelper'

const TrapMusic = () => {
  return (
    <EventWrapper>
      <EventImage src={Logo.src}></EventImage>
    </EventWrapper>
  )
}

export default TrapMusic
