import React from 'react'

const EventCardWrapper = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex flex-wrap gap-10 justify-center">{children}</div>
}

export default EventCardWrapper
