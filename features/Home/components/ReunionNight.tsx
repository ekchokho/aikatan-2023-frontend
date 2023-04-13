import React from 'react'

import Logo from '@/assets/events/reunion-night.png'
import {
  EventImage,
  EventWrapper
} from '@/features/Home/components/EventHelper'

const ReunionNight = () => {
  return (
    <EventWrapper>
      <EventImage src={Logo.src}></EventImage>
    </EventWrapper>
  )
}

export default ReunionNight
