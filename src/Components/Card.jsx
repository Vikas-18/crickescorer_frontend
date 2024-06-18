import React from "react";
import "./CSS/card.css";

const Card = ({ player }) => {
  const renderStat = (label, value) => {
    return value !== undefined ? (
      <p className="card-text">
        <strong>{label}:</strong> {value}
      </p>
    ) : null;
  };

  return (
    <div className="card">
      <img
        src={`data:image/jpeg;base64,${player.image}`}
        alt="profile_pic"
        className="card-img-top"
      />
      <div className="card-body">
        <h5 className="card-title">{player.name}</h5>
        {renderStat("Age", calculateAge(player.dob))}
        {renderStat("Matches", player.matches)}
        {renderStat("Runs", player.runs)}
        {renderStat("Wickets", player.wickets)}
        {renderStat("Centuries", player.centuries)}
        {renderStat("Half-Centuries", player.halfCenturies)}
        {renderStat("Highest Score", player.highestScore)}
        {renderStat("Best Bowling", player.bestBowling)}
        {renderStat("Sixes", player.sixes)}
        {renderStat("Fours", player.fours)}
        {renderStat("Catches", player.catches)}
      </div>
    </div>
  );
};

// Function to calculate age based on date of birth
const calculateAge = (dob) => {
  const dobDate = new Date(dob);
  const ageDiffMs = Date.now() - dobDate.getTime();
  const ageDate = new Date(ageDiffMs);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
};

export default Card;
