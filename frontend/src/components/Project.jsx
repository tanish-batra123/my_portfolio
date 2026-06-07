import React from "react";
import { CmdSection } from "./Cmd";
import { ProjectCard } from "./Card";
import { motion } from "motion/react";

export const Project = () => {
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
        <CmdSection  id={"projects"} number={"03."} title={".Projects"}>

          <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
        viewport={{ once: true }}
        
      >
        <ProjectCard
            featured
            name="Fixora"
            status="In Development"
            stack={[
              "React",
              "Node.js",
              "MongoDB",
              "Redis",
              "RabbitMQ",
              "WebSockets",
            ]}
            features={[
              "Location Based Matching",
              "Real-Time Updates",
              "Payment Integration",
              "Worker Registration",
              "Urgent Service Discovery",
            ]}
            focus={["Scalability", "Microservices", "Real World Problem"]}
            engineeringFocus={[
              "Event Driven Architecture",
              "Caching",
              "System Design",
              "Performance",
            ]}
            github=""
            demo=""
          />
      </motion.div>
          
          <motion.div className="grid md:grid-cols-2 gap-8 mt-5">

            <ProjectCard
            name="Coursy"
            status="Completed"
            stack={[
              "React",
              "Node.js",
              "Express",
              "MongoDB",
              "Razorpay",
              "AI APIs",
            ]}
            features={[
              "Course Creation & Management",
              "Lecture Upload & Editing",
              "AI Search",
              "AI Course Summaries",
              "AI Quiz Generation",
              "Student Ratings & Reviews",
              "Teacher Analytics Dashboard",
              "Secure Payment Processing",
            ]}
            focus={["EdTech", "AI Integration", "User Experience"]}
            engineeringFocus={[
              "Role Based Access Control",
              "Payment Systems",
              "Analytics",
              "Performance Optimization",
            ]}
            github="https://github.com/tanish-batra123/AiLmsProject"
            demo="https://ailmsproject-1.onrender.com"
          />

          <ProjectCard
            name="PrepPilot"
            status="Completed"
            stack={["React", "Node.js", "Express", "MongoDB", "AI APIs"]}
            features={[
              "AI Mock Interviews",
              "Real-Time Question Generation",
              "AI Feedback & Evaluation",
              "Interview Performance Analysis",
              "Role-Specific Practice Sessions",
              "Progress Tracking",
            ]}
            focus={["AI", "Interview Preparation", "Personalized Learning"]}
            engineeringFocus={[
              "Prompt Engineering",
              "AI Workflow Design",
              "User Analytics",
              "Scalable Backend APIs",
            ]}
            github="https://github.com/tanish-batra123/PrepPliot"
            
          />

          </motion.div>
          
        </CmdSection>
      </motion.div>
    </>
  );
};
