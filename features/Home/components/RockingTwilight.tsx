import React from 'react'

import Logo from '@/assets/events/roking-twlight.png'
import {
  EventImage,
  EventWrapper
} from '@/features/Home/components/EventHelper'

const RockingTwilight = () => {
  return (
    <EventWrapper>
      <EventImage src={Logo.src}></EventImage>
    </EventWrapper>
  )
}

export default RockingTwilight
