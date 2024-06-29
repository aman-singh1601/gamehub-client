import { Button } from '@/components/ui/button';
import {blockPlayer, followPlayer, getPlayerProfile, unblockPlayer, unfollowPlayer } from '@/store/actions';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'

const UserPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { player, isFollowing, isBlocked } = useSelector((state: any) => state.player);

  const onFollow = () => {
    if (id) {
        dispatch(followPlayer(id));
    }
  }
  const onUnfollow = () => {
    if(id){
      dispatch(unfollowPlayer(id));
    } 
  }
  const block = () => {
    if(id) {
      dispatch(blockPlayer(id));
    }
  }
  const unblock = () => {
    if(id) {
      dispatch(unblockPlayer(id));
    }
  }

  useEffect(() => {
    if (id)
      dispatch(getPlayerProfile(id));
  }, [id])
  return (
    <div>
      <p>{player?.name}</p>
      <p>{player?.id}</p>
      {
        isFollowing?
        <Button onClick={onUnfollow}>
          Unfollow
        </Button>:
        <Button onClick={onFollow}>
          Follow
        </Button>
      }
      { 
        isBlocked?
        <Button onClick={unblock}>
          Unblock
        </Button>:
        <Button onClick={block}>
          Block
        </Button>
      }

    </div>
  )
}

export default UserPage