import React from "react";
import { ImPointRight } from "react-icons/im";
import { SiGmail } from "react-icons/si";
import { FcPhone } from "react-icons/fc";
import { FaMapMarked } from "react-icons/fa";
import { FaLanguage } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import Skills from "./Skills";
import background from "../../Assets/footer.png";
import SwiperCertificate from "../Swiper.js/SwiperCertificate";
import GitHubContribution from "./GitHubContribution";
const Experience = () => {
  return (
    <div>
      <div
        style={{
          background: `url(${background})`,
          backgroundSize: "cover",
          zIndex: "-1",
        }}
      >
        <div className="lg:ml-28 grid lg:grid-cols-3 sm:grid-cols-1  lg:gap-8 p-5">
          <div className="lg:col-span-2">
            <h1 className="text-4xl">
              Know Who <strong className="textPrimary">I'M</strong>
            </h1>
            <blockquote className="blockquote mb-0 text-xl">
              <p style={{ textAlign: "justify" }}>
                I’m a passionate Full Stack Developer with a deep affection for
                crafting seamless user experiences and robust backend solutions.
                My toolkit includes modern and powerful technologies such as
                React.js, Next.js, Node.js, and Express.js, complemented by my
                expertise in MongoDB, Mongoose ODM, and Prisma ORM. I excel in
                architecting APIs and have a solid grounding in both relational
                databases and NoSQL paradigms. With a keen eye for design, I
                incorporate TailwindCSS and AntDesign to create aesthetically
                pleasing interfaces, and I’m also well-versed in the
                practicality of WordPress for rapid site deployment.
                <span className="textPrimary">
                  I am also good at data science and machine learning.
                </span>
                I can make decision from your data and make valuable insight of
                it. I am confident that I can help your business grow faster by
                providing high-quality services and staying ahead of the curve
                in the ever-evolving tech landscape. I am always looking for new
                opportunities to learn and grow as a Web Developer professional,
                and I am excited to bring my skills and experience to new
                challenges. I am a team player who is able to work well with
                others and contribute to the success of projects.I'm currently
                on the lookout for new challenges and opportunities where I can
                bring my love for all things Full Stack to the table and
                contribute to a forward-thinking team. Let's build the future
                together!.
                <span className="textPrimary">
                  🔍 Currently Seeking: Exciting roles that will leverage my
                  expertise in Full Stack development and my passion for APIs
                  and database management systems.
                </span>
              </p>
              <ul className="my-4">
                <li className="flex text-xl">
                  <ImPointRight /> <span className="ml-2">Playing Cricket</span>
                </li>
                <li className="flex text-xl">
                  <ImPointRight />{" "}
                  <span className="ml-2">Bike riding with friend</span>
                </li>
                <li className="flex text-xl">
                  <ImPointRight />{" "}
                  <span className="ml-2">Explore new technology</span>
                </li>
              </ul>
            </blockquote>
          </div>
          <div>
            <h1 className="text-4xl mb-2">
              Basic <strong className="textPrimary"> Information</strong>{" "}
            </h1>
            <li className="flex items-center my-2">
              <span className="text-2xl">
                <span className="textSecondary">
                  <SiGmail />
                </span>
              </span>{" "}
              <h1 className="ml-5">mdemran.swe@gmail.com</h1>
            </li>
            <li className="flex items-center my-2">
              <span className="text-2xl">
                {" "}
                <span className="textSecondary">
                  <BsLinkedin />
                </span>{" "}
              </span>{" "}
              <h1 className="ml-5">https://www.linkedin.com/in/emran2k18/</h1>
            </li>
            <li className="flex items-center my-2">
              <span className="text-2xl textSecondary">
                {" "}
                <FcPhone />
              </span>{" "}
              <h1 className="ml-5">+8801838235450</h1>
            </li>
            <li className="flex items-center my-2">
              <span className="text-2xl textSecondary">
                <FaMapMarked />{" "}
              </span>{" "}
              <h1 className="ml-5">Bosila,Mohammadpur,Dhaka</h1>
            </li>
            <li className="flex items-center my-2">
              <span className="text-2xl textSecondary">
                <FaLanguage />{" "}
              </span>{" "}
              <h1 className="ml-5">Bangla,English</h1>
            </li>
          </div>
        </div>
      </div>

      {/* Technical Skills */}
      <h1 className="text-center text-4xl my-7">
        Technical <strong className="textPrimary">Skills</strong>{" "}
      </h1>
      <Skills></Skills>
      <h1 className="text-center text-4xl my-7">Experience</h1>
      <SwiperCertificate></SwiperCertificate>
      <h1 className="text-center text-5xl my-7">
        Github <span className="textPrimary">Contribution!</span>{" "}
      </h1>
      <div className="flex justify-center ">
        <GitHubContribution></GitHubContribution>
      </div>
    </div>
  );
};

export default Experience;
