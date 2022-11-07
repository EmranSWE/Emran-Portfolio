import React from 'react';
import homeMain from '../../Assets/home-main.svg'
import HomeIntroMyself from './HomeIntroMyself';
import Type from './Type';
const Home = () => {
    return (
        <div>
            <div class="grid lg:grid-cols-3 sm:grid-cols-1 " >
            <div className='p-40 lg:col-span-2'>
                <p class="text-4xl  ">Hi There!
                    <span className="wave text-4xl" role="img" aria-labelledby="wave">
                        👋🏻
                    </span>
                </p>
                <p class="text-5xl font-bold pt-3">I'M <span class="text-5xl font-bold text-primary">MD EMRAN </span></p>
                <p className='text-5xl my-8'>
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
        </div>
        

    );
};

export default Home;