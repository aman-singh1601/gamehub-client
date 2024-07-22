import React, { useEffect, useState } from 'react';
import { JwtPayload, jwtDecode } from "jwt-decode";
import Navbar from './Navbar/Navbar';
import Sidebar from './Sidebar/Sidebar';
import Container from './Container';



const Layout = ({children} : {
    children: React.ReactNode
}) => {

    const [token, setToken] = useState<string>(localStorage.getItem("access_token") || "");


    useEffect(() => {
        if(token.length > 1) {
            const decoded: JwtPayload = jwtDecode(token);
            if(decoded.exp && decoded?.exp >= Date.now()) {
                localStorage.removeItem("access_token");
                localStorage.removeItem("authUser");
            }
        }
    }, []);

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