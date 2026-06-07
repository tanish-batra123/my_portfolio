import React, { useState } from "react";
import { CommandPalette } from "./commandPlaette";


export const Navbar = () => {
  const[open,setopen]=useState(false);
  const handleClick=(id)=>{
     document.getElementById(id)?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
  }

  
  return (
    <>
      <div className="flex items-center justify-between px-6 py-3 border-b-4 border-white bg-black font-mono text-sm ">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="bg-[#39FF14] text-black px-2 py-[2px] font-bold border-3 border-white">
            $
          </span>
          <span className="text-white tracking-wide font-bold">tanish.dev</span>
        </div>

        {/* Center Links */}
        <div className="hidden md:flex items-center gap-8 text-white text-bold">
          {["about", "skills", "projects", "experience", "contact"].map(
            (item) => (
              <span
                key={item}
                className="cursor-pointer hover:text-[#39FF14] transition duration-200"
                onClick={()=>{handleClick(item)}}
              >
                ./{item}
              </span>
            ),
          )}
        </div>

        {/* Right Command Box */}
        <div className="relative inline-block group cursor-pointer" onClick={()=>{setopen(true)}}>
          <div className="absolute inset-0 bg-[#39FF14] opacity-0 group-hover:opacity-100 transition duration-200 translate-x-1 translate-y-1"></div>

          <div className="relative border-3 border-white px-4 py-1 bg-black text-gray-300 flex items-center gap-2 ">
            <span>press</span>
            <kbd className="border-3 border-white px-1 bg-black">Ctrl</kbd>
            <kbd className="border-3 border-white  px-1 bg-black">K</kbd>
          </div>
        </div>
      </div>
         {open && <CommandPalette onClose={() => setopen(false)} />}
    </>
  );
};
