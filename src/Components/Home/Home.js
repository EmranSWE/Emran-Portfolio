import React from "react";
import homeMain from "../../Assets/banner.svg";
import ContactForm from "./ContactForm";
import Type from "./Type";
import "animate.css";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLanguage, FaLinkedinIn, FaMapMarked } from "react-icons/fa";
import HomePageProject from "./HomePageProject";
import Study from "./Study";
import Reference from "./Reference";
import Experience from "../About/Experience";
import { FcPhone } from "react-icons/fc";
import { BsLinkedin } from "react-icons/bs";
import { SiGmail } from "react-icons/si";

const Home = () => {
  return (
    <div>
      {/* Introduction */}
      <div className="hero">
        <div className="hero-content grid lg:grid-cols-3 sm:grid-cols-1 ">
          <div className=" lg:col-span-2 max-auto">
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
            <img src={homeMain} className="p-2 " alt="home main" />
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

      {/* Basic Information and contact us */}
      <div className="grid grid-cols-1">
        <h1 className="text-5xl text-center mt-4">
          Find <span className="textPrimary"> Me </span>On
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
      <div className="hero-content grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2 justify-center">
        {/* Left Columns */}
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mx-auto">
          <div className="card-body">
            <ContactForm></ContactForm>
          </div>
        </div>

        {/* Right Column */}
        <div className="col-span-2 lg:col-span-1 mx-auto">
          <div className="text-center lg:text-left mx-auto">
            <div>
              <h1 className="text-3xl font-bold">
                More <strong className="textPrimary"> Information</strong>
              </h1>
              <li className="flex items-center my-2">
                <span className="text-2xl">
                  <span className="textSecondary">
                    <SiGmail />
                  </span>
                </span>
                <h1 className="ml-5">mdemran.swe@gmail.com</h1>
              </li>
              <li className="flex items-center my-2">
                <span className="text-2xl">
                  <span className="textSecondary">
                    <BsLinkedin />
                  </span>
                </span>
                <h1 className="ml-5">https://www.linkedin.com/in/emran-swe/</h1>
              </li>
              <li className="flex items-center my-2">
                <span className="text-2xl textSecondary">
                  <FcPhone />
                </span>
                <h1 className="ml-5">+8801838235450</h1>
              </li>
              <li className="flex items-center my-2">
                <span className="text-2xl textSecondary">
                  <FaMapMarked />
                </span>
                <h1 className="ml-5">Bosila,Mohammadpur,Dhaka</h1>
              </li>
              <li className="flex items-center my-2">
                <span className="text-2xl textSecondary">
                  <FaLanguage />{" "}
                </span>{" "}
                <h1 className="ml-5">Bangla,English</h1>
              </li>
            </div>
            <p className="py-6">
              I'm interested in freelance opportunities - especially ambitious
              or large projects or open-source projects. However, if you have
              other request or question, don't hesitate to contact with me
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
