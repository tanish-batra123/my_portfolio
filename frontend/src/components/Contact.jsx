import { motion } from "motion/react";
import React from "react";
import { ContactCard } from "./Card";

export const Contact = () => {
  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
      viewport={{ once: true }}
      className="max-w-7xl mx-auto px-4 md:px-8 py-20"
    >
      {/* SECTION HEADER */}
      <div className="flex items-center gap-3 md:gap-6 mb-12">
        <span className="text-[#39FF14] font-mono text-lg md:text-2xl shrink-0">
          05.
        </span>

        <h2 className="text-4xl md:text-6xl font-bold text-white shrink-0">
          Contact
        </h2>

        <div className="h-[2px] bg-white flex-1" />
      </div>

      
      <div className="grid grid-cols-1 lg:grid-cols-[1.8fr_1fr] gap-8">
        {/* LEFT TERMINAL */}
        <div className="relative">
          
         

          <div
            className="
              relative
             bg-[#0d0d0d] 
              border-2 md:border-4 border-white
              transition-all duration-300
              hover:-translate-x-1
              hover:-translate-y-1
            "
          >
            {/* TERMINAL HEADER */}
            <div className="border-b-2 md:border-b-4 border-white px-4 md:px-5 py-3 flex items-center gap-3">
              <span className="w-3 h-3 md:w-4 md:h-4 bg-red-500 border border-white rounded-full" />
              <span className="w-3 h-3 md:w-4 md:h-4 bg-yellow-400 border border-white rounded-full" />
              <span className="w-3 h-3 md:w-4 md:h-4 bg-green-500 border border-white rounded-full" />

              <span className="ml-3 md:ml-6 text-gray-400 font-mono text-xs md:text-base">
                send_message.sh
              </span>
            </div>

            <div className="p-4 sm:p-6 md:p-8">
              <ContactCard />
            </div>
          </div>
        </div>

        {/* RIGHT TERMINAL */}
        <div
          className="
           bg-[#0d0d0d] 
            border-2 md:border-4 border-white
            h-fit
            transition-all duration-300
            hover:-translate-x-1
            hover:-translate-y-1
          "
        >
          {/* HEADER */}
          <div className="border-b-2 md:border-b-4 border-white px-4 md:px-5 py-3">
            <span className="font-mono text-gray-400 text-sm md:text-base">
              contact_info.json
            </span>
          </div>

          {/* CONTENT */}
          <div className="p-5 md:p-6 font-mono">
            <div className="space-y-5 text-sm md:text-base break-all">
              <p>
                <span className="text-yellow-400">"email"</span>
                <span className="text-white">:</span>{" "}
                <a
                  href="mailto:tanishbatra397@gmail.com"
                  className="text-cyan-400 hover:text-[#39FF14]"
                >
                  "tanishbatra397@gmail.com"
                </a>
              </p>

              <p>
                <span className="text-yellow-400">"github"</span>
                <span className="text-white">:</span>{" "}
                <a
                  href="https://github.com/Tanish-Batra"
                  target="_blank"
                  rel="noreferrer"
                  className="text-cyan-400 hover:text-[#39FF14]"
                >
                  "github.com/Tanish-Batra"
                </a>
              </p>

              <p>
                <span className="text-yellow-400">"linkedin"</span>
                <span className="text-white">:</span>{" "}
                <a
                  href="https://www.linkedin.com/in/tanish-batra-19b261328/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-cyan-400 hover:text-[#39FF14]"
                >
                  "linkedin.com/Tanish-Batra"
                </a>
              </p>
            </div>

            {/* STATUS */}
            <div className="mt-8 pt-6 border-t border-white/20">
              <p className="text-[#39FF14] text-sm md:text-base">
                ● Available for freelance & internships
              </p>
            </div>

            {/* TERMINAL FOOTER */}
            <div className="pt-8 font-mono text-sm md:text-base">
              <span className="text-[#39FF14]">$</span>{" "}
              <span className="text-white">
                waiting_for_opportunity.sh
              </span>

              <span className="inline-block w-2 h-5 bg-white ml-1 animate-pulse align-middle" />
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};