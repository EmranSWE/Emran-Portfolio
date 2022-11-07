import React from 'react';
import { CgCPlusPlus } from "react-icons/cg";
import {
    DiJavascript1,
    DiReact,
    DiNodejs,
    DiMongodb,
    DiPython,
    DiGit,
} from "react-icons/di";
import {
    SiPytorch,
    SiFirebase,
    SiNextdotjs,
} from "react-icons/si";

const Skills = () => {
    return (
        <div>
            <div class="grid lg:grid-cols-5 sm:grid-cols-1 gap-5 ">
              
                <div class="w-52 rounded mx-auto border-4 border-primary ">
                    <h1 className='text-9xl font-bold  ml-12 text-primary'><CgCPlusPlus /></h1>                    
                </div>
           
                <div class="w-52 rounded mx-auto border-4 border-primary ">
                    <h1 className='text-9xl font-bold  ml-12 text-primary'><DiJavascript1 /></h1>                    
                </div>

                <div class="w-52 rounded mx-auto border-4 border-primary ">
                    <h1 className='text-9xl font-bold  ml-12 text-primary'><DiReact /></h1>                    
                </div>

                <div class="w-52 rounded mx-auto border-4 border-primary ">
                    <h1 className='text-9xl font-bold  ml-12 text-primary'><DiNodejs /></h1>                    
                </div>

                <div class="w-52 rounded mx-auto border-4 border-primary ">
                    <h1 className='text-9xl font-bold  ml-12 text-primary'><DiMongodb /></h1>                    
                </div>

                <div class="w-52 rounded mx-auto border-4 border-primary ">
                    <h1 className='text-9xl font-bold  ml-12 text-primary'><DiPython /></h1>                    
                </div>

                <div class="w-52 rounded mx-auto border-4 border-primary ">
                    <h1 className='text-9xl font-bold  ml-12 text-primary'><DiGit /></h1>                    
                </div>

                <div class="w-52 rounded mx-auto border-4 border-primary ">
                    <h1 className='text-9xl font-bold  ml-12 text-primary'><SiPytorch /></h1>                    
                </div>

                <div class="w-52 rounded mx-auto border-4 border-primary ">
                    <h1 className='text-9xl font-bold  ml-12 text-primary'><SiFirebase /></h1>                    
                </div>

                <div class="w-52 rounded mx-auto border-4 border-primary ">
                    <h1 className='text-9xl font-bold  ml-12 text-primary'><SiNextdotjs /></h1>                    
                </div>
        </div>
        </div>
    );
};

export default Skills;