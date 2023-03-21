import React from 'react';
import javascript from "../../Assets/tools/javascript.png";
import cplus from "../../Assets/tools/cplus.png";
import python from "../../Assets/tools/python.png";
import java from "../../Assets/tools/java.png";
import html from "../../Assets/tools/html.png";
import css from "../../Assets/tools/css.png";
import react from "../../Assets/tools/react.png";
import redux from "../../Assets/tools/Redux.png";
import bootstrap from "../../Assets/tools/Bootstrap.png";
import tailwind from "../../Assets/tools/Tailwind.png";
import material from "../../Assets/tools/material.png";
import node from "../../Assets/tools/nodejs.png";
import sql from "../../Assets/tools/Sql.png";
import mongodb from "../../Assets/tools/Mongodb.png";
import code from "../../Assets/tools/code.png";
import firebase from "../../Assets/tools/firebase.png";
import github from "../../Assets/tools/Git.png";
import gcp from "../../Assets/tools/gcp.png";
import heroku from "../../Assets/tools/heroku.png";
import pandas from "../../Assets/tools/Pandas.png";
import bigquery from "../../Assets/tools/bigquery.png";
import linux from "../../Assets/tools/linux.png";
import numpy from "../../Assets/tools/numpy.png";
import looker from "../../Assets/tools/looker.png";
import jupyter from "../../Assets/tools/jupeter.png";


const Skills = () => {
    return (
        <div >
            <div className='hero'>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 lg:gap-5">
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <h1 className='text-center text-xl mt-2 textSecondary'>Programming Language</h1>
                        <div className="card-body">
                            <div className="avatar mx-auto">
                                <div className="w-12 mask mask-hexagon">
                                    <img src={cplus} />
                                </div>
                            </div>
                            <div className="avatar mx-auto">
                                <div className="w-12 mask mask-hexagon">
                                    <img src={javascript} />
                                </div>
                            </div>
                            <div className="avatar mx-auto">
                                <div className="w-12 mask mask-hexagon">
                                    <img src={python} />
                                </div>
                            </div>
                            <div className="avatar mx-auto">
                                <div className="w-12 mask mask-hexagon">
                                    <img src={java} />
                                </div>
                            </div>
                            <div className="avatar mx-auto">
                                <div className="w-12 mask mask-hexagon">
                                    <img src={node} />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card w-96 bg-base-100 shadow-xl">
                    <h1 className='text-center text-xl mt-2 textSecondary'>Frontend Development</h1>
                        <div className="card-body">
                            <div className="avatar mx-auto">
                                <div className="w-12 mask mask-hexagon">
                                    <img src={html} />
                                </div>
                            </div>
                            <div className="avatar mx-auto">
                                <div className="w-12 mask mask-hexagon">
                                    <img src={css} />
                                </div>
                            </div>
                            <div className="avatar mx-auto">
                                <div className="w-12 mask mask-hexagon">
                                    <img src={react} />
                                </div>
                            </div>
                            <div className="avatar mx-auto">
                                <div className="w-12 mask mask-hexagon">
                                    <img src={redux} />
                                </div>
                            </div>
                            <div className="avatar mx-auto">
                                <div className="w-12 mask mask-hexagon">
                                    <img src={bootstrap} />
                                </div>
                            </div>
                            <div className="avatar mx-auto">
                                <div className="w-12 mask mask-hexagon">
                                    <img src={tailwind} />
                                </div>
                            </div>
                            <div className="avatar mx-auto">
                                <div className="w-12 mask mask-hexagon">
                                    <img src={material} />
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="card w-96 bg-base-100 shadow-xl">
                    <h1 className='text-center text-xl mt-2 textSecondary'>Backend Development</h1>
                        <div className="card-body">
                            <div className="avatar mx-auto">
                                <div className="w-12 mask mask-hexagon">
                                    <img src={mongodb} />
                                </div>
                            </div>
                            <div className="avatar mx-auto">
                                <div className="w-12 mask mask-hexagon">
                                    <img src={sql} />
                                </div>
                            </div>
                            <div className="avatar mx-auto">
                                <div className="w-12 mask mask-hexagon">
                                    <img src={github} />
                                </div>
                            </div>
                            <div className="avatar mx-auto">
                                <div className="w-12 mask mask-hexagon">
                                    <img src={firebase} />
                                </div>
                            </div>
                            <div className="avatar mx-auto">
                                <div className="w-12 mask mask-hexagon">
                                    <img src={gcp} />
                                </div>
                            </div>
                            <div className="avatar mx-auto">
                                <div className="w-12 mask mask-hexagon">
                                    <img src={code} />
                                </div>
                            </div>
                            <div className="avatar mx-auto">
                                <div className="w-12 mask mask-hexagon">
                                    <img src={heroku} />
                                </div>
                            </div>
                            <div className="card-actions justify-end">
                            </div>
                        </div>
                    </div>


                </div>

            </div>
            <h1 className='text-center my-5 text-xl textSecondary'>Tools I used For Data Analysis</h1>
            <div className='lg:mx-28 justify-items-center grid lg:grid-cols-6  md:grid-cols-3 bg-base-200'>
            <div className="avatar mx-auto">
                <div className="w-1/2">
                    <img src={pandas} />
                </div>
            </div>
            <div className="avatar mx-auto">
                <div className="w-1/2">
                    <img src={bigquery} />
                </div>
            </div>
            <div className="avatar mx-auto">
                <div className="w-1/2">
                    <img src={looker} />
                </div>
            </div>
            <div className="avatar mx-auto">
                <div className="w-1/2">
                    <img src={linux} />
                </div>
            </div>
            <div className="avatar mx-auto">
                <div className="w-1/2">
                    <img src={numpy} />
                </div>
            </div>
            <div className="avatar mx-auto">
                <div className="w-1/2">
                    <img src={jupyter} />
                </div>
            </div>
            </div>

        </div>
    );
};

export default Skills;