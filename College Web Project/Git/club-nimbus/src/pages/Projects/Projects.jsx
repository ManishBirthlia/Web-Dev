import React from "react";
import "./Projects.scss";
import { projects } from "../../data/projects";
import { ProjectCard } from "../../components";

export default function Projects() {
  return (
    <div className="projects flex- flex-col p-3 max-w-7xl m-auto">
      <h1 className="text-3xl mt-3 mb-6 text-gray-500">Our Projects</h1>

      <div className="flex flex-wrap gap-6">
        {projects.map((project) => (
          <ProjectCard project={project} />
        ))}
      </div>
    </div>
  );
}
