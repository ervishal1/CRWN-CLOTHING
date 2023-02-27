import {createContext, useState, useEffect} from 'react';
import { onAuthStateChangeListener,createUserDocFromAuth } from '../utils/firebase.utils';

export const UserContext = createContext({
    currentUser : null,
    setCurrentUser : () => null
});

export const UserProvider = (props) => {
    const [currentUser, setCurrentUser] =  useState(null)
    const value = {currentUser, setCurrentUser}

    useEffect(() =>{
        const unsubscribe =  onAuthStateChangeListener((user) => {
            if(user){
                createUserDocFromAuth(user);
            }
            setCurrentUser(user);
        })

        return unsubscribe
    },[])

    return (
        <UserContext.Provider value={value}>
            {props.children}
        </UserContext.Provider>
    )
}