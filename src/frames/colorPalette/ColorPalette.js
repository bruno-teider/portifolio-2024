import React from "react";
import "./ColorPalette.css";

const ColorPalette = ({ getFrameId }) => {
  return (
    <div className="project-frame">
      <h1 className="title"> ⁕ Color Palette Generator</h1>

      <div className="back-container">
        <hr />
        <h1 onClick={() => getFrameId(0)}>Back</h1>
        <hr />
      </div>
    </div>
  );
};

export default ColorPalette;
