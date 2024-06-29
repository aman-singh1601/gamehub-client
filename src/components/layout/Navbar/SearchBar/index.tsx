import React, { useState } from 'react';
// import "./sytle.css"

import { SearchIcon, X } from "lucide-react";
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const SearchBar = () => {
    const [value, setValue] = useState("");


    const submit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(value);
    }
    const onClear = () => setValue("");
    return (
        <React.Fragment>
            <form
                onSubmit={submit}
                className='relative w-full lg:w-[400px] flex items-center'
            >
                <Input
                    value = {value}
                    onChange={(e) => setValue(e.target.value)}
                    placeholder="Search"
                    className='bg-background border-none text-white rounded-r-none 
                    focus-visible:ring-0 
                    focus-visible:ring-transparent 
                    focus-visible:ring-offset-0'
                    id='input'
                />
                {value && (
                    <X
                        className='absolute top-2.5 right-14 h-5 w-5
                        text-muted-foreground cursor-pointer hover:opacity-75 transition'
                        onClick={onClear}
                    />
                )}
                <Button
                    type='submit'
                    size="sm"
                    variant="secondary"
                    className="rounded-l-none"
                >
                    <SearchIcon className='h-5 w-5 text-muted-foreground' />
                </Button>
            </form>
        </React.Fragment>
    )
};

export default SearchBar;