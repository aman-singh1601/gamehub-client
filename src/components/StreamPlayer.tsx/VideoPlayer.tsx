import React from 'react'
import OfflineVideo from './OfflineVideo';
import LoadingVideo from './LoadingVideo';
import LiveVideo from './LiveVideo';

function VideoPlayer({
    hostName,
    hostIdentity
}: {
    hostName: string,
    hostIdentity: string
}) {

    const connectionState = true;
    const participant = true;
    const tracks = true;

    let content;

    if (!participant && connectionState) {
        content = <OfflineVideo hostName = {hostName}/>
    } else if (!participant || !tracks) {
        content = <LoadingVideo hostName = {hostName}/>
    } else {
        content = <LiveVideo/>
    }

    return (
        <div className='aspect-video border-b group relative'>
            {content}
        </div>
    )
}

export default VideoPlayer