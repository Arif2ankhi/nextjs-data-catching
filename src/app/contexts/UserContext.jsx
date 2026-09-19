"use client"
import  { createContext } from 'react';

export const UserContext = createContext(null);
const Userprovider = ({children}) => {
    return (
        <UserContext.Provider value ="Alhamdulillah for everything">
            {children}
        </UserContext.Provider>
    );
};

export default Userprovider;