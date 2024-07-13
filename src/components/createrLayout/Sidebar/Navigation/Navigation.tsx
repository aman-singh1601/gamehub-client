import React, { useEffect, useState } from 'react';
import { Fullscreen, KeyRound, MessageSquare } from 'lucide-react';
import { NavItem } from './NavItem';


function Navigation() {
    const [user, setUser] = useState<any | null>(null);

    useEffect(() => {
        if (localStorage.getItem("authUser")) {
            setUser(JSON.parse(localStorage.getItem("authUser") || ""));
        } else setUser(null)
    }, []);

    const routes = [
        {
            label: "Stream",
            href: `/u/${user?.id}`,
            icon: Fullscreen
        },
        {
            label: "Keys",
            href: `/u/${user?.id}/keys`,
            icon: KeyRound
        },
        {
            label: "Chat",
            href: `/u/${user?.id}/chat`,
            icon: MessageSquare
        },
    ]
    return (
        <div className='pt-8'>
            <div className='pl-6 mb-4'>
                <p className='text-sm text-muted-foreground'>
                    Navigate
                </p>
            </div>

            <ul className='space-y-2 px-2 pt-4 lg:pt-0'>
                {
                    routes.map((route, idx) => (
                        <NavItem
                            key={idx}
                            href={route.href}
                            icon={route.icon}
                            label={route.label}
                        />
                    ))
                }
            </ul>
        </div>
    )
}

export default Navigation