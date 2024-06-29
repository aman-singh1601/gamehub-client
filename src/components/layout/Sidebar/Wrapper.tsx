interface WrapperProps {
    children: React.ReactNode
}

import { cn } from '@/lib/utils';
import { useSidebar } from '@/store/sidebar/use-sidebar'
import React from 'react'

const Wrapper = ({children}: WrapperProps) => {
    const {collapsed} = useSidebar((state) => state);

    return (
        <aside
            className={cn('fixed left-0 w-60 h-full flex flex-col bg-background border-r border-[#2D2E35] z-[40]',
                collapsed && "w-[70px]"
            )}
        >
            {children}
        </aside>
    )
}

export default Wrapper