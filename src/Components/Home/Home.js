import React from "react";
import homeMain from "../../Assets/EMRAN.png";
import ContactForm from "./ContactForm";
import Type from "./Type";
import "animate.css";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import HomePageProject from "./HomePageProject";
import Study from "./Study";
import Reference from "./Reference";
import Experience from "../About/Experience";

const Home = () => {
  return (
    <div>
      {/* Introduction */}
      <div className="hero">
        <div className="hero-content grid lg:grid-cols-3 sm:grid-cols-1 ">
          <div className=" lg:col-span-2">
            <p className="text-4xl textEffect ">
              Hi There!
              <span className="wave text-4xl" role="img" aria-labelledby="wave">
                👋🏻
              </span>
            </p>
            <p className="text-5xl font-bold pt-3">
              I'M
              <span className="text-5xl font-bold textPrimary animate__animated animate__fadeInLeft animate__bounce ml-2">
                MD EMRAN
              </span>
            </p>
            <p className="text-5xl font-bold my-8 textSecondary">
              <Type></Type>
            </p>
          </div>

          <div>
            <img src={homeMain} className="p-2" alt="home main" />
          </div>
        </div>
      </div>

      {/* Experience */}
      <Experience></Experience>

      {/* All Projects */}
      <HomePageProject></HomePageProject>

      {/* Study Summery */}
      <Study></Study>

      {/* Reference */}
      <Reference></Reference>
      <div className="grid grid-cols-1">
        <h1 className="text-5xl text-center mt-4">
          Find <span className="textPrimary"> Me </span>On:
        </h1>
        <p className="text-xl text-center">
          Feel Free <span className="textSecondary">To Connect</span> With Me!
        </p>
        <div className="text-center">
          <ul className=" flex justify-center">
            <li>
              <a
                href="https://github.com/EmranSWE/"
                target="_blank"
                rel="noreferrer"
                className="textAccent"
              >
                <p className="text-3xl">
                  <AiFillGithub />
                </p>
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/EmranSwe"
                target="_blank"
                rel="noreferrer"
                className="textAccent"
              >
                <p className="text-3xl mx-2">
                  {" "}
                  <AiOutlineTwitter />
                </p>
              </a>
            </li>

            <li>
              <a
                href="https://www.linkedin.com/in/emran2k18/"
                target="_blank"
                rel="noreferrer"
                className="textAccent"
              >
                <p className="text-3xl mx-2">
                  <FaLinkedinIn />
                </p>
              </a>
            </li>

            <li>
              <a
                href="https://www.instagram.com/md_imran_sheikh/"
                target="_blank"
                rel="noreferrer"
                className="textAccent"
              >
                <p className="text-3xl mx-2">
                  <AiFillInstagram />
                </p>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="hero min-h-screen ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">
              Send <span className="textPrimary"> Message</span> now!
            </h1>
            <p className="py-6">
              I'm interested in freelance opportunities - especially ambitious
              or large projects or open-source projects. However, if you have
              other request or question, don't hesitate to contact with me
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <ContactForm></ContactForm>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
