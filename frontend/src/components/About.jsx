import { motion } from "motion/react";
import React from "react";
import { CmdSection } from "./Cmd";

export const About = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
        viewport={{ once: true }}
      >
        <CmdSection  id="about" number="01." title=".about">
          <div className="font-mono">
            <p>$ cat about.md</p>

            <p>
              → Full-stack developer building scalable and performant web
              applications.
            </p>
            <p>
              → Strong problem-solving skills backed by Data Structures &
              Algorithms.
            </p>
            <p>
              → Learning System Design, distributed architectures, and AI
              technologies.
            </p>
          </div>
        </CmdSection>
      </motion.div>
    </>
  );
};
