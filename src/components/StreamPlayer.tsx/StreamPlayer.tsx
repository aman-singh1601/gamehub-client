import React from 'react'
import VideoPlayer from './VideoPlayer'

function StreamPlayer() {
  return (
    <>
        <div
            className='grid grid-cols-1 lg:gap-y-0 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-6 h-full'
        >
            <div 
             className='space-y-4 col-span-1 lg:col-span-2 xl:col-span-2 2xl:col-span-5 lg:overflow-y-auto hidden-scrollbar pb-10'
            >
                <VideoPlayer
                   hostName='raju'
                   hostIdentity='rajukiid'
                />
            </div>
        </div>
    </>
  )
}

export default StreamPlayer