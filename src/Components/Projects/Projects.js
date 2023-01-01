import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import ProjectCard from './ProjectCard';

const Projects = () => {

    const { data: projects, isLoading } = useQuery('projects', () => fetch('https://emran-portfolio-server-6vj9y.ondigitalocean.app/project').then(res => res.json()))
    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h1 className='text-3xl text-center my-5'>My <span className='textPrimary'>Recent</span>  Projects</h1>
            <p className='text-xl text-center'>Here are few <span className='textPrimary'>projects</span>  I've done recently</p>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 
            sm:grid-cols-1 justify-items-center '>
                {
                    projects?.map(project => <ProjectCard key={project._id} project={project}></ProjectCard>)
                }
            </div>


        </div>
    );
};

export default Projects;