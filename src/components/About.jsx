import React from "react";
import hero from "./data/hero.json";

const About = () => {
  return (
    <>
      <div className="container about" id="about">
        <h1>ABOUT</h1>
        <div
          className="abt d-flex justify-content-center align-items-center"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          <div className="left">
            <div className="img">
              <img src={`/assets/${hero.imgSrc}`} alt="" />
            </div>
          </div>

          <div className="right">
            <h2 className="about__subtitle">I'am Kundan</h2>
            <p className="about__text">
              Hello! I'm Kundan Yadav, a passionate frontend developer with a
              keen eye for user experience and a love for creating beautiful,
              functional websites.My journey into the world of web development
              begin , where I discovered my enthusiasm for turning ideas into
              responsive and interactive interfaces. I thrive on the challenges
              that frontend development brings, constantly seeking innovative
              solutions to deliver seamless user experiences.
            </p>
          </div>
        </div>
      </div>

      {/* <div className="container about" id="">
        <div className="left" data-aos="fade-up-right" data-aos-duration="1000">
          <h1>ABOUT</h1>
          <a
            href=""
            // download="resume.pdf"
            className="btn btn-outline-warning my-3"
          >
            Download Resume
          </a>
        </div>
        <div className="right">
          <div className="img" data-aos="fade-up-left" data-aos-duration="1000">
            <img src={`/assets/${hero.imgSrc}`} alt="hero" />
          </div>
        </div>
      </div> */}
    </>
  );
};

export default About;
