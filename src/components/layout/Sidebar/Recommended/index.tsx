import { useSidebar } from '@/store/sidebar/use-sidebar'
import React, { useEffect } from 'react'
import UserItem from '../UserItem';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsers } from '@/store/actions';

const Recommended = () => {
    const dispatch = useDispatch();

    const { allUsers } = useSelector((state: any) => state.auth);
    const { collapsed } = useSidebar(state => state);


    useEffect(() => {
        if(localStorage.getItem("authUser")) dispatch(getAllUsers());
    }, []);

    const showLabel = !collapsed;
    return (
        <div>
            {showLabel && (
                <div className='pl-6 mb-4'>
                    <p className='text-small text-muted-foreground'>
                        Recommended
                    </p>
                </div>
            )}
            <ul className='space-y-2 px-2'>
                {/* list of users */}
                {allUsers && allUsers.map((user: any) => (
                    <UserItem 
                        user={user} 
                        key={user.phone_number}
                    />
                ))}
            </ul>
        </div>
    )
}

export default Recommended;