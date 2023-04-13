import React from 'react'

import Logo from '@/assets/events/techlavya.png'
import {
  EventImage,
  EventWrapper
} from '@/features/Home/components/EventHelper'

const TechLavya = () => {
  return (
    <EventWrapper>
      <EventImage src={Logo.src}></EventImage>
    </EventWrapper>
  )
}

export default TechLavya
