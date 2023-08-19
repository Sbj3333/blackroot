import React from 'react'
import video from './assets/video1.mp4'

const Background = () => {
  return (
    <div>
      <video className='h-full w-full object-cover m-0 p-0 fixed z-0' src={video} loop autoPlay muted />
    </div>
  )
}

export default Background
