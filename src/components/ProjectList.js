import React from "react";
import ProjectItem from "./ProjectItem";


function ProjectList({ projects }) {
  const renderProjects = projects.map((project) => (
      <ProjectItem key={project.id} {...project} />
  ))
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{renderProjects}</div>
    </div>
  );
}

export default ProjectList;
