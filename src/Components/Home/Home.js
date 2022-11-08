import React from 'react';
import homeMain from '../../Assets/home-main.svg'
import ContactForm from './ContactForm';
import HomeIntroMyself from './HomeIntroMyself';
import Type from './Type';
import 'animate.css';

const Home = () => {
    return (
        <div >
            <div className="grid lg:grid-cols-3 sm:grid-cols-1 " >
                <div className='p-40 lg:col-span-2'>
                    <p className="text-4xl textEffect ">Hi There!
                        <span className="wave text-4xl" role="img" aria-labelledby="wave">
                            👋🏻
                        </span>
                        
                    </p>
                    <p className="text-5xl font-bold pt-3">I'M <span className="text-5xl font-bold textPrimary animate__animated animate__fadeInLeft animate__bounce">MD EMRAN </span></p>
                    <p className='text-5xl font-bold my-8 textSecondary' >
                        <Type></Type>
                    </p>
                </div>

                <div>
                    <img src={homeMain} className="p-2  " />
                </div>
            </div>
            {/* 
        ----------------
        My Introduction Section
        -----------------
        */}
            <HomeIntroMyself></HomeIntroMyself>

            {/* Contact */}
            <div class="hero min-h-screen bg-base-200">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <div class="text-center lg:text-left">
                        <h1 class="text-5xl font-bold">Send <span className='textPrimary'> Message</span> now!</h1>
                        <p class="py-6">I'm interested in freelance opportunities - especially ambitious or large projects. However, if you have other request or question, don't hesitate to contact with me</p>
                    </div>
                    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div class="card-body">
                            <ContactForm></ContactForm>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default Home;