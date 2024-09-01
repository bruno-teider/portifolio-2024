import React from "react";
import "./TopText.css";

const TopText = ({ date, link }) => {
  return (
    <div className="top-text">
      <h1 className="date-text">{date}</h1>
      <a className="github-text" href={link} rel="noreferrer" target="_blank">
        Github Rep
      </a>
    </div>
  );
};

export default TopText;
