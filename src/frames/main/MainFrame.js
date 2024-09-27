import React from "react";
import "./MainFrame.css";

const MainFrame = ({ getFrameId }) => {
  return (
    <div className="frame">
      {/* The main paage */}
      <div className="top-container">
        <p className="top-text">Front End Developer - Fotógrafo</p>
        <hr />
        <div className="my-name">Bruno Teider</div>
      </div>

      <div className="option-container">
        <div className="first-option" onClick={() => getFrameId(1)}>
          Projetos
        </div>
        <div className="second-option" onClick={() => getFrameId(2)}>
          Sobre
        </div>

        <div className="bottom-options">
          <hr />
          <a
            rel="noreferrer"
            className="bottom-option-one"
            href="https://www.linkedin.com/in/bruno-teider/"
            target="_blank"
          >
            Linkedin
          </a>
          <hr className="inner-hr" />
          <a
            rel="noreferrer"
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
