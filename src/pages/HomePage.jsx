import { useState, useContext } from "react";
import "../App.css";
import "../index.css";
import { AuthContext } from "../context/auth.context";
import { Navigate } from "react-router-dom";
import axios from "axios";
// database and then here axios API
const moods = [
  {
    background: `clouds`,
    danger: `low`,
    message: `Please ping my emergency contact`,
  },
  {
    background: `rain`,
    danger: `meduim`,
    message: `Come over`,
  },
  {
    background: `thunder`,
    danger: `high`,
    message: `Please call the police`,
  },
  {
    background: `sunny`,
    danger: `safe`,
    message: ``,
  },
];

function Homepage() {
  const [selectedMood, setSelectedMood] = useState(moods[0]);
  const { user, isLoggedIn } = useContext(AuthContext);

  function handleMoodShift() {
    const moodIndex = moods.indexOf(selectedMood);

    if (moodIndex < moods.length - 1) {
      setSelectedMood(moods[moodIndex + 1]);
    } else if (moodIndex === moods.length - 1) {
      setSelectedMood(moods[0]);
    }
  }

  async function handleSubmit() {
    const API_URL = "http://localhost:5005";
    try {
      const alert = {
        createdBy: user._id,
        dangerLevel: selectedMood.danger,
        message: selectedMood.message,
      };
      console.log(`${API_URL}/api/alerts`);
      await axios.post(`${API_URL}/api/alerts`, alert);
    } catch (error) {
      console.log(error);
    }
  }

  if (!isLoggedIn) return <Navigate to="/login" />;

  return (
    <>
      <div className={`card ${selectedMood.background}`}>
        <p>danger level: {selectedMood.danger}</p>
        <p>background img: {selectedMood.background}</p>
      </div>

      <button onClick={handleMoodShift}>Shift Mood</button>
      <button onClick={handleSubmit}>Submit</button>
    </>
  );
}

export default Homepage;
