import React from "react";

const SkillProgress = () => {
  return (
    <div className="grid grid-cols-1 gap-2 w-max-full border-x-4 border-indigo-500">
      <div className="ml-4">
        <div>
          <h1 className="">Front End </h1>
          <progress
            className="progress progress-primary  w-100"
            value="95"
            max="100"
          ></progress>
        </div>
        <div>
          <h1 className="">Back End </h1>
          <progress
            className="progress progress-primary  w-100"
            value="95"
            max="100"
          ></progress>
        </div>
        <div>
          <h1 className="">Data Analysis</h1>
          <progress
            className="progress progress-secondary w-100"
            value="85"
            max="100"
          ></progress>
        </div>
        <div>
          <h1 className="">Data Science </h1>
          <progress
            className="progress progress-error w-100"
            value="70"
            max="100"
          ></progress>
        </div>
      </div>
    </div>
  );
};

export default SkillProgress;
