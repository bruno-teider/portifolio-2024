import React from "react";
import "./Background.css";
import "./MainFrame.css";

const MainFrame = ({ children }) => {
  const bubbles = [1, 2, 3, 4, 5];

  return (
    <div className="gradient-bg">
      {/* The Background bubbles */}
      <div className="gradients-container">
        {bubbles.map((index) => (
          <div class={`g${index} key={index}`} />
        ))}
      </div>

      {/* The main paage */}
      <div className="frame">

        <div className="top-container">
          <p className="top-text">Web developer - Programmer - Designer</p>
          <hr></hr>
          <div className="my-name">Bruno Teider</div>
        </div>

        <div className="option-container">
          <div className="first-option">Projects</div>
          <div className="second-option">About</div>
        </div>

      </div>
    </div>
  );
};

export default MainFrame;
