import React from "react";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react"; // import from 'keen-slider/react.es' for to get an ES module
import { Link } from "react-router-dom";

function HeroProjectSlider({ projectList }) {
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      loop: true,
    },
    [
      (slider) => {
        let timeout;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 5000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  return (
    <div ref={sliderRef} className="keen-slider projectHomeContainer">
      {!projectList ? (
        <>
          <div className="keen-slider__slide projectSlides">
            <div className="projectImgHome"></div>
            <p className="projectTitle">Disney Clone</p>
          </div>
          <div className="keen-slider__slide projectSlides">
            <div className="projectImgHome"></div>
            <p className="projectTitle">Disney Clone</p>
          </div>
        </>
      ) : (
        projectList.map((project) => (
          <div className="keen-slider__slide projectSlides">
            <Link
              to={project.liveURL}
              className="projectImgHome"
              target="_blank"
            >
              <img
                src={project.primaryImg}
                className="projectImgSliderHome"
                alt=""
              />
            </Link>
            <p className="projectTitle">{project.projectTitle}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default HeroProjectSlider;
