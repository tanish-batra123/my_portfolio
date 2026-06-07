import React from "react";
import { SkillCard } from "./Card";
import { CmdSection } from "./Cmd";
import { motion } from "motion/react";


export const Skills = () => {
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
        <CmdSection id={"skills"} number="02." title=".skills">
          <div className="grid md:grid-cols-3 gap-6">
            <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
        viewport={{ once: true }}
      >
        <SkillCard title="languages" skills={["C++", "JavaScript","Java"]} />
      </motion.div>
            
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
        viewport={{ once: true }}
      >
       <SkillCard
              title="frontend"
              skills={["React.js", "Next.js", "Tailwind CSS", "HTML", "CSS"]}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
        viewport={{ once: true }}
      >
      <SkillCard title="backend" skills={["Node.js", "Express.js"]} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
        viewport={{ once: true }}
      >
      <SkillCard
              title="Database"
              skills={["MongoDb", "Postgress", "redis"]}
            />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
        viewport={{ once: true }}
      >
      <SkillCard title="Deployment" skills={["Docker", "CI/CD"]} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
        viewport={{ once: true }}
      >
      <SkillCard
              title="tools"
              skills={["Git", "GitHub", "Postman", "Linux"]}
            />
      </motion.div>
             
          </div>
        </CmdSection>
      </motion.div>
    </>
  );
};
