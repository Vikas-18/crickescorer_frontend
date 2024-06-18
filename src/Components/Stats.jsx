import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";
import "./CSS/stats.css";
import { Hourglass } from "react-loader-spinner";

const Stats = () => {
  const [profileData, setProfileData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {}, 2000);
    axios
      .get("https://crick-backend.onrender.com/profile")
      .then((response) => {
        setProfileData(response.data);
        setTimeout(() => {
          setLoading(false);
        }, 3000);
      })
      .catch((error) => {
        console.error("Error fetching profiles:", error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    const handleLoad = () => {
      setLoading(false); // When all resources are loaded, hide the loader
    };

    window.addEventListener("load", handleLoad);

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);
  if (loading) {
    return (
      <div className="loader">
        <Hourglass
          visible={true}
          height="80"
          width="80"
          ariaLabel="hourglass-loading"
          wrapperStyle={{}}
          wrapperClass=""
          colors={["#306cce", "#72a1ed"]}
        />
      </div>
    );
  }

  return (
    <div className="container">
      {profileData.length > 0 ? (
        profileData.map((player) => <Card player={player} />)
      ) : (
        <div>No profiles found.</div>
      )}
    </div>
  );
};

export default Stats;
