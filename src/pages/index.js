import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";

export default () => {
  return (
    <Layout>
      <h1> App</h1>
      <p>Login</p>

      <Link to="/dashboard"> Go to dashboard</Link>
    </Layout>
  );
};
