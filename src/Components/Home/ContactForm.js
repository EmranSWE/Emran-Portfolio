import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const ContactForm = () => {
    const { register, reset, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = message => {

        const url =`https://emran-portfolio-server-6vj9y.ondigitalocean.app/message`
        fetch(url,{
            method:"POST",
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(message)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                toast.success("Message send successfully");
                reset()
            }
            else{
                toast.error('Some problem may occurred')
            }
        })
        
    }
    return (
        <div>
            <h1 className='text-2xl text-center'>Contact With Me</h1>
            <div className=" ">
                <div className=" shadow-xl ">
                    <form form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form">
                            <div className='flex justify-center'>
                                <div className=" mr-2">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input  {...register("name", {
                                        required: {
                                            value: true,
                                            message: "Name is required"
                                        }
                                    })} type="text" placeholder="Name" className="input input-bordered w-full max-w-xs" />
                                    <label className="label">
                                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                                    </label>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input  {...register("email", {
                                        required: {
                                            value: true,
                                            message: "Email is required"
                                        }
                                    })} type="email" placeholder="Email" className="input input-bordered w-full max-w-xs" />
                                    <label className="label">
                                        {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                    </label>
                                </div>
                            </div>
                            <div className="">
                                <label className="label">
                                    <span className="label-text">Subject</span>
                                </label>
                                <input  {...register("subject", {
                                        required: {
                                            value: true,
                                            message: "Subject is required"
                                        }
                                    })} type="text" placeholder="Subject" className="input input-bordered w-full " />
                                    <label className="label">
                                        {errors.subject?.type === 'required' && <span className="label-text-alt text-red-500">{errors.subject.message}</span>}
                                    </label>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Message</span>
                                </label>
                                <input  {...register("message", {
                                        required: {
                                            value: true,
                                            message: "Message is required"
                                        }
                                    })} type="textarea" placeholder="Message" className="input input-bordered h-32 w-full " />
                                    <label className="label">
                                        {errors.message?.type === 'required' && <span className="label-text-alt text-red-500">{errors.message.message}</span>}
                                    </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary"> Send Message!</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

       
        </div>
    );
};

export default ContactForm;