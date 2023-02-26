import React from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { Link } from 'react-router-dom';
const SingleProject = ({ project }) => {
    const { img, name, description, github, live,_id } = project;
    return (
        <div className="card w-96 bg-base-100 my-4 shadow-lg shadow-indigo-500   ">
      <figure className="px-10 pt-10">
        <img src={img} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center ">
        <h2 className="card-title">{name}</h2>
        <p className='break-all'>{description.slice(0,200)+` ...`} <Link className='btn-secondary rounded-md' to={_id}>  Details </Link>
       
        </p>
        <div className="card-actions">
          <a rel="noreferrer" href={github} target='_blank'><button className="btn btn-accent bg-purple-400"><AiFillGithub />Github</button></a> 
          <a rel="noreferrer" href={live} target='_blank'><button className="btn btn-primary bg-purple-400">Live </button></a> 
        </div>
      </div>
    </div>
    );
};

export default SingleProject;