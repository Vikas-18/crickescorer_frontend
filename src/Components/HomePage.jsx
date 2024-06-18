import React from "react";
import "./CSS/home.css";
const HomePage = () => {
  return (
    <div className="home">
      <div className=" intro">
        <h2>Welcome To Cricket Scorer</h2>
        <h2>Website For Marking All Your Gully Cricket Achievements</h2>
      </div>
      <div className="bio">
        <p>
          Cricket Scorer is your ultimate companion for keeping track of all
          your gully cricket games. Whether you're playing in the streets,
          parks, or backyards, our platform helps you log every run, wicket, and
          milestone achieved during your matches.
        </p>
        <p>
          Our easy-to-use interface allows you to create and manage teams,
          schedule matches, and record detailed statistics. Track your batting
          and bowling performances, analyze match outcomes, and share your
          scores with friends and fellow cricketers.
        </p>
        <p>
          Celebrate your cricketing moments by documenting centuries,
          five-wicket hauls, and other personal bests. With Cricket Scorer,
          every game becomes a memorable event that you can revisit and enjoy.
        </p>
        <p>
          Join a community of passionate gully cricketers, compare stats, and
          improve your game with insights derived from your match data. Whether
          you're a beginner or a seasoned player, Cricket Scorer is designed to
          elevate your gully cricket experience.
        </p>
        <p>
          So, grab your bat, gather your friends, and start scoring! Your gully
          cricket legacy awaits.
        </p>
      </div>
    </div>
  );
};

export default HomePage;
