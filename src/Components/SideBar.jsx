import React, { useEffect, useState } from "react";
import profileImg from "../../public/francisco-memoji-best.png";

function SideBar() {
  const [fullView, setFullView] = useState(true);

  function handleClick() {
    console.log(fullView);
    setFullView(!fullView);
  }

  useEffect(() => {
    console.log(fullView);
  }, [fullView]);

  return (
    <div className="sideBar bentoBox w-full h-full max-h-[100vh] min-h-[600px] lg:w-[300px] flex flex-col p-4">
      <div className="sidebarToggle" onClick={handleClick}>
        {fullView ? <p>Show less</p> : <p>Show more</p>}
      </div>
      <div
        className={`sidebarHeaderContainer flex flex-col w-full ${
          fullView ? "" : "hideBox"
        } `}
      >
        <div className="profileContainer">
          <img src={profileImg} alt="francisco perez" />
        </div>
        <div className="sideTitleBox flex flex-col">
          <h2 className="nameTitle">Francisco J Perez</h2>
          <span className="developerTitle ">Front-end Developer</span>
        </div>
      </div>
      <div
        className={`sidebarInfoContainer flex flex-col w-full ${
          fullView ? "" : "hideBox"
        }`}
      >
        <ul className="infoList">
          <li className="infoLi">
            <span className="iconContainer">
              <i class="bx bxs-envelope"></i>
            </span>
            <span className="infoBox">
              <p className="infoHeading">Email</p>
              <a href="mailto:fperezfrancisco4@gmail.com" className="infoLink">
                fperezfrancisco4@gmail.com
              </a>
            </span>
          </li>
          <li className="infoLi">
            <span className="iconContainer">
              <i class="bx bxs-phone"></i>
            </span>
            <span className="infoBox">
              <p className="infoHeading">Phone</p>
              <a href="#" className="infoLink">
                (661)-390-6504
              </a>
            </span>
          </li>
          <li className="infoLi">
            <span className="iconContainer">
              <i class="bx bxs-calendar"></i>
            </span>
            <span className="infoBox">
              <p className="infoHeading">Date of Birth</p>
              <a href="#" className="infoLink">
                December 13th, 1997
              </a>
            </span>
          </li>
          <li className="infoLi">
            <span className="iconContainer">
              <i class="bx bxs-school"></i>
            </span>
            <span className="infoBox">
              <p className="infoHeading">Education</p>
              <a href="#" className="infoLink">
                UC Berkeley | 2021
              </a>
            </span>
          </li>
          <li className="infoLi">
            <span className="iconContainer">
              <i class="bx bxs-location-plus"></i>
            </span>
            <span className="infoBox">
              <p className="infoHeading">Location</p>
              <a href="#" className="infoLink">
                Santa Clarita, CA, USA
              </a>
            </span>
          </li>
        </ul>
        <ul className="socialsList flex noList">
          <li className="socialLi">
            <a href="#" className="socialLink">
              <i class="bx bxl-github"></i>
            </a>
          </li>
          <li className="socialLi">
            <a href="#" className="socialLink">
              <i class="bx bxl-linkedin-square"></i>
            </a>
          </li>
          <li className="socialLi">
            <a href="#" className="socialLink">
              <i class="bx bxl-instagram-alt"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SideBar;
