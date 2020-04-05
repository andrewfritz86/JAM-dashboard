import React, { useEffect, useState } from "react";
import { Router } from "@reach/router";
import IdentityModal from "react-netlify-identity-widget";
import Layout from "../components/layout";
import Profile from "../components/profile";

import PrivateRoute from "../components/private-route";

import RouteBase from "../components/route-base";
import RouteSecret from "../components/route-secret";
import RouteLogin from "../components/route-login";
import "react-netlify-identity-widget/styles.css";
import { navigate } from "gatsby";

const Dashboard = ({ location }) => {
  // on reloads/mounts , if the path matche dashboard, redirect to login, overwrite browser history
  useEffect(() => {
    if (location.pathname.match(/^\/dashboard\/?$/)) {
      navigate("/dashboard/login", { replace: true });
    }
  }, []);

  const showModal = () => setVisibility(true);

  const [isVisible, setVisibility] = useState(false);
  return (
    <Layout>
      <Profile showModal={showModal} />
      <Router>
        <PrivateRoute path="/dashboard/base" component={RouteBase} />
        <PrivateRoute path="/dashboard/secret" component={RouteSecret} />
        <RouteLogin path="/dashboard/login" showModal={showModal} />
      </Router>
      <IdentityModal
        showDialog={isVisible}
        onCloseDialog={() => {
          setVisibility(false);
        }}
      />
    </Layout>
  );
};

export default Dashboard;
