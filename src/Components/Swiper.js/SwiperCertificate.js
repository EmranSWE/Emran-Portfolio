import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import React from "react";
import { TiShoppingBag } from "react-icons/ti";
import { MdModelTraining } from "react-icons/md";

const SwiperCertificate = () => {
  return (
    <VerticalTimeline>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="Sep 2023 - Nov 2023"
        contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        icon={<TiShoppingBag />}
      >
        <h3 className="vertical-timeline-element-title text-2xl textSecondary">
          Full stack developer
        </h3>
        <h4 className="vertical-timeline-element-subtitle">Stay Solution BD</h4>
        <li>Implemented an intuitive property listing system</li>
        <li>
          Automated the booking confirmation and payment processes, slashing
          customer inquiries by 50% and boosting user satisfaction by 20%.
        </li>
        <li>
          Created role-specific dashboards that streamlined rental operations
          and transaction management, significantly improving operational
          efficiency.
        </li>
        <li>
          Implemented JWT for secure signup and login procedures, ensuring
          robust user account protection and privacy.
        </li>
        <li>
          Tech Stack and Development: Next.js, TypeScript, and Redux for a
          responsive front end; Node.js and Express for a reliable back end;
          Prisma ORM and PostgreSQL for database integrity; and JWT alongside
          Zod for secure and validated operations.
        </li>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="Jan 2023 - Oct 2023"
        contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        icon={<TiShoppingBag />}
      >
        <h3 className="vertical-timeline-element-title text-2xl textSecondary">
          Full stack Development
        </h3>
        <h4 className="vertical-timeline-element-subtitle">Programming Hero</h4>
        <li>
          Building and integrating robust backend systems utilizing Node.js and
          Express,AWS, docker, with a focus on database integration using both
          SQL and NoSQL technologies like MySQL, MongoDB, and Prisma.
        </li>
        <li>
          Hands-on development and scaling of full-stack applications,
          showcasing a versatile skill set across various technologies,
          including TypeScript.
        </li>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
        date="Aug-2022 - Dec-2022"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        icon={<TiShoppingBag />}
      >
        <h3 className="vertical-timeline-element-title text-3xl textSecondary">
          Web developer
        </h3>
        <h4 className="vertical-timeline-element-subtitle">
          Crusherslab QA | Software Testing and QA Company
        </h4>
        <li>Understand Project Requirement, and Determined how to develop.</li>
        <li>Collaborate with the QA team to develop effectively.</li>
        <li>Strategies and test plans with proper documentation.</li>
        <li>Creative front-end design and collaborate with teams.</li>
        <li>Creating Rest API by collaborating with a back-end team.</li>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="Jan 2022 - Present"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        icon={<TiShoppingBag />}
        contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
      >
        <h3 className="vertical-timeline-element-title text-2xl textSecondary">
          Web Development And Data Analysis
        </h3>
        <h4 className="vertical-timeline-element-subtitle">Freelance</h4>

        <li>
          {" "}
          Communicating effectively with clients to understand their needs and
          providing them with proper advice about project requirements.
        </li>
        <li>
          Designing and developing web applications using various technologies
          such as HTML, CSS, JavaScript, and a variety of programming languages
        </li>
        <li>
          {" "}
          Building and integrating back-end systems and databases, such as MySQL
          or MongoDB, to support the front-end features
        </li>
        <li>
          Maintaining existing applications and adding new features as required.
        </li>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work "
        date="January 2022 - July-2022"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        icon={<MdModelTraining />}
      >
        <h3 className="vertical-timeline-element-title text-xl textSecondary">
          Applied Data Analysis and BI Engineering{" "}
        </h3>
        <h4 className="vertical-timeline-element-subtitle">
          Trainee- Valuebase Academy
        </h4>
        <li>Hands on experience about data analysis tools and technique</li>
        <li>NPS analysis and data visualizing</li>
        <li>Different Customers segmentation based on their behaviour</li>
        <li>Product KPI analysis</li>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="Jan 2021 - July 2021"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        icon={<MdModelTraining />}
      >
        <h3 className="vertical-timeline-element-title text-2xl textSecondary">
          Complete Web Development
        </h3>
        <h4 className="vertical-timeline-element-subtitle">Programming Hero</h4>

        <li>Learning and Applied Web Development</li>
        <li>Build lots of dynamic web application</li>
        <li> Implementing outstanding UI using ReactJs</li>
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
};

export default SwiperCertificate;
