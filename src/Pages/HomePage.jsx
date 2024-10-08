import React, { useEffect, useState } from "react";
import SideBar from "../Components/SideBar";
import MainContainer from "../Components/MainContainer";
import HeroSection from "../Components/HeroSection";
import MobileNav from "../Components/MobileNav";
import DesktopNav from "../Components/DesktopNav";
import ProjectBoxHome from "../Components/ProjectBoxHome";
import disneyCloneImg from "../assets/disney-clone-wide.png";
import lynxImg from "../assets/lynx-home.png";
import weddingImg from "../assets/wedding-landing-page.png";
import data from "../Data";
import HeroProjectSlider from "../Components/HeroProjectSlider";
import NextIcon from "../assets/nextjs-icon-svgrepo-com.svg";

function HomePage() {
  const [swipeLeft, setSwipeLeft] = useState(false);
  const [swipeRight, setSwipeRight] = useState(false);
  const [projectList, setProjectList] = useState(data);

  const [currIndex, setCurrIndex] = useState(0);

  const [currentProj, setCurrentProj] = useState(projectList[currIndex]);

  const handleRightClick = () => {
    console.log("Right arrow clicked.");
    setSwipeRight(true);
  };

  const handleLeftClick = () => {
    setSwipeLeft(true);
  };

  function nextSlide() {
    handleRightClick();
  }

  function autoSlide() {
    setInterval(() => {
      nextSlide();
    }, 6000);
  }

  useEffect(() => {
    if (swipeRight) {
      setTimeout(() => {
        console.log("swiped right");
        console.log("Index: " + currIndex);
        if (currIndex === projectList.length - 1) {
          console.log("reset list");
          setCurrIndex(0);
          console.log(currIndex);
          setCurrentProj(projectList[0]);
        } else {
          console.log("entered next in list");
          setCurrIndex(currIndex + 1);
          console.log(currIndex);
          setCurrentProj(projectList[currIndex + 1]);
        }
        //handle list change and update
        setSwipeRight(false);
      }, 1000);
    }

    if (swipeLeft) {
      if (currIndex === 0) {
        console.log("reset list");
        setCurrIndex(projectList.length - 1);
        console.log(currIndex);
        setCurrentProj(projectList[projectList.length - 1]);
      } else {
        console.log("entered next in list");
        setCurrIndex(currIndex - 1);
        console.log(currIndex);
        setCurrentProj(projectList[currIndex - 1]);
      }
      //handle list change and update
      setSwipeLeft(false);
    }
  }, [swipeRight, swipeLeft]);

  return (
    <div className="pageContainer w-full flex">
      <SideBar />
      <div className="mainContainer flex flex-col">
        <DesktopNav activePage="home" />
        <HeroSection />
        <div className="mainSubContainer flex">
          <div className="bentoBox projectHomeBox flex">
            <h2 className="homeSubtitle">Projects</h2>
            <HeroProjectSlider projectList={projectList} />
            {/*
            <div className="projectContainerHome">
              <div
                className={`projectScrollBox flex ${
                  swipeRight && "right-animation"
                } ${swipeLeft && "left-animation"}  `}
              >
                <div className="projectBoxHomeGhost flex">
                  <img src={disneyCloneImg} alt="disney clone" />
                  <p className="homeProjectTitle">Disney Clone</p>
                </div>
                <ProjectBoxHome
                  name={currentProj.projectTitle}
                  img={currentProj.primaryImg}
                  liveLink={currentProj.liveURL}
                />
              </div>
              <div className="projectBtns flex">
                <i class="bx bxs-chevron-left" onClick={handleLeftClick}></i>
                <i class="bx bxs-chevron-right" onClick={handleRightClick}></i>
              </div>
            </div>
            */}
          </div>
          <div className="bentoBox skillsHomeBox flex flex-col">
            <h2 className="homeSubtitle">Skills & Tools</h2>
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
          </div>
        </div>
      </div>
      <MobileNav activePage="home" />
    </div>
  );
}

export default HomePage;
