import React from "react";
import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { About } from "../components/About";
import { Skills } from "../components/Skills";
import { Project } from "../components/Project";
import { ProblemSolving } from "../components/ProblemSolving";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";

export const Home = () => {
  return (
    <>
      <div
        className="min-h-screen bg-black 
bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)]
bg-[size:40px_40px] overflow-x-hidden"
      >
        <Navbar />
        <HeroSection/>
        <About/>
        <Skills/>
        <Project/>
        <ProblemSolving/>
       <Contact/>
       <Footer/>
      </div>
    </>
  );
};
