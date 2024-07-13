import React, { useEffect, useState } from 'react'
import Wrapper from './Wrapper'

import Navigation from './Navigation/Navigation';

function index() {

    return (
        <Wrapper>
            <div className='space-y-4 pt-4 lg:pt-0'>
                <Navigation />
            </div>
        </Wrapper>
    )
}

export default index