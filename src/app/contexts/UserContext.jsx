"use client"
import React, { createContext } from 'react';

export const UserContext = createContext(null);
const Userprovider = ({children}) => {
    return (
        <UserContext.Provider value ="tomato">
            {children}
        </UserContext.Provider>
    );
};

export default Userprovider;