import React, { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/projects.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        setProjects(data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <p>Loading projects...</p>;
  }

  if (error) {
    return <p>There was an error loading the projects: {error}</p>;
  }

  return (
    <section aria-labelledby="projects-heading" className="text-center py-10">
      <h1 id="projects-heading" className="text-3xl mb-5">
        My <span className="text-primary">Recent</span> Projects
      </h1>
      <p className="text-xl mb-10">
        Here are a few <span className="text-primary">projects</span> I've
        worked on recently.
      </p>
      <div className="flex justify-center items-center">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project._id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
