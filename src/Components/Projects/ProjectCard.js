import React from 'react';
import { AiFillGithub } from 'react-icons/ai';

const ProjectCard = ({ project }) => {
  const { img, name, description, github, live } = project;
  return (
    <div className="card w-96 bg-base-100 my-4 shadow-lg shadow-indigo-500   ">
      <figure className="px-10 pt-10">
        <img src={img} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
        <div className="card-actions">
          <a href={github} target='_blank'><button className="btn btn-primary bg-purple-400"><AiFillGithub />Github</button></a> 
          <a href={live} target='_blank'><button className="btn btn-primary bg-purple-400">Live </button></a> 
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;