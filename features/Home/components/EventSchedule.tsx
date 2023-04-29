import React from 'react'

import { EventData } from '@/data'

const EventSchedule = () => {
  return (
    <div className={'mb-10'}>
      <a href="#event-schedule">
        <h2 className={'text-5xl sm:text-center my-10 text-content'}>
          EVENT <span className="text-orange-500 font-semibold">SCHEDULE</span>
        </h2>
      </a>
      <div className="flex justify-center">
        <div className={'flex flex-wrap gap-10'}>
          {EventData.map(({ date, shedules }, idx) => (
            <EventCard key={idx} shedules={shedules} date={date} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default EventSchedule

type shedule = {
  to: string
  from: string
  name: string
}
type EventCardProps = {
  date: string
  shedules: readonly shedule[]
}

const EventCard = ({ date, shedules }: EventCardProps) => {
  const dateTime = new Date(date)
  const dateToString = dateTime.toDateString().split(' ')
  const month = dateToString[1]
  const day = dateToString[0]
  const dayOfMonth = dateToString[2]
  return (
    <div className="flex flex-col gap-2 w-80">
      <div className="relative uppercase text-3xl">
        <p className="top-0 text-yellow-200 font-semibold">{month}</p>
        <p className="text-blue-500 font-black text-8xl font-sigmar-one">
          {dayOfMonth}
        </p>
        <p className="absolute text-slate-200 z-10 bottom-0 left-0 font-bold">
          {day}Day
        </p>
      </div>
      <div className={'bg-gray-800 p-4 rounded-lg shadow-xl'}>
        {shedules.map(({ name, from, to }, idx) => {
          return (
            <div key={idx} className="flex flex-row gap-3 items-center">
              <div className={'text-gray-400 text-lg'}>
                <p>{to}</p>
                <p className={'text-center'}>{from}</p>
              </div>
              <p className="text-xl font-semibold">{name}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}
