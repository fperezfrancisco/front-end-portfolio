import React, { useEffect, useState } from "react";
import SideBar from "../Components/SideBar";
import DesktopNav from "../Components/DesktopNav";
import HeroSection from "../Components/HeroSection";
import MobileNav from "../Components/MobileNav";
import ProjectBox from "../Components/ProjectBox";
import Modal from "../Components/Modal";

function ProjectsPage({ projects }) {
  /*const projectsList = [
    {
      projectName: "Disney Clone",
      liveLink: "#",
      githubLink: "#",
      projectImg: "",
    },
    {
      projectName: "Lynx Media Website",
      liveLink: "#",
      githubLink: "#",
      projectImg: "",
    },
    {
      projectName: "Movie Search Web App",
      liveLink: "#",
      githubLink: "#",
      projectImg: "",
    },
    {
      projectName: "Wordle Game Clone",
      liveLink: "#",
      githubLink: "#",
      projectImg: "",
    },
  //];*/

  const [projectsList, setProjectsList] = useState(projects);

  const [modalOpen, setModalOpen] = useState(false);
  const [currProject, setCurrProject] = useState(null);

  return (
    <div className="pageContainer w-full flex">
      <SideBar />
      <div className="mainContainer flex flex-col">
        <DesktopNav activePage="projects" />
        <section className="projectSection bentoBox flex flex-col">
          <div className="pageTitleBox">
            <h2 className="pageTitle">Projects</h2>
          </div>
          <div className="projectsContainer flex">
            <div className="innerProjectsContainer flex">
              {projectsList.map((project) => (
                <ProjectBox
                  projectName={project.projectTitle}
                  liveLink={project.liveURL}
                  githubLink={project.githubURL}
                  imgPrimary={project.primaryImg}
                  imgSquare={project.squareImg}
                  tools={project.tools}
                  description={project.detailsPara}
                  preview={setModalOpen}
                  setCurrentProject={setCurrProject}
                />
              ))}
              {modalOpen && (
                <Modal currentProject={currProject} openModal={setModalOpen} />
              )}
            </div>
          </div>
        </section>
      </div>
      <MobileNav activePage="projects" />
    </div>
  );
}

export default ProjectsPage;
