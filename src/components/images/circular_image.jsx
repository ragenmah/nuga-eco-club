import React from "react";
import "./CircularImage.css"; // Import CSS file for styling

const CircularImage = ({ imageUrl, text }) => {
  return (
    <div className="circular-image-container">
      <div className="circular-image">
        <img src={imageUrl} alt="Circular" />
      </div>
      <div className="image-text">{text}</div>
    </div>
  );
};

export default CircularImage;
