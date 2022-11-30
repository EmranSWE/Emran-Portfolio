import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import { AiFillGithub } from 'react-icons/ai';
const SingleProject = () => {
  const { id } = useParams();

  const { isLoading, error, data: projectDetails } = useQuery({
    queryKey: 'ProjectDetails',
    queryFn: () =>
      fetch(`http://localhost:5000/project/${id}`).then(res =>
        res.json()
      )
  });
  if (isLoading) {
    return <Loading></Loading>
  }
  const {img,name,description,github,live,technology}=projectDetails;
  return (
    <div>
      
      <div class="hero min-h-screen bg-base-200">
        <div class="hero-content flex-col ">
        <img src={img} class="max-w-sm rounded-lg shadow-2xl"  alt={name}/>
          <div>
            <h1 class="text-5xl font-bold"><h1 className='text-5xl text-center'>{name}</h1></h1>
            <p class="py-6 break-all"><span className='text-3xl font-bold'>Description:</span> <br />{description}</p>
            <p class="py-6 break-all"> <span className='text-3xl font-bold'>Technology Stack:</span> <br />{technology}</p>
            <div className="card-actions">
          <a href={github} rel="noreferrer" target='_blank'><button className="btn btn-accent bg-purple-400"><AiFillGithub />Github</button></a> 
          <a href={live} rel="noreferrer" target='_blank'><button className="btn btn-primary bg-purple-400">Live </button></a> 
        </div> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProject;