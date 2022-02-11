import React from "react";
import { Link } from "react-router-dom";
import "./ProjectCard.scss";

export default function ProjectCard({ project }) {
  if (!project) return null;
  return (
    <Link to={`/projects/${project.slug}`}>
      <div className="project-card flex flex-col p-4 border-2 rounded-md border-red-500 border-opacity-10">
        <img src={project.imageSrc} className="h-64 align-center" />
        <div className="title text-xl text-red-600 mb-2">{project.title}</div>
        <div className="description text-gray-200">{project.description}</div>
      </div>
    </Link>
  );
}
