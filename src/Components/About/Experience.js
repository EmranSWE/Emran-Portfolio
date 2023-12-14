import React from "react";
import { ImPointRight } from "react-icons/im";
import { SiGmail } from "react-icons/si";
import { FcPhone } from "react-icons/fc";
import { FaMapMarked } from "react-icons/fa";
import { FaLanguage } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import homeMain from "../../Assets/EMRAN.png";
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
          <div style={{ position: "relative" }}>
            <img src={homeMain} className="p-2" alt="home main" />
          </div>
          <div className="lg:col-span-2" style={{ position: "relative" }}>
            <h1 className="text-4xl">
              Know Who <strong className="textPrimary">I'M</strong>
            </h1>
            <blockquote className="blockquote mb-0 text-xl">
              <p style={{ textAlign: "justify" }}>
                Passionate Full Stack Developer crafting seamless user
                experiences and robust backend solutions. Expert in React.js,
                Next.js, Node.js, and Express.js, with proficiency in MongoDB,
                Mongoose ODM, and Prisma ORM. Excels in API architecture, both
                relational databases, and NoSQL paradigms. Designs aesthetically
                pleasing interfaces using TailwindCSS and AntDesign. Proficient
                in WordPress for rapid site deployment.
                <span className="textPrimary">
                  Skilled in data science and machine learning, leveraging
                  insights for decision-making.
                </span>
                Confident in accelerating business growth through high-quality
                services. Eager to take on new challenges, contribute to team
                success, and stay ahead in tech. Currently seeking roles that
                leverage expertise in Full Stack development, APIs, and database
                management systems.
                <span className="textPrimary">
                  Let's build the future together!
                </span>
              </p>
              <ul className="my-4">
                <li className="flex text-xl">
                  <ImPointRight />{" "}
                  <span className="ml-2">Passionate Full Stack Developer</span>
                </li>
                <li className="flex text-xl">
                  <ImPointRight />{" "}
                  <span className="ml-2">Data Science & ML Enthusiast</span>
                </li>
                <li className="flex text-xl">
                  <ImPointRight />{" "}
                  <span className="ml-2">
                    Seeking Exciting Full Stack Opportunities
                  </span>
                </li>
              </ul>
            </blockquote>
          </div>

          {/* <div>
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
          </div> */}
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
