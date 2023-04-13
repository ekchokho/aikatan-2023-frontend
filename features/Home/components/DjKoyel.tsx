import React from 'react'

import Logo from '@/assets/events/dj-koyel.png'
import {
  EventImage,
  EventWrapper
} from '@/features/Home/components/EventHelper'

const DjKoyel = () => {
  return (
    <EventWrapper>
      <EventImage src={Logo.src}></EventImage>
    </EventWrapper>
  )
}

export default DjKoyel
