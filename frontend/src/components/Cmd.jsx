import { motion } from "motion/react";
import { TypeAnimation } from "react-type-animation";

export const CmdHero = () => {
  return (
   <motion.div
  initial={{ opacity: 0, x: 40 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  className="relative w-full "
>
 
  <div className="absolute inset-0 translate-x-3 translate-y-3 border-2 border-lime-500 bg-cyan-400"  />

  {/* Terminal */}
  <div className="relative overflow-hidden border-3 border-white bg-[#0d0d0d]  w-[300px] md:w-[500px]">
    {/* Header */}
    <div className="flex items-center gap-2 border-b-3 border-white px-3 py-2">
      <div className="h-3 w-3 rounded-full bg-red-500" />
      <div className="h-3 w-3 rounded-full bg-yellow-400" />
      <div className="h-3 w-3 rounded-full bg-lime-500" />

      <span className="ml-3 text-xs text-gray-400">
        bash ~ ~/tanish
      </span>
    </div>

    {/* Content */}
    <div className="min-h-[220px] md:min-h-[280px] p-3 md:p-4 font-mono text-xs sm:text-sm leading-5 sm:leading-6 overflow-x-auto">
      <TypeAnimation
        sequence={[
            "$ whoami",
              1000,
              "$ whoami\n\ntanish_batra",
              1000,
              "$ whoami\n\ntanish_batra\n\n$ cat role.txt",
              1000,
              "$ whoami\n\ntanish_batra\n\n$ cat role.txt\n\nFull Stack Developer",
              1000,
              "$ whoami\n\ntanish_batra\n\n$ cat role.txt\n\nFull Stack Developer\n\n$ ls skills/",
              1000,
              "$ whoami\n\ntanish_batra\n\n$ cat role.txt\n\nFull Stack Developer\n\n$ ls skills/\n\nlanguages frontend backend databases tools",
              1000,
              "$ whoami\n\ntanish_batra\n\n$ cat role.txt\n\nFull Stack Developer\n\n$ ls skills/\n\nlanguages frontend backend databases tools\n\n$ npm run dev",
              1000,
              "$ whoami\n\ntanish_batra\n\n$ cat role.txt\n\nFull Stack Developer\n\n$ ls skills/\n\nlanguages frontend backend databases tools\n\n$ npm run dev\n\n▲ ready in 42ms — let's build something.",
        ]}
        speed={70}
        cursor
        style={{
          display: "block",
          width: "100%",
          whiteSpace: "pre-line",
          color: "#39ff14",
        }}
      />
    </div>
  </div>
</motion.div>
  );
};

export const CmdSection = ({
  id,
  number,
  title,
  children,
}) => {
  return (
    <section className="px-4 py-25 mx-9" id={id}>
      <div className="flex justify-center gap-4 mb-6 ">
        <span className="text-[#39FF14] font-mono">
          {number}
        </span>

        <h2 className=" tex-5xl md:text-6xl font-bold text-white">
          /{title}
        </h2>

        <div className="flex-1 h-[2px] bg-white" />
      </div>

      <div className="border-4 border-white bg-[#0d0d0d] p-3">
        
        <div className="border-b border-white px-4 py-3 flex gap-3">
          <div className="w-3 h-3 bg-red-500 rounded-full" />
          <div className="w-3 h-3 bg-yellow-500 rounded-full" />
          <div className="w-3 h-3 bg-green-500  rounded-full" />

          <span className="ml-4 text-gray-400 font-mono">
            cat {title}.md
          </span>
        </div>

        {/* content */}
        <div className="p-8 text-white flex-col md:flex">
          
          {children}
        </div>
      </div>
    </section>
  );
};