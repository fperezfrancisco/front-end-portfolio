import React from "react";

function ProjectBox({
  projectName,
  liveLink,
  githubLink,
  imgPrimary,
  imgSquare,
  preview,
  setCurrentProject,
  tools,
  description,
}) {
  const handlePreview = () => {
    setCurrentProject({
      projectTitle: projectName,
      liveURL: liveLink,
      githubURL: githubLink,
      imgPrimary: imgPrimary,
      imgSquare: imgSquare,
      tools: tools,
      description: description,
    });
    preview(true);
    return;
  };

  console.log(imgSquare);
  console.log(imgPrimary);

  return (
    <div className="projectBox flex flex-col">
      <div className="projectPreviewBox" onClick={handlePreview}>
        <img src={imgSquare} alt="" className="projectPreviewImg" />
        <div className="overlay"></div>
        <i class="bx bx-show"></i>
      </div>
      <div className="projectDetails flex flex-col">
        <h3 className="projectTitle">{projectName}</h3>
        <div className="projectLinks flex">
          <a href={liveLink} className="liveViewLink" target="_blank">
            Live Site <i class="bx bx-link-external"></i>
          </a>
          <a href={githubLink} className="githubView" target="_blank">
            View Github <i class="bx bx-link-external"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectBox;
