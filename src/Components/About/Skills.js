import React from "react";
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
import docker from "../../Assets/tools/docker-logo.png";
import aws from "../../Assets/tools/aws.png";
import vitest from "../../Assets/tools/vitest.jpg";
import jwt from "../../Assets/tools/jwt.png";
import postgress from "../../Assets/tools/pgres.png";
import prisma from "../../Assets/tools/prisma.webp";
import typescript from "../../Assets/tools/typescript.png";
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

// Skill card component
const SkillCard = ({ title, skills }) => (
  <div className="card">
    <h1 className="text-center text-xl mt-2">{title}</h1>
    <div className="card-body">
      <div className="grid grid-cols-2 gap-4">
        {" "}
        {/* This sets up the two-column grid */}
        {skills.map((skill) => (
          <div
            key={skill.id}
            className="flex justify-center items-center"
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.5)",
              borderRadius: "50%",
              padding: "10%",
            }}
          >
            <img
              src={skill.image}
              alt={skill.name}
              title={skill.name}
              className="w-10 h-8"
            />{" "}
          </div>
        ))}
      </div>
    </div>
  </div>
);

// Skill data
const skillsData = [
  {
    id: "programming",
    title: "Programming Languages",
    skills: [
      { id: "javascript", name: "JavaScript", image: javascript },
      { id: "cplus", name: "C++", image: cplus },

      { id: "python", name: "Python", image: python },
      { id: "java", name: "Java", image: java },
    ],
  },
  {
    id: "frontend",
    title: "Frontend Development",
    skills: [
      { id: "html", name: "HTML", image: html },
      { id: "css", name: "CSS", image: css },
      { id: "react", name: "React", image: react },
      { id: "redux", name: "Redux", image: redux },
      { id: "bootstrap", name: "Bootstrap", image: bootstrap },
      { id: "tailwind", name: "Tailwind CSS", image: tailwind },
      { id: "material", name: "Material UI", image: material },
      { id: "typescript", name: "Typescript", image: typescript },
    ],
  },
  {
    id: "backend",
    title: "Backend Development",
    skills: [
      { id: "node", name: "Node.js", image: node },
      { id: "sql", name: "SQL", image: sql },
      { id: "mongodb", name: "MongoDB", image: mongodb },
      { id: "firebase", name: "firebase", image: firebase },
      { id: "jwt", name: "jwt", image: jwt },
      { id: "prisma", name: "prisma", image: prisma },
      { id: "postgress", name: "postgress", image: postgress },
      { id: "vitest", name: "postgress", image: vitest },
    ],
  },
  {
    id: "devops",
    title: "DevOps",
    skills: [
      { id: "github", name: "GitHub", image: github },
      { id: "gcp", name: "Google Cloud Platform", image: gcp },
      { id: "heroku", name: "Heroku", image: heroku },
      { id: "docker", name: "docker", image: docker },
      { id: "aws", name: "aws", image: aws },
    ],
  },
  {
    id: "dataAnalysis",
    title: "Data Analysis Tools",
    skills: [
      { id: "pandas", name: "Pandas", image: pandas },
      { id: "bigquery", name: "BigQuery", image: bigquery },
      { id: "linux", name: "Linux", image: linux },
      { id: "numpy", name: "NumPy", image: numpy },
      { id: "looker", name: "Looker", image: looker },
      { id: "jupyter", name: "Jupyter Notebook", image: jupyter },
    ],
  },
];

// Main Skills component
const Skills = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {skillsData.map((category) => (
          <SkillCard
            key={category.id}
            title={category.title}
            skills={category.skills}
          />
        ))}
      </div>
    </div>
  );
};

export default Skills;
