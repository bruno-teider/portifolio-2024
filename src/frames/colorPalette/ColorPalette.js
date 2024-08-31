import React from "react";
import "./ColorPalette.css";

const ColorPalette = ({ getFrameId }) => {
  return (
    <div className="project-frame">
      <div className="marquee">
        <p class="m-0 p-0 p-3">
          <span aria-hidden="true">⁕ㅤColor Palette Generatorㅤ</span>
          <span aria-hidden="true">⁕ㅤColor Palette Generatorㅤ</span>
          <span aria-hidden="true">⁕ㅤColor Palette Generatorㅤ</span>
        </p>
      </div>

      <div className="project-content">
        <div className="text-container">
          <h1 className="date-text">08.2024</h1>
          <h2 className="github-text">Github Rep</h2>
          <div className="text-image-wrapper">
            <h3 className="main-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit
              amet bibendum dui, in vulputate turpis. Curabitur feugiat
              sollicitudin tincidunt. Aliquam vel dictum neque. Etiam pulvinar
              vulputate ante, eu luctus enim luctus nec. Mauris vel ante lorem.
              Ut eu nibh sodales, blandit metus porttitor, suscipit tellus.
              Phasellus elementum ante quis metus aliquam rutrum. Fusce ornare
              neque felis, at sagittis ligula pharetra ut suscipit mattis nunc.
              Nunc mollis justo et nunc pretium viverra.
            </h3>
            <img
              alt="image-container"
              className="image-container"
              src="../../assets/color-palette.gif"
            />
          </div>
        </div>
      </div>

      <div className="back-container-project">
        <hr />
        <h1 onClick={() => getFrameId(0)}>Back</h1>
        <hr />
      </div>
    </div>
  );
};

export default ColorPalette;
