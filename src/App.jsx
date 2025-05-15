import { useState } from "react";
import "./App.css";
import StarRating from "./components/StarRating";

function App() {
  const [currentRating, setCurrentRating] = useState(3);
  const handleRatingChange = (newRating) => {
    setCurrentRating(newRating);
  };
  return (
    <>
      <h2>Star Rating</h2>
      <StarRating
        handleChange={handleRatingChange}
        rating={currentRating}
        size={5}
      />
      <p>Current Rating: {currentRating}</p>
    </>
  );
}

export default App;
