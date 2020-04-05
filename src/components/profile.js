import React from "react";
import { Link } from "gatsby";
import "./layout.css";

const Profile = () => {
  return (
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
        <span> Login coming</span>
      </nav>
    </div>
  );
};

export default Profile;
