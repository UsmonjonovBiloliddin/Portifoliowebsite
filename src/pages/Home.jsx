import React from "react";
import Hero from "../components/Headermain/Headermain";
import About from "../components/About/About";
import Portifolio from "../components/Portiolio/Portifolio";
import Skills from "../components/Skills/Skills";
import Resume from "../components/Resume/Resume";
import Contact from "../components/Conatct/Contact";

const Home = () => {


  return (
    <div className="Home ">
      <Hero />
      <About />
      <Resume/>
      <Portifolio />
      <Skills/>
      <Contact/>
    </div>
  );
};

export default Home;
