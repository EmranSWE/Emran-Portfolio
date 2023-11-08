import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../Assets/favicon.png";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Loading from "./Loading";
import { toast } from "react-toastify";
import music from "../../Assets/mind.mp3";
import { AiFillSound, AiOutlineSound } from "react-icons/ai";
const Navbar = () => {
  // const [user, loading, error] = useAuthState(auth);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);

  // if (loading) {
  //   return <Loading />;
  // }
  // if (error) {
  //   return toast.error("Failed to sign in");
  // }

  const toggleMusic = () => {
    const audioElement = document.getElementById("backgroundMusic");

    if (audioElement) {
      if (isMusicPlaying) {
        audioElement.pause();
      } else {
        audioElement.volume = 0.1;
        audioElement.play();
      }

      setIsMusicPlaying(!isMusicPlaying);
    }
  };

  return (
    <div className="navbar">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/about">About Me</Link>
            </li>
            <li>
              <Link to="/projects">Project</Link>
            </li>
            <li>
              <Link to="/resume">Resume</Link>
            </li>
            <li>
              <Link to="/blogs">Blogs</Link>
            </li>

            {/* {user?.email === "mdemran.swe@gmail.com" && (
              <>
                {" "}
                <li>
                  <Link to="/addproject">Add Project</Link>
                </li>
                <li>
                  <Link to="/addproject">Add Project</Link>
                </li>
                <li>
                  <Link to="/message">message</Link>
                </li>
              </>
            )} */}
          </ul>
        </div>
        {/* <a className="btn btn-ghost normal-case text-xl">daisyUI</a> */}
        <Link to="/">
          <img src={logo} className="w-22" alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/projects">Project</Link>
          </li>
          <li>
            <Link to="/resume">Resume</Link>
          </li>

          {/* {user?.email === "mdemran.swe@gmail.com" && (
            <>
              {" "}
              <li>
                <Link to="/addproject">Add Project</Link>
              </li>
              <li>
                <Link to="/message">message</Link>
              </li>
            </>
          )} */}
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <div className="navbar-end">
          <button onClick={toggleMusic} className="music-toggle-button">
            {isMusicPlaying ? <AiFillSound /> : <AiOutlineSound />}
          </button>
          <audio id="backgroundMusic" autoPlay loop>
            <source src={music} type="audio/mpeg" />
          </audio>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
