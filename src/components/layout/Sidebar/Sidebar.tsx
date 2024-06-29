import React from 'react'
import Wrapper from './Wrapper'
import Toggle from './Toggle'
import Recommended from './Recommended'
import Following from './Following'

const Sidebar = () => {
  //TODO get recommended users


  return (
    <Wrapper>
      <Toggle/>
      <div className='space-y-4 pt-4 lg:pt-0'>
          <Recommended/>
          <Following/>
      </div>

    </Wrapper>
  )
}

export default Sidebar