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
          <section className="skillCopy flex flex-col">
            <h3 className="sectionSubheading">Skills</h3>
            <div className="flex skillsBoxHome">
              <div className="skillBox flex">
                <i class="bx bxl-html5"></i>
                <p className="skillText">Html</p>
              </div>
              <div className="skillBox flex">
                <i class="bx bxl-css3"></i>
                <p className="skillText">Css</p>
              </div>
              <div className="skillBox flex">
                <i class="bx bxl-javascript"></i>
                <p className="skillText">Javascript</p>
              </div>
              <div className="skillBox flex">
                <i class="bx bxl-tailwind-css"></i>
                <p className="skillText">Tailwind Css</p>
              </div>
              <div className="skillBox flex">
                <i class="bx bxl-react"></i>
                <p className="skillText">React</p>
              </div>
              <div className="skillBox flex">
                <i class="bx bxl-typescript"></i>
                <p className="skillText">Typescript</p>
              </div>
              <div className="skillBox flex">
                <i class="bx bxl-firebase"></i>
                <p className="skillText">Firebase V9</p>
              </div>
              <div className="skillBox flex">
                <i class="bx bxl-mongodb"></i>
                <p className="skillText">Mongo Db</p>
              </div>
              <div className="skillBox flex">
                <img src={NextIcon} alt="" width={40} />
                <p className="skillText">Next Js</p>
              </div>
              <div className="skillBox flex">
                <i class="bx bxl-nodejs"></i>
                <p className="skillText">Node Js</p>
              </div>
              <div className="skillBox flex">
                <i class="bx bxl-github"></i>
                <p className="skillText">Github</p>
              </div>
              <div className="skillBox flex">
                <i class="bx bxl-figma"></i>
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
