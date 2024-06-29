import React from 'react'
import Wrapper from './Wrapper'
import Toggle from './Toggle'
import Recommended from './Recommended'

const Sidebar = () => {
  //TODO get recommended users


  return (
    <Wrapper>
      <Toggle/>
      <div className='space-y-4 pt-4 lg:pt-0'>
          <Recommended/>
      </div>

    </Wrapper>
  )
}

export default Sidebar