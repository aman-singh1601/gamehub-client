import React,{ useEffect } from 'react'
import { cn } from '@/lib/utils';
import { useSidebar } from '@/store/sidebar/use-sidebar'

import { useMediaQuery} from "usehooks-ts";

const Container = ({
    children
}: {
    children: React.ReactNode
}) => {


    return (
        <div className= {cn(
            "flex-1",
            "ml-[70px] lg:ml-60"
        )}>
            {children}
        </div>
    )
}

export default Container;