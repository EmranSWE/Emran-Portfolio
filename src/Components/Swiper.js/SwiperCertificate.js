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
        date="May 2023 - Present"
        contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        icon={<TiShoppingBag />}
      >
        <h3 className="vertical-timeline-element-title text-2xl textSecondary">
          Full stack developer
        </h3>
        <h4 className="vertical-timeline-element-subtitle">
          Devlab Solution Limited
        </h4>

        <li>
          Collaborated cross-functionally with design and backend teams to
          develop in-house web products.
        </li>
        <li>
          Contributed to the creation of user-friendly, visually appealing
          dynamic products in collaboration with experienced developers
        </li>
        <li>
          Developed dynamic UI by crafting reusable components to enhance
          modularity and efficiency
        </li>
        <li>
          Managed the creation and maintenance of front-end code for production
          websites, including redesign, updates, and ongoing production tasks.
        </li>
        <li>
          Recognized and implemented dynamic web solutions in alignment with
          company standards.
        </li>
        <li style={{ color: "yellow" }}>
          Tech Stack:ReactJs, Next.js, TypeScript, Redux,Material Ui,NodeJs,
          ExpressJs,Prisma ORM, Mongoose,AntDesing
        </li>
      </VerticalTimelineElement>
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
          Tech Stack and Development: Next.js, TypeScript, and Redux for a
          responsive front end; Node.js and Express for a reliable back end;
          Prisma ORM and PostgreSQL for database integrity.
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
        date="Jan 2023 - Present"
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
