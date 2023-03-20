import React from 'react';

const Study = () => {
    return (
        <div className='lg:px-40 '> 
        <h1 className='text-center text-5xl'>Education</h1>
        <div className="hero  bg-base-300 rounded-lg border-cyan-600 border-2">
            <div className="hero-content flex-col lg:flex-row">
               <div>
               <h1>Bachelor Of Science</h1>
               <p>2018-2022</p>
               </div>
                <div>
                    <h1 className="text-3xl font-bold">Software Engineering</h1>
                    <h1 className="text-x font-bold">Daffodil International University, Dhaka,Bangladesh</h1>
                    <p className="py-2">
                      
                            <li>Participating Programming Contest</li>
                            <li>Organizer Data Science Summit-2022</li>
                            <li>Arranged Workshop on Data Science and Web development</li>
                            <li>Talent Scholarship TWO semester</li>
                    </p>
                </div>
            </div>
        </div>
        <div className="hero my-5 bg-base-300 rounded-lg border-cyan-600 border-2 ">
            <div className="hero-content flex-col lg:flex-row">
               <div>
               <h1>Higher Secondary (HSC)</h1>
               <p>2015-2016</p>
               </div>
                <div>
                    <h1 className="text-3xl font-bold">Department of Science</h1>
                    <h1 className="text-x font-bold">Haziganj Model College</h1>
                    <p className="py-2">
                            <li> Participating Science Fair (Got Second Position) in Chandpur District</li>
                            <li> Study focus on Math and Physics</li>
                            <li> Member of English Language Club </li>
                       
                    </p>
                </div>
            </div>
        </div>

        <div className="hero  my-5 bg-base-300 rounded-lg border-cyan-600 border-2 ">
            <div className="hero-content flex-col lg:flex-row">
               <div>
               <h1>Secondary School Certificate</h1>
               <p>2013-2014</p>
               </div>
                <div>
                    <h1 className="text-3xl font-bold">Group Science</h1>
                    <h1 className="text-x font-bold">Gobindapur High School</h1>
                    <p className="py-2">
                      
                            <li> Getting the first position in the SSC exam from 102 student </li>
                            <li> Study mainly focus on Math, Physics </li>
                            <li> Organizing different cultural program </li>
                            
                    </p>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Study;