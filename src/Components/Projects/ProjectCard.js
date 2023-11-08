import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./style.css";
const ProjectCard = ({ project }) => {
  const { img, name, description, github, live, _id } = project;

  return (
    <div className="w-80 bg-base-100 my-4 shadow-lg shadow-indigo-500 overflow-hidden relative project-card">
      <figure className="h-64 w-full overflow-hidden image-container">
        <img
          src={img}
          alt={name}
          className="object-cover w-full h-full img-hover-show"
        />
      </figure>
      <div className="card-body flex flex-col items-center p-4">
        <h2 className="card-title text-lg font-bold mb-3">{name}</h2>
        <p className="break-words text-sm mb-4">
          {description.length > 200
            ? description.slice(0, 200) + "..."
            : description}
          <Link to={`/${_id}`}>
            <button style={{ backgroundColor: "green" }}>Details</button>
          </Link>
        </p>
        <div className="card-actions mt-4 space-x-2">
          <a
            rel="noreferrer"
            href={github}
            target="_blank"
            className="btn btn-accent bg-purple-400"
          >
            <AiFillGithub />
            Github
          </a>
          <a
            rel="noreferrer"
            href={live}
            target="_blank"
            className="btn btn-primary bg-purple-400"
          >
            Live
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
