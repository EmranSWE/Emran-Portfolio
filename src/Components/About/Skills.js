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
    SiPandas,
    SiExpress,
} from "react-icons/si";

const Skills = () => {
    return (
        <div>
            <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-1 gap-5 ">
              
                <div className="w-52 rounded mx-auto border-4 border-primary ">
                    <h1 className='text-9xl font-bold  ml-12 textAccent'><CgCPlusPlus /></h1>                    
                </div>
           
                <div className="w-52 rounded mx-auto border-4 border-primary ">
                    <h1 className='text-9xl font-bold  ml-12 textAccent'><DiJavascript1 /></h1>                    
                </div>

                <div className="w-52 rounded mx-auto border-4 border-primary ">
                    <h1 className='text-9xl font-bold  ml-12 textAccent'><DiReact /></h1>                    
                </div>

                <div className="w-52 rounded mx-auto border-4 border-primary ">
                    <h1 className='text-9xl font-bold  ml-12 textAccent'><DiNodejs /></h1>                    
                </div>

                <div className="w-52 rounded mx-auto border-4 border-primary ">
                    <h1 className='text-9xl font-bold  ml-12 textAccent'><DiMongodb /></h1>                    
                </div>
                <div className="w-52 rounded mx-auto border-4 border-primary ">
                    <h1 className='text-9xl font-bold  ml-12 textAccent'><DiPython /></h1>                    
                </div>
                <div className="w-52 rounded mx-auto border-4 border-primary ">
                    <h1 className='text-9xl font-bold  ml-12 textAccent'><DiGit /></h1>                    
                </div>
           

                <div className="w-52 rounded mx-auto border-4 border-primary ">
                    <h1 className='text-9xl font-bold  ml-12 textAccent'><SiFirebase /></h1>                    
                </div>
                <div className="w-52 rounded mx-auto border-4 border-primary ">
                    <h1 className='text-9xl font-bold  ml-12 textAccent'><SiExpress /></h1>                    
                </div>

                <div className="w-52 rounded mx-auto border-4 border-primary ">
                    <h1 className='text-9xl font-bold  ml-12 textAccent'><SiPandas /></h1>                    
                </div>
        </div>
        </div>
    );
};

export default Skills;