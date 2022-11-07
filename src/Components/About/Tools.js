import React from 'react';
import {
    SiLinux,
    SiVisualstudiocode,
    SiPostman,
    SiHeroku,
    SiVercel,
  } from "react-icons/si";

const Tools = () => {
    return (
        <div>
              <div class="grid lg:grid-cols-5 sm:grid-cols-1 gap-5 ">
              
                <div class="w-52 rounded mx-auto border-4 border-primary ">
                    <h1 className='text-9xl font-bold  ml-12 text-primary'><SiLinux /></h1>                    
                </div>
           
                <div class="w-52 rounded mx-auto border-4 border-primary ">
                    <h1 className='text-9xl font-bold  ml-12 text-primary'><SiVisualstudiocode /></h1>                    
                </div>

                <div class="w-52 rounded mx-auto border-4 border-primary ">
                    <h1 className='text-9xl font-bold  ml-12 text-primary'><SiPostman /></h1>                    
                </div>

                <div class="w-52 rounded mx-auto border-4 border-primary ">
                    <h1 className='text-9xl font-bold  ml-12 text-primary'><SiHeroku /></h1>                    
                </div>

                <div class="w-52 rounded mx-auto border-4 border-primary ">
                    <h1 className='text-9xl font-bold  ml-12 text-primary'><SiVercel /></h1>                    
                </div>

        </div>
        </div>
    );
};

export default Tools;