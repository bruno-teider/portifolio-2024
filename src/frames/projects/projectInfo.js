import { useEffect } from "react";
import { motion } from "framer-motion";

export function ProjectInfo({ project, projects, index, getFrameId }) {
  // Make the elements change when hovered
  useEffect(() => {
    const elements = document.querySelectorAll(
      ".numbers h2, .name-and-lines h2, .project-image img"
    );

    const stars = document.querySelectorAll(".first-star, .second-star");

    const addHoverClass = () => {
      elements.forEach((item) => item.classList.add("hovered"));
      stars.forEach((item) => item.classList.add("hovered"));
    };

    const removeHoverClass = () => {
      elements.forEach((item) => item.classList.remove("hovered"));
      stars.forEach((item) => item.classList.remove("hovered"));
    };

    elements.forEach((element) => {
      element.addEventListener("mouseenter", addHoverClass);
      element.addEventListener("mouseleave", removeHoverClass);
    });

    return () => {
      elements.forEach((element) => {
        element.removeEventListener("mouseenter", addHoverClass);
        element.removeEventListener("mouseleave", removeHoverClass);
      });
    };
  }, []);

  return (
    <section
      id={`project-section-${index}`}
      onClick={() => getFrameId(index + 3)}
    >
      <img className="first-star" src="../../assets/star.png" alt="star" />
      <img
        className="second-star"
        src="../../assets/second-star.png"
        alt="second-star"
      />

      <div className="numbers">
        {projects.map((_, projectIndex) => (
          <div
            className="number-container"
            style={{ height: `calc(100% / ${projects.length})` }}
          >
            <motion.h2
              className={`number-index ${
                index === projectIndex ? "active" : ""
              }`}
            >
              {projectIndex + 1}
            </motion.h2>
          </div>
        ))}
      </div>

      <div className="name-and-lines">
        {projects.map((_, projectIndex) => (
          <div
            className="name-container"
            style={{ height: `calc(100% / ${projects.length})` }}
          >
            <hr
              key={projectIndex}
              className={`hr-index ${index === projectIndex ? "active" : ""}`}
            />
            <motion.h2
              className={`name-index ${index === projectIndex ? "active" : ""}`}
            >
              {project.name}
            </motion.h2>
          </div>
        ))}
      </div>

      <div className="project-image">
        <img src={project.image} alt={`Project ${index}`} />
      </div>
    </section>
  );
}
