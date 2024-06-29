import React, { useState } from 'react';

// import {Navigate} from 'react-router-dom';

const AuthMiddleware = ({
    children
}: {
    children: React.ReactNode
}) => {

    if(!localStorage.getItem('user')) {
       
    }
    return (
        <React.Fragment>
            {children}
        </React.Fragment>
    )
}

export default AuthMiddleware;