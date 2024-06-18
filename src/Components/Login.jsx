import React, { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

import "./CSS/login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create data object to send
    const data = { email, password };

    // Send a POST request to the backend API
    axios
      .post("http://localhost:5000/login", data)
      .then((response) => {
        // Navigate to the profile page with user data
        navigate("/profile", { state: { user: response.data.user } });
      })
      .catch((error) => {
        console.error("Incorrect Email/Password", error);
        toast.error("Incorrect Email/Password");
      });
  };

  return (
    <div className="box-2">
      <h1>My Profile</h1>
      <form className="form" method="post" onSubmit={handleSubmit}>
        <div className="section">
          <h3>Email</h3>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            placeholder="Enter Your Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="section">
          <h3>Password</h3>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            placeholder="Enter Your Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit" className="button-82-pushable btn">
          <span className="button-82-shadow"></span>
          <span className="button-82-edge"></span>
          <span className="button-82-front text">Submit</span>
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Login;
