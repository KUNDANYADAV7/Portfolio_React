import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import "bootstrap/dist/css/bootstrap.css";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Aos from "aos";
import "aos/dist/aos.css";
import About from "./components/About";

const App = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <Navbar />
      <div className="container">
        <Home />
        <About />
        {/* <Experience /> */}
        <Skills />
        <Projects />
        <Contact />
      </div>
    </>
  );
};

export default App;