import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Card from "./Card";
import "./CSS/profile.css";

const Profile = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = location.state;
  const handleUpdate = () => {
    navigate("/updateprofile");
  };
  return (
    <div className="profile-container">
      <h1 className="h1">My Profile</h1>
      <Card player={user} />
      <button onClick={handleUpdate}>Update My Stats</button>
    </div>
  );
};

export default Profile;
