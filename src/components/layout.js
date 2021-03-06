import React from "react";
import { Link } from "gatsby";
import { IdentityContextProvider } from "react-netlify-identity-widget";
import "./layout.css";

const Layout = ({ children }) => (
  <IdentityContextProvider url="https://andy-jamstack-intro.netlify.com">
    <header>
      <Link to="/"> Our app </Link>
    </header>
    <main>{children}</main>
  </IdentityContextProvider>
);

export default Layout;
