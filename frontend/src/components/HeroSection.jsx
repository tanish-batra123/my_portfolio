import React from "react";
import { TypeAnimation } from "react-type-animation";
import { CmdHero } from "./Cmd";
import { motion } from "motion/react";

export const HeroSection = () => {
  const handleClick=(id)=>{
     document.getElementById(id)?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
  }
  return (
    <div className="flex justify-around gap-7 items-center px-20 py-16 flex-col md:flex-row">
      <div className="max-w-xl space-y-6">
        <span className="text-black text-sm border-3 border-white bg-blue-400 px-3 py-1 inline-block">
          // available for work
        </span>

        <div className="flex flex-col text-5xl md:text-7xl font-bold leading-tight">
          <span className="text-white">Hi, I'm</span>
          <motion.span
            whileHover={{
              scale: 1.03,
              x: [-2, 2, -2, 2, 0],
            }}
            transition={{ duration: 0.25 }}
            className="bg-[#58df3d] text-black px-3 py-2 inline-block w-fit "
          >
            Tanish Batra.
          </motion.span>
        </div>

        <div className="text-gray-400 text-lg leading-relaxed max-w-lg">
          &gt;{" "}
          {
            <TypeAnimation
              sequence={[
                "Full Stack Developer",
                1500,
                "Problem Solver",
                1500,
                "I build efficient, scalable, user-centric applications.",
                1500,
                "Turning ideas into reality through clean and optimized code.",
                1500,
              ]}
              speed={60}
              repeat={Infinity}
              className="text-gray-400 text-lg "
            />
          }
        </div>

        <div className=" relative  flex gap-6 mt-6">
             
          <div
            className="bg-[#39FF14] text-black px-6 py-2 cursor-pointer hover:opacity-80 transition border-3 border-white
          font-bold
          "
          
          onClick={()=>{handleClick("projects")}}
          >
            ./view_projects
          </div>

          <div className="border border-gray-400 px-6 py-2 text-gray-300 cursor-pointer hover:border-white hover:text-white transition"
        
          onClick={()=>{handleClick("contact")}}
          >
            ./contact_me
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="absolute top-3 left-3 w-full h-full bg-[#39FF14] -z-10"></div>
        {<CmdHero />}
      </div>
    </div>
  );
};
