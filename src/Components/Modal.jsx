import React from "react";

function Modal({ openModal, currentProject }) {
  const handleClose = () => {
    openModal(false);
    return;
  };

  return (
    <div className="modal projectModal flex flex-col">
      <i class="bx bx-x" onClick={handleClose}></i>
      <div className="projectModalHeader flex flex-col">
        <div className="projectPreviewBox">
          <img
            src={currentProject.imgPrimary}
            alt=""
            className="projectPreviewImg"
          />
        </div>
        <div className="projectHeaderDetails flex flex-col">
          <p className="projectTools">
            {currentProject.tools &&
              currentProject.tools.map((tool) => <span>{tool}, </span>)}
          </p>
          <h3 className="projectTitle">{currentProject.projectTitle}</h3>
          <p className="projectModalDetails">{currentProject.description}</p>
        </div>
      </div>
    </div>
  );
}

export default Modal;
