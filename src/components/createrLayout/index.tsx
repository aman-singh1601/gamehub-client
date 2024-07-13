import React from 'react'
import CreaterNavbar from './Navbar/Navbar'
import Sidebar from "./Sidebar"
import Container from './Container'

const CreaterLayout = ({
    children
}: {
    children: React.ReactNode
}) => {
    return (
        <>
            <CreaterNavbar />
            <div className='flex h-full pt-20'>
                <Sidebar />
                <Container>
                    {children}
                </Container>
            </div>

        </>
    )
}

export default CreaterLayout