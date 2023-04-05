import React from 'react'

const Loading = () => {
  return (
    <div className="loading-wrapper flex items-center justify-center bg-gray-900 z-50">
      <div className="relative">
        <div className="absolute text-center text-base sm:text-xl text-gray-400 top-1/2 w-full -translate-y-1/2">
          LOADING
        </div>
        <div className="loading-content w-32 h-32 sm:w-36 sm:h-36"></div>
      </div>
    </div>
  )
}

export default Loading
