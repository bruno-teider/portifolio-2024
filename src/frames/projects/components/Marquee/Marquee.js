import React from "react";
import "./Marquee.css";

const Marquee = ({ content }) => {
  const arr = [1, 2, 3];

  return (
    <div className="marquee">
      <p className="m-0 p-0 p-3">
        {arr.map((index) => (
          <span aria-hidden="true">⁕ㅤ{content}ㅤ</span>
        ))}
      </p>
    </div>
  );
};

export default Marquee;
