import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ProjectCard from "../Projects/ProjectCard";

const HomePageProject = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch("/projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  const showingProject = projects.slice(0, 6);

  return (
    <div>
      <h1 className="text-5xl text-center my-5">
        My <span className="textPrimary">Recent</span> Projects
      </h1>
      <p className="text-xl text-center">
        Here are few <span className="textPrimary">projects</span> I've done
        recently
      </p>
      <div className="flex justify-center items-center">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8 ">
          {showingProject?.map((project) => (
            <ProjectCard key={project._id} project={project}></ProjectCard>
          ))}
        </div>
      </div>
      <p className="text-2xl text-center mb-6">
        Explore All My{" "}
        <span style={{ color: "yellow" }}>
          <Link to="/projects">PROJECTS</Link>
        </span>
      </p>
    </div>
  );
};

export default HomePageProject;
