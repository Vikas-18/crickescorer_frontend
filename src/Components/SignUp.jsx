import React, { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import "./CSS/sign.css";
import imageCompression from "browser-image-compression";

const SignUp = () => {
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState(""); // State for Base64 image string
  const [isImageValid, setIsImageValid] = useState(false); // State to check if the image is valid

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate password
    if (password.length < 8) {
      toast.error("Password must be at least 8 characters long");
      return;
    }

    // Validate image
    if (!isImageValid) {
      toast.error("Please upload a valid image (size should not exceed 1MB)");
      return;
    }

    // Create data object to send
    const data = { name, dob, email, password, image };

    // Send a POST request to the backend API
    axios
      .post("https://crick-backend.onrender.com/signup", data)
      .then((response) => {
        // Display toast message
        toast.success("User registered successfully");

        // Delay the redirect (adjust as needed)
        setTimeout(() => {
          console.log(response.data);
          // Redirect to /profile route
          navigate("/");
        }, 3000); // 3 seconds delay
      })
      .catch((error) => {
        console.error("Error registering user:", error);
        toast.error("Choose Another Password");
      });
  };

  // Function to handle file input change and convert to Base64
  const handleImageChange = async (e) => {
    const file = e.target.files[0];

    // Options for image compression
    const options = {
      maxSizeMB: 1, // Adjust as needed
      maxWidthOrHeight: 1024, // Adjust as needed
      useWebWorker: true,
    };

    try {
      const compressedFile = await imageCompression(file, options);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result.replace("data:", "").replace(/^.+,/, ""));
        setIsImageValid(true);
      };
      reader.readAsDataURL(compressedFile);
    } catch (error) {
      console.error("Error during image compression", error);
    }
  };

  return (
    <div className="box">
      <h2>Create Your Profile</h2>
      <form className="form" method="post" onSubmit={handleSubmit}>
        <div className="section">
          <h3>Name</h3>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="section">
          <h3>Date of Birth</h3>
          <input
            type="date"
            className="form-control"
            id="dob"
            name="dob"
            required
            value={dob}
            onChange={(e) => setDob(e.target.value)}
          />
        </div>
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
        <div className="section">
          <h3>Upload Profile Picture</h3>
          <input
            type="file"
            id="image"
            name="image"
            required
            accept="image/*"
            onChange={handleImageChange}
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

export default SignUp;
