import React from "react";
import PropTypes from "prop-types";
import "./BackButton.css";

const BackButton = ({ getFrameId }) => {
  return (
    <div className="back-container-project">
      <hr />
      <h1 onClick={() => getFrameId(1)}>Back</h1>
      <hr />
    </div>
  );
};

BackButton.propTypes = {
  getFrameId: PropTypes.func.isRequired,
};

export default BackButton;
