import React from "react";
import "./CSS/footer.css";
import { FaHeart } from "react-icons/fa";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="footer">
      <h5>
        Made With <FaHeart className="heart" />
      </h5>
      <h5>{currentYear} © All Rights Reserved</h5>
    </div>
  );
};

export default Footer;
