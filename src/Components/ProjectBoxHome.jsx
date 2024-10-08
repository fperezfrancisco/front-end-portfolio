import React from "react";

import { Link } from "react-router-dom";

function ProjectBoxHome({ name, img, liveLink }) {
  return (
    <div className="projectBoxHome flex">
      <img src={img} alt="disney clone" />
      <Link to={liveLink} target="_blank">
        <p className="homeProjectTitle">{name}</p>
      </Link>
    </div>
  );
}

export default ProjectBoxHome;
