import React from 'react';
import imranmahmud from "../../Assets/imran.jpg";
import matiur from "../../Assets/matiur.jpg";
import mamun from "../../Assets/mamun.jpg";

const Reference = () => {
    return (
        <div>
            <h1 className='text-5xl text-center my-5'>References</h1>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full ">
                  <div className='lg:mx-28'>
                  <div className="hero  bg-base-200  rounded-lg border-2 border-indigo-200 border-b-indigo-500 ">
                        <div className="hero-content items-center flex-col lg:flex-row">
                            <div>
                                <div className="avatar">
                                    <div className="w-12 rounded">
                                        <img src={imranmahmud} />
                                    </div>
                                </div>
                               
                                <p className='text-3xl'>Dr. Imran Mahmud</p>
                                <h1 className='text-xl'>Head In-Charge</h1>
                                <p>Department of Software Engineering,DIU</p>
                                <p>imranmahmud@daffodilvarsity.edu.bd</p>
                            </div>
                            <div>
                                <h1> Emran, one of my top students. As Emran's instructor, I have had the pleasure of working with him in several courses, and I can confidently say that he is an exceptional student with great potential.Emran consistently demonstrated a strong work ethic and a dedication to his studies. He was always eager to learn and never hesitated to ask questions or seek clarification. His attention to detail and his ability to think critically and creatively were particularly impressive. Moreover, he was a collaborative and supportive team member, often going above and beyond to help his classmates.</h1>
                            </div>
                        </div>
                    </div>
                  </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
              <div className='lg:mx-28'>
              <div className="hero bg-base-200 rounded-lg border-4 border-indigo-200 border-b-indigo-500 ">
                        <div className="hero-content items-center flex-col lg:flex-row">
                            <div>
                                <div className="avatar">
                                    <div className="w-12 rounded">
                                        <img src={matiur} />
                                    </div>
                                </div>
                               
                                <p className='text-3xl'>Mr. SAM Matiur Rahman</p>
                                <h1 className='text-xl'>Associate Professor  </h1>
                                <p>Department of Software Engineering,DIU</p>
                                <p>Email:matiur.swe@diu.edu.bd</p>
                            </div>
                            <div>
                                <h1> I had the pleasure of teaching Emran in the Object Oriented Programming course, and he demonstrated exceptional proficiency and deep understanding of the subject matter. His mastery of programming concepts and his ability to apply them to real-world problems were impressive. Emran actively participated in class discussions, and his insightful contributions often elevated the level of discourse. His work ethic, intellectual curiosity, and passion for learning are admirable, and I am confident that he will continue to excel in all his future endeavors. I wholeheartedly recommend him for any opportunities that may arise, as I am certain that he will make a valuable contribution wherever he goes.</h1>
                            </div>
                        </div>
                    </div>
              </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
              <div className='lg:mx-28'>
              <div className="hero bg-base-200 rounded-lg border-4 border-indigo-200 border-b-indigo-500 ">
                        <div className="hero-content items-center flex-col lg:flex-row">
                            <div >
                                <div className="avatar">
                                    <div className="w-12 rounded">
                                        <img src={mamun} />
                                    </div>
                                </div>
                               
                                <p className='text-3xl'>Md Al Mamun</p>
                                <h1 className='text-xl'>Network Specialist </h1>
                                <p>Fibar@Home</p>
                                <p>Email:mamunswe25@gmail.com</p>
                            </div>
                            <div>
                                <h1>I have had the pleasure of working with Emran on multiple projects as a team member, and I can confidently say that he is an exceptional colleague who consistently provides helpful and supportive contributions. Throughout our successful completion of several group projects, Emran's invaluable input and assistance were crucial. I have no doubt that Emran will be a valuable asset to your team</h1>
                            </div>
                        </div>
                   
                    </div>
              </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Reference;