import React from 'react'

import Logo from '@/assets/events/cho-nach.png'
import {
  EventImage,
  EventWrapper
} from '@/features/Home/components/EventHelper'

const ChoNach = () => {
  return (
    <EventWrapper>
      <EventImage src={Logo.src}></EventImage>
    </EventWrapper>
  )
}

export default ChoNach
