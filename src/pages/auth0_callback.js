// src/pages/auth0_callback
 
import React, { useEffect } from "react";
import { useAuth } from "react-use-auth";
 
const Auth0CallbackPage = () => {
    const { handleAuthentication } = useAuth();
    useEffect(() => {
        handleAuthentication();
    }, []);
 
    return (
        // TODO: Style this loading page.
        <p>Loading...</p>
    );
};
 
export default Auth0CallbackPage;