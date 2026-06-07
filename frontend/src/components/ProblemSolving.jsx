import { motion } from 'motion/react'
import React from 'react'
import { CmdSection } from './Cmd'
import { ProfileCard } from './Card'

export const ProblemSolving = () => {
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
    <CmdSection id="experience" number="04." title="problem-solving">
  <div className="grid md:grid-cols-2 gap-6">

     <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            viewport={{ once: true }}
    >
      <ProfileCard
      platform="LeetCode"
      solved="350+"
      link="https://leetcode.com/u/Tanish9667256/"
      img="/LeetCode_logo_black.png"
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
      <ProfileCard
      platform="GeeksforGeeks"
      solved="120+"
      link="https://www.geeksforgeeks.org/profile/tanishbaj6j7?tab=activity"
      img="\GeeksForGeeks_logo.png"
    />
    </motion.div>

  </div>
</CmdSection>

    </motion.div>
    </>
  )
}
