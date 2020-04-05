import React from "react";
import { Link } from "gatsby";
import { useIdentityContext } from "react-netlify-identity";
import "./layout.css";

const Profile = ({ showModal }) => {
  const identity = useIdentityContext();
  console.log("identity", identity);
  const isLoggedIn = identity && identity.isLoggedIn;
  const name =
    identity &&
    identity.user &&
    identity.user.user_metadata &&
    identity.user.user_metadata.full_name;
  return (
    isLoggedIn && (
      <div className="dashboard-header">
        <nav>
          <Link to="/dashboard/secret" activeClassName="active">
            {" "}
            Secret sturff{" "}
          </Link>
          <Link to="/dashboard/base" activeClassName="active">
            {" "}
            See your base
          </Link>
          <span>
            {" "}
            Logged in as {name} <button onClick={showModal}> Log out</button>
          </span>
        </nav>
      </div>
    )
  );
};

export default Profile;
