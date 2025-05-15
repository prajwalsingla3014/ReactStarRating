import React, { useState } from "react";
import "./style.css";

const StarRating = ({ handleChange, rating, size = 5 }) => {
  const [hoverRating, setHoverRating] = useState();
  const handleStarHover = (starRating) => {
    setHoverRating(starRating);
  };

  return (
    <div className="star-rating">
      {Array(size)
        .fill("")
        .map((_, index) => {
          const starValue = index + 1;
          let starClass = "star";
          if (hoverRating >= starValue) {
            starClass += " hover";
          } else if (rating >= starValue) {
            starClass += " active";
          }
          return (
            <button
              className={starClass}
              key={index}
              onClick={() => handleChange(starValue)}
              onMouseEnter={() => handleStarHover(starValue)}
              onMouseLeave={() => handleStarHover(0)}
            >
              <ion-icon
                key={index}
                name="star"
              ></ion-icon>
            </button>
          );
        })}
    </div>
  );
};

export default StarRating;
