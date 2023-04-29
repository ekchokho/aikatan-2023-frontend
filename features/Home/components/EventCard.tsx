import React, { useState } from 'react'

import SpotLightItem from './SpotLightItem'

type EventCardProps = {
  description: string
  imgSrc: string
  heading: string
  registrationLink: string
  rulesLink: string
  time: string
  prizes: {
    winner: string
    runner_up: string
  }
  contacts: readonly {
    name: string
    number: string
  }[]
}

export const EventCard = ({
  description,
  heading,
  imgSrc,
  registrationLink,
  rulesLink,
  contacts,
  prizes,
  time
}: EventCardProps) => {
  const [showMore, setShowMore] = useState(false)

  const paragraph = () => {
    const words = description.split(' ')
    const wordsCount = showMore ? words.length : 21
    return words.slice(0, wordsCount).join(' ')
  }

  return (
    <div className={'w-full h-max sm:w-80 rounded shadow-xl overflow-hidden'}>
      <div
        className={`bg-center bg-cover w-full h-32 overflow-auto bg-[url(${imgSrc})]`}></div>

      <SpotLightItem>
        <div className="px-4 py-5 flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <h3 className={'text-3xl font-semibold'}>{heading}</h3>

            <div className="text-content-medium flex flex-col gap-2">
              <p>
                {paragraph()}
                {showMore ? '' : '...'}
              </p>
              {showMore && (
                <div className="flex flex-col gap-2">
                  {prizes && (prizes.winner || prizes.runner_up) && (
                    <div>
                      <p>
                        <b>Prizes:</b>
                      </p>
                      {prizes.winner && <p>Winner - {prizes.winner} Rs</p>}
                      {prizes.runner_up && (
                        <p>RunnerUp - {prizes.runner_up} Rs</p>
                      )}
                    </div>
                  )}
                  {time && (
                    <div>
                      <p>
                        <b>Time: </b>
                      </p>
                      <p> {time}</p>
                    </div>
                  )}

                  {contacts.length > 0 && (
                    <div>
                      <p>
                        <b>Contact:</b>{' '}
                        {contacts
                          .map(({ number, name }) => {
                            if (name) {
                              return `${number} (${name})`
                            } else {
                              return number
                            }
                          })
                          .join(', ')}
                      </p>
                    </div>
                  )}
                </div>
              )}

              <p
                className="w-max text-blue-700 hover:underline cursor-pointer"
                onClick={() => setShowMore((prev) => !prev)}>
                {showMore ? 'show less' : 'show more'}
              </p>
            </div>
          </div>
          <div className={'flex flex-row gap-3'}>
            {registrationLink && (
              <a href={registrationLink}>
                <button
                  className={
                    'bg-blue-700 px-4 rounded-sm py-1 text-lg hover:bg-blue-900'
                  }>
                  Register
                </button>
              </a>
            )}
            {rulesLink && (
              <a href={rulesLink}>
                <button
                  className={
                    'border border-blue-700 text-blue-700 bg-sky-100 px-4 rounded-sm py-1 text-lg hover:bg-blue-200 hover:text-blue-700'
                  }>
                  Rules
                </button>
              </a>
            )}
          </div>
        </div>
      </SpotLightItem>
    </div>
  )
}

export default EventCard
