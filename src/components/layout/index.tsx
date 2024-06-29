import React from 'react';
import Navbar from './Navbar/Navbar';
import Sidebar from './Sidebar/Sidebar';
import Container from './Container';



const Layout = ({children} : {
    children: React.ReactNode
}) => {
    return (
        <div>
            <Navbar/>
            <div className='flex h-full pt-20'>
                <Sidebar/>
                <Container>
                    {children}
                </Container>
            </div>
        </div>
    )
}

export default Layout