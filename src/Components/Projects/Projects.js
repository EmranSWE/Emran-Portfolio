import React, { useEffect, useState } from 'react';
import ProjectCard from './ProjectCard';

const Projects = () => {

const [projects,setProjects]=useState([]);
useEffect(()=>{
    fetch('http://localhost:5000/project')
    .then(res=> res.json())
    .then(project => {
        setProjects(project)
    })
},[])
    return (
        <div>
            <h1 className='text-3xl text-center my-5'>My <span className='textPrimary'>Recent</span>  Projects</h1>
            <p className='text-xl text-center'>Here are few <span className='textPrimary'>projects</span>  I've done recently</p>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 
            sm:grid-cols-1 justify-items-center '>
            {
                projects.map(project=> <ProjectCard key='_id' project={project}></ProjectCard>)
            }
            </div>
           
            
        </div>
    );
};

export default Projects;