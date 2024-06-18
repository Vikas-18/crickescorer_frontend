import { useRef } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./CSS/navbar.css";

function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      <h3>Cricket Scorer</h3>
      <nav ref={navRef}>
        <Link onClick={showNavbar} to="/">
          Home
        </Link>
        <Link onClick={showNavbar} to="/stats">
          Stats
        </Link>
        <Link onClick={showNavbar} to="/login">
          My Profile
        </Link>
        <Link onClick={showNavbar} to="/updatestats">
          Update Profile Stats
        </Link>
        <Link onClick={showNavbar} to="/signup">
          Sign Up
        </Link>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;
