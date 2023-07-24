import { useState } from "react";

import "./App.css";

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
    danger: `low`,
    message: ``,
  },
];

function App() {
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
        <button onClick={handleMoodShift}>Shift Mood</button>
        <p>danger {selectedMood.danger}</p>
        <p>bg {selectedMood.background}</p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
