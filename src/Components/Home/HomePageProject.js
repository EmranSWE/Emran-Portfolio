import React, { useState ,useEffect} from 'react';
import { Link } from 'react-router-dom';
import SingleProject from './SingleProject';

const HomePageProject = () => {
   
const [projects,setProjects]=useState([]);
useEffect(()=>{
    fetch("/projects.json")
    .then(res =>res.json())
    .then(data => setProjects(data))
},[])
   
    const showingProject = projects.slice(0, 6);

    return (
        <div>
            <h1 className='text-3xl text-center my-5'>My <span className='textPrimary'>Recent</span>  Projects</h1>
            <p className='text-xl text-center'>Here are few <span className='textPrimary'>projects</span>  I've done recently</p>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 
            sm:grid-cols-1 justify-items-center '>
                {
                    showingProject?.map(project => <SingleProject key={project._id} project={project}></SingleProject>)
                }
            </div>
            <p className='text-sm text-center'>Find All My <span className='textPrimary'><Link to='/projects'>Projects</Link></span></p>
        </div>
    );
};

export default HomePageProject;