import React from "react";

const SkillIcon = ({ src, alt, label }) => {
  return (
    <div className="avatar mx-auto">
      <div className="w-12 mask mask-hexagon">
        <img src={src} alt={alt} title={label} />
      </div>
    </div>
  );
};

export default SkillIcon;
