import Hint from '@/components/Hint';
import { Button } from '@/components/ui/button';
import { useSidebar } from '@/store/sidebar/use-sidebar'
import { ArrowLeftFromLine, ArrowRightFromLine } from 'lucide-react';
import React from 'react'

const Toggle = () => {
    const { collapsed, onExpand, onCollapse } = useSidebar((state) => state);

    const label = collapsed ? "Expand" : "Collapsed";
    return (
        <React.Fragment> 
            {collapsed && (
                <div className='hidden lg:flex w-full items-center justify-center p-3'>
                    <Hint label = {label} side='right' asChild>
                        <Button
                            onClick={onExpand}
                            className="h-auto p-2"
                            variant="ghost"
                        >
                            <ArrowRightFromLine />
                        </Button>
                    </Hint>
                </div>
            )}
            {!collapsed && (
                <div className="p-3 pl-6 mb-2 flex items-center w-full">
                    <p className='font-semibold text-primary'>
                        For you
                    </p>
                    <Hint label = {label} side='right' asChild>
                        <Button
                            onClick={onCollapse}
                            className='h-auto p-2 ml-auto'
                            variant="ghost"
                        >
                            <ArrowLeftFromLine />
                        </Button>
                    </Hint>
                </div>
            )}
        </React.Fragment>
    )
}

export default Toggle