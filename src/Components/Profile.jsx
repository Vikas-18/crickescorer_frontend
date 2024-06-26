import React from "react";
import { useLocation } from "react-router-dom";
import Card from "./Card";
import "./CSS/profile.css";

const Profile = () => {
  const location = useLocation();
  const { user } = location.state;

  return (
    <div className="profile-container">
      <h1 className="h1">My Profile</h1>
      <Card player={user} />
    </div>
  );
};

export default Profile;
