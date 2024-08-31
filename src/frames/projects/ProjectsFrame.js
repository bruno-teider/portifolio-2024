import { useEffect } from "react";
import { updateCSSVariables } from "./updateCSSVariables";
import "./ProjectsFrame.css";
import { ProjectInfo } from "./projectInfo";

const projects = [
  {
    name: "Color Palette Generator",
    image: "../../assets/color-palette.png",
  },
  {
    name: "Weather Forecast",
    image: "../../assets/weather-forecast-1.png",
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
    image: "../../assets/nicolabs-1.png",
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
