import { WifiOff } from 'lucide-react'
import React from 'react'

const OfflineVideo = ({
    hostName
}: {
    hostName: string
}) => {
    //todo username will replace user in the below para
    return (
        <div className='h-full flex flex-col space-y-4 justify-center items-center'>
            <WifiOff className='h-10 w-10 text-muted-foreground' />
            <p className='text-muted-foreground'>
                {hostName} is Offline
            </p>
        </div>
    )
}

export default OfflineVideo