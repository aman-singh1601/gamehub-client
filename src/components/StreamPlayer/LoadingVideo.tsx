import { Loader, WifiOff } from 'lucide-react'


const LoadingVideo = ({
    hostName
}: {
    hostName: string
}) => {
    //todo username will replace user in the below para
    return (
        <div className='h-full flex flex-col space-y-4 justify-center items-center'>
            <Loader className='h-10 w-10 text-muted-foreground animate-spin' />
            <p className='text-muted-foreground'>
                loading stream
            </p>
        </div>
    )
}

export default LoadingVideo