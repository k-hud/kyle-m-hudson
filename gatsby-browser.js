import React from "react";
import { navigate } from "gatsby";
import { AuthProvider } from "react-use-auth";
import "./src/stylesheets/tailwind.css";

const { registerLinkResolver } = require('gatsby-source-prismic-graphql');
const { linkResolver } = require('./src/utils/linkResolver');

export const wrapRootElement = ({ element }) => (
    <AuthProvider
        navigate={navigate}
        auth0_domain="kyle-m-hudson.us.auth0.com"
        auth0_client_id="uucsG4uJU1adhuBsYN10gmgf4AFt26U2"
    >
        {element}
    </AuthProvider>
);
 
registerLinkResolver(linkResolver);

