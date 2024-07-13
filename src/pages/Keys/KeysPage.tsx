import { Button } from '@/components/ui/button'
import React from 'react'
import UrlCard from './Components/UrlCard'

function KeysPage() {
  return (
    <div className='p-6'>
      <div className="flex items-center justify-between mb-4">
        <h1 className='text-2xl font-bold'>
          Keys & URLs
        </h1>
        <Button
          className='p-2 text-sm lg:text-md lg:p-4 text-primary bg-blue-600 hover:bg-blue-600/80 ml-2'
        >
          Generate
        </Button>
      </div>
      <div className = "space-y-4">
        <UrlCard  label='Stream URL' value='rtmp/serverdomain/stream'/>
        <UrlCard  label='Stream Key' value='fhdasklfhjdas'/>
      </div>
    </div>
  )
}

export default KeysPage