import { useEffect } from "react";
import { updateCSSVariables } from "./updateCSSVariables";
import "./ProjectsFrame.css";
import { ProjectInfo } from "./projectInfo";

const projects = [
  {
    name: "Color Palette Generator",
    image:
      "https://i.ibb.co/T2sSN6n/imagem-2024-08-28-192505529.png",
  },
  {
    name: "Weather Forecast",
    image:
      "https://i.ibb.co/RYLzWtC/imagem-2024-08-28-192624032.png",
  },
  {
    name: "Goofy Glory",
    image: "https://i.ibb.co/Wghfrrd/book1.jpg",
  },
  {
    name: "Rabbit Hole",
    image: "https://i.ibb.co/bXt7vLL/Sprite-0003.png",
  },
  {
    name: "Nicolabs",
    image:
      "https://i.ibb.co/bKZVcZX/imagem-2024-08-28-192711896.png",
  },
  {
    name: "Plantae",
    image: "https://i.ibb.co/PY2c9wq/plantae-login.png",
  },
];

function ProjectsFrame({ getFrameId }) {
  useEffect(() => {
    const sections = document.querySelectorAll("section"); // Get all the sections

    // Detects when a section enters the viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionIndex = [...sections].indexOf(entry.target);
            const projectName = projects[sectionIndex]?.name;
            updateCSSVariables(projectName);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <div className="projects-frame">
      <div className="project-info">
        {projects.map((project, index) => (
          <ProjectInfo
            key={index}
            project={project}
            projects={projects}
            index={index}
            getFrameId={getFrameId}
          />
        ))}
      </div>

      <div className="back-container">
        <hr />
        <h1 onClick={() => getFrameId(0)}>Back</h1>
        <hr />
      </div>
    </div>
  );
}

export default ProjectsFrame;
