import React from 'react'

import { EventData } from '@/data'
import EventCardWrapper from '@/features/Home/components/EventCardWrapper'
import SpotLightItem from '@/features/Home/components/SpotLightItem'

const EventSchedule = () => {
  return (
    <section id={'event-schedule'} className="pt-10">
      <a href="#event-schedule">
        <h2 className={'text-4xl 2xl:text-5xl text-center my-10 text-content'}>
          <span className="text-green-500 font-semibold">EVENT </span>SCHEDULE
        </h2>
      </a>
      <EventCardWrapper>
        {EventData.map(({ date, shedules }) => (
          <EventScheduleCard key={date} shedules={shedules} date={date} />
        ))}
      </EventCardWrapper>
    </section>
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

const EventScheduleCard = ({ date, shedules }: EventCardProps) => {
  const dateTime = new Date(date)
  const dateToString = dateTime.toDateString().split(' ')
  const month = dateToString[1]
  const day = dateToString[0]
  const dayOfMonth = dateToString[2]
  return (
    <div className="flex flex-col gap-2 w-full sm:w-72 2xl:w-80">
      <div className="relative uppercase text-2xl 2xl:text-3xl">
        <p className="top-0 text-yellow-200 font-semibold">{month}</p>
        <p className="text-blue-500 font-black text-7xl 2xl:text-8xl font-sigmar-one">
          {dayOfMonth}
        </p>
        <p className="absolute text-slate-200 z-10 bottom-0 left-0 font-bold">
          {day}
        </p>
      </div>
      <SpotLightItem className={'bg-gray-800 p-4 rounded-lg shadow-xl'}>
        {shedules.map(({ name, from, to }, idx) => {
          return (
            <div key={idx} className="flex flex-row gap-3 items-center">
              <div className={'text-gray-400 text-lg'}>
                <p>{to}</p>
                <p className={'text-center'}>{from}</p>
              </div>
              <p className="text-base 2xl:font-xl font-medium 2xl:font-semibold">
                {name}
              </p>
            </div>
          )
        })}
      </SpotLightItem>
    </div>
  )
}
