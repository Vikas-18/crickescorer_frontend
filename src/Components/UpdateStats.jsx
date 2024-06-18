import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "./CSS/updatestats.css";

const UpdateStats = () => {
  const [password, setPassword] = useState("");
  const [matches, setMatches] = useState("");
  const [runs, setRuns] = useState("");
  const [wickets, setWickets] = useState("");
  const [centuries, setCenturies] = useState("");
  const [halfCenturies, setHalfCenturies] = useState("");
  const [highestScore, setHighestScore] = useState("");
  const [bestBowling, setBestBowling] = useState("");
  const [sixes, setSixes] = useState("");
  const [fours, setFours] = useState("");
  const [catches, setCatches] = useState("");
  const navigate = useNavigate();
  const handleUpdateStats = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://crick-backend.onrender.com/updateStats",
        {
          password,
          matches: Number(matches),
          runs: Number(runs),
          wickets: Number(wickets),
          centuries: Number(centuries),
          halfCenturies: Number(halfCenturies),
          highestScore: Number(highestScore),
          bestBowling,
          sixes: Number(sixes),
          fours: Number(fours),
          catches: Number(catches),
        }
      );

      toast.success(response.data.message);
      // Delay the redirect (adjust as needed)
      setTimeout(() => {
        console.log(response.data);
        // Redirect to /profile route
        navigate("/");
      }, 3000); // 3 seconds delay
    } catch (error) {
      toast.error(error.response?.data?.msg || "Error updating stats");
    }
  };

  return (
    <div className="update-stats">
      <h2>Update My Stats</h2>
      <form className="form-update" onSubmit={handleUpdateStats}>
        <div>
          <h3>Password:</h3>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <h3>Matches:</h3>
          <input
            type="number"
            value={matches}
            onChange={(e) => setMatches(e.target.value)}
            className="no-spinner"
          />
        </div>
        <div>
          <h3>Runs:</h3>
          <input
            type="number"
            value={runs}
            onChange={(e) => setRuns(e.target.value)}
            className="no-spinner"
          />
        </div>
        <div>
          <h3>Wickets:</h3>
          <input
            type="number"
            value={wickets}
            onChange={(e) => setWickets(e.target.value)}
            className="no-spinner"
          />
        </div>
        <div>
          <h3>Centuries:</h3>
          <input
            type="number"
            value={centuries}
            onChange={(e) => setCenturies(e.target.value)}
            className="no-spinner"
          />
        </div>
        <div>
          <h3>Half Centuries:</h3>
          <input
            type="number"
            value={halfCenturies}
            onChange={(e) => setHalfCenturies(e.target.value)}
            className="no-spinner"
          />
        </div>
        <div>
          <h3>Highest Score:</h3>
          <input
            type="number"
            value={highestScore}
            onChange={(e) => setHighestScore(e.target.value)}
            className="no-spinner"
          />
        </div>
        <div>
          <h3>Best Bowling:</h3>
          <input
            type="text"
            value={bestBowling}
            onChange={(e) => setBestBowling(e.target.value)}
          />
        </div>
        <div>
          <h3>Sixes:</h3>
          <input
            type="number"
            value={sixes}
            onChange={(e) => setSixes(e.target.value)}
            className="no-spinner"
          />
        </div>
        <div>
          <h3>Fours:</h3>
          <input
            type="number"
            value={fours}
            onChange={(e) => setFours(e.target.value)}
            className="no-spinner"
          />
        </div>
        <div>
          <h3>Catches:</h3>
          <input
            type="number"
            value={catches}
            onChange={(e) => setCatches(e.target.value)}
            className="no-spinner"
          />
        </div>
        <button type="submit">Update Stats</button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default UpdateStats;
