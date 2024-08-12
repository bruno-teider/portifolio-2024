import React from "react";
import "./MainFrame.css";

const MainFrame = ({ mainToParent }) => {

  return (
      <div className="frame">
      {/* The main paage */}
        <div className="top-container">
          <p className="top-text">Web developer - Programmer - Designer</p>
          <hr />
          <div className="my-name">Bruno Teider</div>
        </div>

        <div className="option-container">
          <div className="first-option" onClick={() => mainToParent(1)} >Projects</div>
          <div className="second-option" onClick={() => mainToParent(2)}>About</div>

          <div className="bottom-options">
            <hr />
            <a
              className="bottom-option-one"
              href="https://www.linkedin.com/in/bruno-teider/"
              target="_blank"
            >
              Linkedin
            </a>
            <hr className="inner-hr" />
            <a
              className="bottom-option-two"
              href="https://github.com/bruno-teider"
              target="_blank"
            >
              Github
            </a>
            <hr />
          </div>
        </div>
      </div>

  );
};

export default MainFrame;
