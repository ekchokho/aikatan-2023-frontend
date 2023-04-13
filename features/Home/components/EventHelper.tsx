import React from 'react'

type propsCommon = { children: React.ReactNode }

const EventWrapper = ({ children }: propsCommon) => {
  return (
    <div className="z-10 w-full flex items-center flex-col gap-3">
      {children}
    </div>
  )
}

const EventImage = ({ src }: { src: string }) => {
  return (
    <div className="relative flex items-center flex-col">
      <div className={'w-52 sm:w-full sm:max-w-sm h-full scale-150 opacity-90'}>
        <img src={src} className={'w-full h-full'} alt={''} />
      </div>
    </div>
  )
}

const EventContent = ({ children }: propsCommon) => {
  return <div>{children}</div>
}

export { EventContent, EventImage, EventWrapper }
