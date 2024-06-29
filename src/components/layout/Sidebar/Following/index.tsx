import { getFollowingUsers } from '@/store/actions';
import { useSidebar } from '@/store/sidebar/use-sidebar';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import UserItem from '../UserItem';

function Following() {
    const dispatch = useDispatch();

    const { followingUsers } = useSelector((state: any) => state.auth);
    const { collapsed } = useSidebar(state => state);



    useEffect(() => {
        if(localStorage.getItem("authUser")) dispatch(getFollowingUsers());
    }, [])

    if(!followingUsers) return null;
    return (
        <div>
            {!collapsed && (
                <div className='pl-6 mb-4'>
                    <p className='text-sm text-muted-foreground'>
                        Following
                    </p>
                </div>
            )}
            <ul className='space-y-2 px-2'>
                {
                    followingUsers.map((user: any, idx: any) => (
                        <UserItem user={user} key={idx}/>
                    ))
                }
            </ul>
        </div>
    )
}

export default Following