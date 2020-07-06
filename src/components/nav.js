import React from 'react'
import {useAuth} from 'react-use-auth'

const Nav = () => {
    
    const { isAuthenticated, login, logout} = useAuth();
    
    return (
        <nav className="flex justify-end mr-5">
            {!isAuthenticated() && <button onClick={() => login()} className="font-sans text-sm bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded">Login</button>}
            {isAuthenticated() && <button onClick={() => logout ()} className="font-sans text-sm bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded">Logout</button>}
        </nav>
    )
}

export default Nav