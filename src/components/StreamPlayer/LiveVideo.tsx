import React, { useRef } from 'react'

const LiveVideo = () => {
  const wrapperRef = useRef(null);
  const videoRef = useRef(null);
  return (
    <div
      ref = {wrapperRef}
      className='relative h-full flex'
    >
      <video
        ref = {videoRef}
        width="100%"
      />

    </div>
  )
}

export default LiveVideo