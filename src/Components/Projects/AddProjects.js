import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import Loading from '../Shared/Loading';

const AddProjects = () => {
    const { register, reset, formState: { errors }, handleSubmit } = useForm();

    const imageStorageKey = '04a15e088ece55785654a58ff0dfb648';
    const onSubmit = async data => {

        //Upload image to imgbb
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then((response) => response.json())
            .then((result) => {
                if(result.success){
                    const img = result.data.url;
                const projects = {
                    name:data.name,
                    description:data.name,
                    github:data.github,
                    live:data.live,
                    img:img
                }
                //Upload file to databases
                    fetch('http://localhost:5000/project',{
                        method:"POST",
                        headers:{
                            'content-type':'application/json'
                        },
                        body: JSON.stringify(projects)
                    })
                    .then(res=> res.json())
                    .then(data => {
                        if(data.insertedId){
                            <Loading></Loading>
                            toast.success('New Project Added Successfully');
                            reset();
                        }
                    })
                } 
            })
    }
    return (
        <div className='grid grid-cols-1 justify-items-center'>
            <h2 className='text-3xl'>Add A NEW PROJECT</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label className="label">
                    <span className="label-text">Projects Name</span>
                </label>
                <input  {...register("name", {
                    required: {
                        value: true,
                        message: "Name is required"
                    }
                })} type="text" placeholder="Your Name" className="input input-bordered w-full max-w-xs" />
                <label className="label">
                    {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                </label>

                <label className="label">
                    <span className="label-text">Project Description</span>
                </label>
                <input  {...register("description", {
                    required: {
                        value: true,
                        message: "Description is required"
                    },
                    pattern: {
                        message: 'Provide a valid email' // 
                    }
                })} type="textarea"  placeholder="Project Description" className="input input-bordered w-full h-20n max-w-xs" />
                <label className="label">
                    {errors.description?.type === 'required' && <span className="label-text-alt text-red-500">{errors.description.message}</span>}
                    {errors.description?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.description.message}</span>}
                </label>
                <label className="label">
                    <span className="label-text">Project Github Link</span>
                </label>
                <input  {...register("github", {
                    required: {
                        value: true,
                        message: "Github link is required"
                    }
                })} type="text" placeholder="Project Description" className="input input-bordered w-full max-w-xs" />
                <label className="label">
                    {errors.github?.type === 'required' && <span className="label-text-alt text-red-500">{errors.github.message}</span>}
                </label>

                <label className="label">
                    <span className="label-text">Project Live Demo Link</span>
                </label>
                <input  {...register("live", {
                    required: {
                        value: true,
                        message: "Live link is required"
                    }
                })} type="text" placeholder="Project Description" className="input input-bordered w-full max-w-xs" />
                <label className="label">
                    {errors.live?.type === 'required' && <span className="label-text-alt text-red-500">{errors.live.message}</span>}
                </label>

                <label className="label">
                    <span className="label-text">Photo</span>
                </label>
                <input  {...register("image", {
                    required: {
                        value: true,
                        message: "Image is required"
                    }
                })} type="file" placeholder="Your Name" className="input input-bordered w-full max-w-xs" />
                <label className="label">
                    {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}

                </label>
                <input className='btn w-full max-w-xs ' type="submit" value="Add" />
            </form>
        </div>
    );
};

export default AddProjects;