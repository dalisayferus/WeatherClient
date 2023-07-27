import { useState } from "react";
import "../App.css";
import "../index.css";

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

  function handleMoodShift() {
    const moodIndex = moods.indexOf(selectedMood);

    if (moodIndex < moods.length - 1) {
      setSelectedMood(moods[moodIndex + 1]);
    } else if (moodIndex === moods.length - 1) {
      setSelectedMood(moods[0]);
    }
  }

  return (
    <>
      <div className={`card ${selectedMood.background}`}>
        <p>danger level: {selectedMood.danger}</p>
        <p>background img: {selectedMood.background}</p>
      </div>
      <button onClick={handleMoodShift}>Shift Mood</button>
    </>
  );
}

export default Homepage;
