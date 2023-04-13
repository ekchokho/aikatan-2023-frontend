import React from 'react'

import Logo from '@/assets/events/THE OCTAVES.png'
import {
  EventImage,
  EventWrapper
} from '@/features/Home/components/EventHelper'

const TheOctaves = () => {
  return (
    <EventWrapper>
      <EventImage src={Logo.src}></EventImage>
    </EventWrapper>
  )
}

export default TheOctaves
