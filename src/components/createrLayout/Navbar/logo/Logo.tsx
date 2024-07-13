import React from 'react'
import logo from "@/assets/spooky.svg";
const Logo = () => {
  return (
    <React.Fragment>
        <div className='bg-white p-1 rounded-full mr-2'>
          <img
              className='h-8 w-8 object-contain'
              src = {logo}
          />
        </div>
    </React.Fragment>
  )
}

export default Logo