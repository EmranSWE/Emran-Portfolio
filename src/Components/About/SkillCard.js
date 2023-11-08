import React from "react";

const SkillCard = ({ title, children }) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <h1 className="text-center text-xl mt-2">{title}</h1>
      <div className="card-body">{children}</div>
    </div>
  );
};

export default SkillCard;
