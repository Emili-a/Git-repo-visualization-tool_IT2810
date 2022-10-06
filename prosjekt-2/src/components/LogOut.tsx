import * as React from 'react';
import { useLocalStorage } from '../useLocalStorage';
import { useEffect } from 'react';

export const LogOut = () => {
    const [token, setToken] = useLocalStorage("token", "");
    const [id, setId] = useLocalStorage("id", "");
    
    function LogOutClick(){
        setToken("")
        setId("")
        window.location.reload();
    }

    return(
        <>
        <button onClick={LogOutClick}>Log Out</button>
        </>
    )
}