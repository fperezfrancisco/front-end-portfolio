import React from "react";

function MainContainer() {
  return (
    <div className="bentoBox aboutMain flex flex-col">
      <section className="sectionCopy flex flex-col">
        <h2 className="pageTitle">About Me</h2>
        <p className="sectionPara aboutPara">
          I am a passionate front-end software developer based in Los Angeles
          County, California, well-versed in the core technologies of HTML, CSS,
          and JavaScript, with advanced experience in React.js and Tailwind CSS.
          My expertise lies in building dynamic, responsive, and large-scale
          applications that come to life with clean code and attention to
          detail. I am also comfortable working with TypeScript, Node.js, and
          Firebase, offering a versatile approach to development. While coding
          is my primary focus, I take pride in making design decisions,
          collaborating with tools like Figma to create pixel-perfect and
          user-friendly solutions.
        </p>
        <p className="sectionPara aboutPara">
          Driven by curiosity and a commitment to excellence, I first discovered
          my passion for front-end development during my time at UC Berkeley,
          where I earned a Bachelor's degree in Applied Mathematics. Over the
          years, I’ve honed my skills through personal and client projects.
          Along the way, I’ve developed a reputation for being detail-oriented,
          self-driven, and excellent in communication and collaboration. Now,
          I’m eager to work with innovative teams to make an impact in the
          software industry.
        </p>
      </section>
    </div>
  );
}

export default MainContainer;
