import { Button } from '@/components/ui/button'
import React from 'react'
import UrlCard from './Components/UrlCard'
import { useDispatch, useSelector } from 'react-redux'
import { generateStream } from '@/store/actions';

function KeysPage() {
  const dispatch = useDispatch();

  const {streamKey, streamUrl} = useSelector((state: any) => state.stream);

  const handleGenerateStream = () => {
    dispatch(generateStream());
  }

  return (
    <div className='p-6'>
      <div className="flex items-center justify-between mb-4">
        <h1 className='text-2xl font-bold'>
          Keys & URLs
        </h1>
        <Button
          className='p-2 text-sm lg:text-md lg:p-4 text-primary bg-blue-600 hover:bg-blue-600/80 ml-2'
          onClick={handleGenerateStream}
        >
          Generate
        </Button>
      </div>
      <div className = "space-y-4">
        <UrlCard  label='Stream URL' value={streamUrl.length === 0? "Generate your stream key": streamUrl}/>
        <UrlCard  label='Stream Key' value={streamKey.length === 0? "Generate your stream Url": streamKey}/>
      </div>
    </div>
  )
}

export default KeysPage