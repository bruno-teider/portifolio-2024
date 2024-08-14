import React, { useRef } from "react";
import { motion } from "framer-motion";
import "./ProjectsFrame.css";

const projects = [
  {
    name: "Color Palette Generator",
    image:
      "https://private-user-images.githubusercontent.com/107257148/353871097-69b74800-4c5f-4725-9e5d-e18e398f295b.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjM1NTg5NjgsIm5iZiI6MTcyMzU1ODY2OCwicGF0aCI6Ii8xMDcyNTcxNDgvMzUzODcxMDk3LTY5Yjc0ODAwLTRjNWYtNDcyNS05ZTVkLWUxOGUzOThmMjk1Yi5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwODEzJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDgxM1QxNDE3NDhaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT03NmU4OTZjYjM1OTNkYTFiMTliNGZhNTgyZTRmNWNhYzJiOWI5MWI2M2Y3YmE4Zjc4M2FlYzA3YjRjOTFlOWEwJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.5YWwLMSE6h7fLqNz1MBIp-5bAseyZ7O-xKq5u_NhA7o",
  },
  {
    name: "Weather Forecast",
    image:
      "https://private-user-images.githubusercontent.com/107257148/351508378-4eccb055-683a-499b-90e3-1db31e3919f1.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjM1NTg5ODYsIm5iZiI6MTcyMzU1ODY4NiwicGF0aCI6Ii8xMDcyNTcxNDgvMzUxNTA4Mzc4LTRlY2NiMDU1LTY4M2EtNDk5Yi05MGUzLTFkYjMxZTM5MTlmMS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwODEzJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDgxM1QxNDE4MDZaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1iZGM5ZmVmYzNhMDU2MjcxN2NlMWI4Mzc0YzBlMmVkMTgyMmFjZWMwYTA4N2RjYjY1YmQwODdjOTFlMjg2MGEzJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.RrZk7R-UPk6XBw_r6PfqjfCH5eYhBWPWmbmBNaSLEwk",
  },
  {
    name: "Goofy Glory",
    image: "https://i.ibb.co/Wghfrrd/book1.jpg",
  },
  {
    name: "Rabbit Hole",
    image:
      "https://i.ibb.co/bXt7vLL/Sprite-0003.png",
  },
  {
    name: "Nicolabs",
    image:
      "https://private-user-images.githubusercontent.com/107257148/354843546-bcc5aa07-add5-4eeb-bb30-f505f4d074cc.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjM2NTM1MDQsIm5iZiI6MTcyMzY1MzIwNCwicGF0aCI6Ii8xMDcyNTcxNDgvMzU0ODQzNTQ2LWJjYzVhYTA3LWFkZDUtNGVlYi1iYjMwLWY1MDVmNGQwNzRjYy5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwODE0JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDgxNFQxNjMzMjRaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT04Y2UwMTEwNzU0ZDNlZDY1YzZlZjFmNjRlZTFmMTdlMzUzZmFlYzM3MzVlMDVmOTdlMDA0ZjMxZDQ2OThiZjUzJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.HFoESPjV3eeTqz3AoIFjEkNeBnXT5wz4zHZ0o0kOtgk",
  },
  {
    name: "Plantae",
    image:
      "https://i.ibb.co/PY2c9wq/plantae-login.png",
  },
];

function ProjectInfo({ project, index }) {

  return (
    <section>

      <div className="numbers">
        {projects.map((_, projectIndex) => (
          <motion.h2 className={`number-index ${index === projectIndex ? 'active' : ''}`}>{projectIndex + 1}</motion.h2>
        ))}
      </div>

      <div className="name-and-lines">
        <motion.h2>{project.name}</motion.h2>
        {projects.map((_, projectIndex) => projectIndex > 0 && <hr key={projectIndex} />)}
      </div>

      <div className="project-image">
        <img src={project.image} alt={`Project ${index}`} />
      </div>
    </section>
  );
}

const ProjectsFrame = ({ getFrameId }) => {
  return (
    <div className="projects-frame">
      <div className="project-info">
        {projects.map((project, index) => (
          <ProjectInfo key={index} project={project} index={index} />
        ))}
      </div>

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
