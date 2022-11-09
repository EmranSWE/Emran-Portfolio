import React from 'react';
import profile from '../../Assets/avatar.svg'
import {
    AiFillGithub,
    AiOutlineTwitter,
    AiFillInstagram,
  } from "react-icons/ai";
  import { FaLinkedinIn } from "react-icons/fa";

 import  background from '../../Assets/footer.png'
const HomeIntroMyself = () => {
    return (
        <>
            <div style={{
            background: `url(${background})`,
            backgroundSize: 'cover',
            zIndex:'-1'
        }} className="hero min-h-screen bg-base-200">
                <div className="hero-content  ">
                  <div className='grid lg:grid-cols-3 sm:grid-cols-1 justify-items-center'>
                  <div  className='lg:col-span-2'>
                        <h1 className="text-5xl font-bold">LET ME <span className='textPrimary'>INTRODUCE</span>  MYSELF</h1>
                        <p className="py-2">I fell in love with programming and I think… 🤷‍♂️</p>
                            
                        <p> I am fluent in classics like  Javascript and Python and SQL</p>
                        <p>  My field of Interest's are building new  Web Technologies and Products and also in areas related to <span className='textSecondary'>Machine learning and Data science.</span> </p>
                        <p> Whenever possible, I also apply my passion for developing products with Node.js and Modern Javascript Library and Frameworks  like React.js </p>   
                    </div>
                    <img src={profile} className="max-w-sm rounded-lg " alt='avatar pic' />

                  </div>
                </div>
            </div>

            <div className='grid grid-cols-1'>
                <h1 className='text-5xl text-center my-4'>Find Me On:</h1>
                <p className='text-xl text-center'>Feel Free <span className='textPrimary'>To Connect</span>  With Me!</p>
                <div className='text-center'>
                <ul className=" flex justify-center my-10">   
             <li>
                <a
                  href="https://github.com/EmranSWE/"
                  target="_blank"
                  rel="noreferrer"
                  className="textAccent"
                >
                  <p className='text-3xl'><AiFillGithub /></p>
                </a>
              </li>            
                    <li>
                <a
                  href="https://twitter.com/EmranSwe"
                  target="_blank"
                  rel="noreferrer"
                  className="textAccent"
                >
                    <p className='text-3xl mx-2'> <AiOutlineTwitter /></p>
                 
                </a>
              </li>
                   
             
              <li>
                <a
                  href="https://www.linkedin.com/in/emran2k18/"
                  target="_blank"
                  rel="noreferrer"
                  className="textAccent"
                >
                    <p className='text-3xl mx-2'><FaLinkedinIn /></p>
                  
                </a>
              </li>

              <li>
                <a
                  href="https://www.instagram.com/md_imran_sheikh/"
                  target="_blank"
                  rel="noreferrer"
                  className="textAccent"
                >
                    <p className='text-3xl mx-2'><AiFillInstagram /></p>
                </a>
              </li>
            </ul>
                </div>

            </div>
        </>
    );
};

export default HomeIntroMyself;