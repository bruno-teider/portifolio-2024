import React from "react";
import "./ProjectsFrame.css";

const ProjectsFrame = ({ getFrameId }) => {
  return (
    <div className="projects-frame">

        {/* Back Button */}
        <div className="back-container">
            <hr />
            <h1 onClick={() => getFrameId(0)}>Back</h1>
            <hr />
        </div>
        
    </div>
  );
};

export default ProjectsFrame;