import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";
const ContactForm = () => {
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data, e) => {
    e.preventDefault();
    emailjs
      .send("service_xru657t", "template_ywas3vf", data, "lpu8WDBiQt5ejg0SV")
      .then(
        (result) => {
          toast.success("Message sent successfully!");
          reset();
        },
        (error) => {
          console.log(error.text);
          toast.error("Failed to send the message. Please try again.");
        }
      );
  };
  return (
    <div>
      <h1 className="text-2xl text-center">Contact With Me</h1>
      <div className=" ">
        <div className=" shadow-xl ">
          <form form onSubmit={handleSubmit(onSubmit)}>
            <div className="form">
              <div>
                <div className=" mr-2">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    {...register("to_name", {
                      required: {
                        value: true,
                        message: "Name is required",
                      },
                    })}
                    type="text"
                    placeholder="Name"
                    className="input input-bordered w-full max-w-xs"
                  />
                  <label className="label">
                    {errors.name?.type === "required" && (
                      <span className="label-text-alt text-red-500">
                        {errors.name.message}
                      </span>
                    )}
                  </label>
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    {...register("from_email", {
                      required: {
                        value: true,
                        message: "Email is required",
                      },
                    })}
                    type="email"
                    placeholder="Email"
                    className="input input-bordered w-full max-w-xs"
                  />
                  <label className="label">
                    {errors.email?.type === "required" && (
                      <span className="label-text-alt text-red-500">
                        {errors.email.message}
                      </span>
                    )}
                  </label>
                </div>
              </div>
              <div className="">
                <label className="label">
                  <span className="label-text">Subject</span>
                </label>
                <input
                  {...register("from_name", {
                    required: {
                      value: true,
                      message: "Subject is required",
                    },
                  })}
                  type="text"
                  placeholder="Subject"
                  className="input input-bordered w-full "
                />
                <label className="label">
                  {errors.subject?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.subject.message}
                    </span>
                  )}
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Message</span>
                </label>
                <textarea
                  {...register("message", {
                    required: {
                      value: true,
                      message: "Message is required",
                    },
                  })}
                  type="textarea"
                  placeholder="Message"
                  className="input input-bordered h-32 w-full "
                />
                <label className="label">
                  {errors.message?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.message.message}
                    </span>
                  )}
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
