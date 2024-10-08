import React from "react";

function HeroSection() {
  return (
    <div className="bentoBox heroSection">
      <h2 className="heroSubtext">Hi, my name is</h2>
      <div className="mainTitleBox flex">
        <h1 className="heroTitle">Francisco J Perez</h1>
        <h1 className="heroTitle mockTitle">Francisco J Perez</h1>
      </div>
      <p className="heroSubtext heroPara">
        a <span className="specialText">Front-End Software Developer</span> with
        a keen eye for details & an innate drive to bring brilliant projects to
        life.
      </p>
    </div>
  );
}

export default HeroSection;
