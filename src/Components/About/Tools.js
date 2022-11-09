import React from 'react';
import {
    SiLinux,
    SiVisualstudiocode,
    SiPostman,
    SiHeroku,
    SiVercel,
    SiNumpy,
  } from "react-icons/si";

const Tools = () => {
    return (
        <div>
              <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-1 gap-5 ">
              
                <div className="w-52 rounded mx-auto border-4 border-primary ">
                    <h1 className='text-9xl font-bold  ml-12 textAccent'><SiLinux /></h1>                    
                </div>
           
                <div className="w-52 rounded mx-auto border-4 border-primary ">
                    <h1 className='text-9xl font-bold  ml-12 textAccent'><SiVisualstudiocode /></h1>                    
                </div>

                <div className="w-52 rounded mx-auto border-4 border-primary ">
                    <h1 className='text-9xl font-bold  ml-12 textAccent'><SiPostman /></h1>                    
                </div>

                <div className="w-52 rounded mx-auto border-4 border-primary ">
                    <h1 className='text-9xl font-bold  ml-12 textAccent'><SiHeroku /></h1>                    
                </div>

                <div className="w-52 rounded mx-auto border-4 border-primary ">
                    <h1 className='text-9xl font-bold  ml-12 textAccent'><SiNumpy /></h1>                    
                </div>

        </div>
        </div>
    );
};

export default Tools;