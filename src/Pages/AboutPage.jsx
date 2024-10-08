import React from "react";
import SideBar from "../Components/SideBar";
import DesktopNav from "../Components/DesktopNav";
import HeroSection from "../Components/HeroSection";
import MobileNav from "../Components/MobileNav";
import MainContainer from "../Components/MainContainer";
import NextIcon from "../assets/nextjs-icon-svgrepo-com.svg";

function AboutPage() {
  return (
    <div className="pageContainer w-full flex">
      <SideBar />
      <div className="mainContainer flex flex-col">
        <DesktopNav activePage="about" />
        <div className="bentoBox aboutMain flex flex-col">
          <section className="sectionCopy flex flex-col">
            <div className="pageTitleBox">
              <h2 className="pageTitle">About Me</h2>
            </div>
            <p className="sectionPara aboutPara">
              I am a passionate front-end software developer well-versed in the
              core technologies of HTML, CSS, and JavaScript, with advanced
              experience in React.js and Tailwind CSS. My expertise lies in
              building dynamic, responsive, and large-scale applications that
              come to life with clean code and attention to detail. I am also
              comfortable working with TypeScript, Node.js, and Firebase,
              offering a versatile approach to development. While coding is my
              primary focus, I take pride in making design decisions,
              collaborating with tools like Figma to create pixel-perfect and
              user-friendly solutions.
            </p>
            <p className="sectionPara aboutPara">
              Driven by curiosity and a commitment to excellence, I first
              discovered my passion for front-end development during my time at
              UC Berkeley, where I earned a Bachelor's degree in Applied
              Mathematics. Over the years, I’ve honed my skills through personal
              and client projects. Along the way, I’ve developed a reputation
              for being detail-oriented, self-driven, and excellent in
              communication and collaboration. Now, I’m eager to work with
              innovative teams to make an impact in the software industry.
            </p>
          </section>
          <section className="sectionCopy flex flex-col">
            <div className="pageTitleBox">
              <h2 className="pageTitle">Experience</h2>
            </div>
            <div className="experienceContainer flex flex-col">
              <h3 className="experienceSubtitle">
                Frontend Developer Internship
              </h3>
              <h4 className="experienceSecondTitle">
                Frontend Simplified | Aug 2024 - Oct 2024
              </h4>
            </div>
            <ul className="experienceList ">
              <li className="flex">
                Transformed a completely static HTML, CSS, JavaScript and React
                single page application into an interactive user interface using
                animations, transitions and carousels
              </li>
              <li className="flex">
                Processed API requests with Axios to dynamically represent data
                from a cloud server and represented it through skeleton loading
                states, pagination and dynamic routing
              </li>
              <li className="flex">
                Utilized Git version control and the GitHub interface to work
                and thrive in a virtual and collaborative team environment
              </li>
            </ul>
            <div className="experienceContainer flex flex-col">
              <h3 className="experienceSubtitle">
                Freelance Frontend Developer
              </h3>
              <h4 className="experienceSecondTitle">
                Self Employed | Mar 2024 - Current
              </h4>
            </div>
            <ul className="experienceList ">
              <li className="flex">
                Delivered professional websites using HTML5, CSS3 (+ SCSS, BEM),
                JavaScript and React best practices
              </li>
              <li className="flex">
                Improved website performance by compressing, caching and lazy
                loading images and components
              </li>
              <li className="flex">
                Included SEO, responsive, multi-platform and hosting support,
                enabling their website to be used by any browser or device in
                the world
              </li>
            </ul>
          </section>
          <section className="skillCopy flex flex-col">
            <h3 className="sectionSubheading">Skills</h3>
            <div className="flex skillsBoxHome">
              <div className="skillBox flex">
                <i className="bx bxl-html5"></i>
                <p className="skillText">Html</p>
              </div>
              <div className="skillBox flex">
                <i className="bx bxl-css3"></i>
                <p className="skillText">Css</p>
              </div>
              <div className="skillBox flex">
                <i className="bx bxl-javascript"></i>
                <p className="skillText">Javascript</p>
              </div>
              <div className="skillBox flex">
                <i className="bx bxl-tailwind-css"></i>
                <p className="skillText">Tailwind Css</p>
              </div>
              <div className="skillBox flex">
                <i className="bx bxl-react"></i>
                <p className="skillText">React</p>
              </div>
              <div className="skillBox flex">
                <i className="bx bxl-typescript"></i>
                <p className="skillText">Typescript</p>
              </div>
              <div className="skillBox flex">
                <i className="bx bxl-firebase"></i>
                <p className="skillText">Firebase V9</p>
              </div>
              <div className="skillBox flex">
                <i className="bx bxl-mongodb"></i>
                <p className="skillText">Mongo Db</p>
              </div>
              <div className="skillBox flex">
                <img src={NextIcon} alt="" width={40} />
                <p className="skillText">Next Js</p>
              </div>
              <div className="skillBox flex">
                <i className="bx bxl-nodejs"></i>
                <p className="skillText">Node Js</p>
              </div>
              <div className="skillBox flex">
                <i className="bx bxl-github"></i>
                <p className="skillText">Github</p>
              </div>
              <div className="skillBox flex">
                <i className="bx bxl-figma"></i>
                <p className="skillText">Figma</p>
              </div>
            </div>
          </section>
        </div>
      </div>
      <MobileNav activePage="about" />
    </div>
  );
}

export default AboutPage;
