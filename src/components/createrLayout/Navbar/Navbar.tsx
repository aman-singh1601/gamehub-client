import React from 'react'
import Logo from '@/components/createrLayout/Navbar/logo/Logo';
// import SearchBar from '@/components/layout/Navbar/SearchBar';
import Actions from '@/components/createrLayout/Navbar/Actions';

const CreaterNavbar = () => {
  return (
    <div className='fixed top-0 w-full h-20 z-[49] bg-[#252731] p-2 lg:p-4 flex justify-between items-center shadow-sm'>
      <Logo/>
      {/* <SearchBar/> */}
      <Actions/>
    </div>
  )
}

export default CreaterNavbar