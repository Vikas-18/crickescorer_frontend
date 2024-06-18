import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar";
import HomePage from "./Components/HomePage";
import Stats from "./Components/Stats";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import Footer from "./Components/Footer";
import Profile from "./Components/Profile";
import UpdateStats from "./Components/UpdateStats";
const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/stats" element={<Stats />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/updatestats" element={<UpdateStats />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
