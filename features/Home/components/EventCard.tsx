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
    runner_up_2nd?: string
  }
  location: string
  contacts: readonly {
    name: string
    number: string
  }[]
  limitWord: number | 'default'
  className?: string
  entry_fee?: string
}

export const EventCard = ({
  description,
  heading,
  imgSrc,
  registrationLink,
  rulesLink,
  contacts,
  prizes,
  time,
  location,
  limitWord
}: EventCardProps) => {
  const [showMore, setShowMore] = useState(false)

  const paragraph = () => {
    const words = description.split(' ')
    const setWordsLimit = limitWord === 'default' ? 21 : limitWord
    const wordsCount = showMore ? words.length : setWordsLimit
    return words.slice(0, wordsCount).join(' ')
  }

  return (
    <div
      className={'w-full sm:w-72 2xl:w-80 rounded shadow-xl overflow-hidden'}>
      <div
        className={`bg-center bg-cover w-full h-32 overflow-auto bg-[url(${imgSrc})]`}></div>

      <SpotLightItem>
        <div className="px-4 py-5 flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <h3 className={'text-xl 2xl:text-2xl font-semibold'}>{heading}</h3>

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
                      {prizes.winner && <p>Winner - {prizes.winner}</p>}
                      {prizes.runner_up && <p>RunnerUp - {prizes.runner_up}</p>}
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

                  {location && (
                    <div>
                      <p>
                        <b>Location: </b>
                      </p>
                      <p> {location}</p>
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
                    'bg-blue-700 rounded-sm px-3 2xl:px-4 py-0.5 2xl:py-1 2xl:text-lg hover:bg-blue-900'
                  }>
                  Register
                </button>
              </a>
            )}
            {rulesLink && (
              <a href={rulesLink} target={'_blank'} rel="noreferrer">
                <button
                  className={
                    'border border-blue-700 text-blue-700 bg-sky-100 rounded-sm px-3 2xl:px-4 py-0.5 2xl:py-1 2xl:text-lg hover:bg-blue-200 hover:text-blue-700'
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

export const EventCardV2 = ({
  description,
  heading,
  imgSrc,
  registrationLink,
  rulesLink,
  contacts,
  prizes,
  time,
  location,
  entry_fee
}: EventCardProps) => {
  return (
    <SpotLightItem
      className={
        'card-container h-[23rem] w-80 rounded shadow-xl overflow-hidden'
      }>
      <div className="card-flip text-content-medium">
        <div className="card-front flex flex-col">
          <div
            className={`bg-center bg-cover w-full h-32 overflow-auto bg-[url(${imgSrc})]`}></div>
          <div className="flex-1 flex flex-col p-3 gap-2 justify-between">
            <div className="flex flex-col gap-2">
              <h3 className={'text-2xl font-semibold'}>{heading}</h3>

              <div className="text-content-medium flex flex-col gap-2">
                <p>{description}</p>
              </div>
            </div>
            <p className={'font-sm text-center text-gray-500'}>
              Tap in Register
            </p>
          </div>
        </div>
        <div className="card-back p-3 flex flex-col justify-evenly">
          <div className={'flex flex-col'}>
            {entry_fee && (
              <>
                <p>
                  <b>Entry Fee:</b> {entry_fee}
                </p>
              </>
            )}
            {prizes &&
              (prizes.winner || prizes.runner_up || prizes.runner_up_2nd) && (
                <>
                  <p>
                    <b>Prizes:</b>
                  </p>
                  {prizes.winner && <p>Winner - {prizes.winner}</p>}
                  {prizes.runner_up_2nd ? (
                    <>
                      {prizes.runner_up && (
                        <p>1st RunnerUp - {prizes.runner_up}</p>
                      )}
                      {prizes.runner_up_2nd && (
                        <p>2nd RunnerUp - {prizes.runner_up_2nd}</p>
                      )}
                    </>
                  ) : (
                    <>
                      {prizes.runner_up && <p>RunnerUp - {prizes.runner_up}</p>}
                    </>
                  )}
                </>
              )}
            {time && (
              <>
                <p>
                  <b>Time: </b>
                </p>
                <p className={''}> {time}</p>
              </>
            )}

            {location && (
              <>
                <p>
                  <b>Location: </b>
                </p>
                <p> {location}</p>
              </>
            )}

            {contacts.length > 0 && (
              <>
                <p>
                  <b>Contact:</b>
                </p>
                <p>
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
              </>
            )}
          </div>
          <div className={'flex flex-row gap-2'}>
            {registrationLink && (
              <a href={registrationLink}>
                <button
                  className={
                    'h-full bg-blue-700 rounded-sm px-3 2xl:px-4 py-0.5 2xl:py-1 2xl:text-lg hover:bg-blue-900'
                  }>
                  Register
                </button>
              </a>
            )}
            {rulesLink && (
              <a href={rulesLink} target={'_blank'} rel="noreferrer">
                <button
                  className={
                    'border border-blue-700 text-blue-700 bg-sky-100 rounded-sm px-3 2xl:px-4 py-0.5 2xl:py-1 2xl:text-lg hover:bg-blue-200 hover:text-blue-700'
                  }>
                  Rules
                </button>
              </a>
            )}
          </div>
        </div>
      </div>
    </SpotLightItem>
  )
}
