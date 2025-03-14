"use client"

import { motion } from "framer-motion"
import { CheckCircle } from "lucide-react"
import AboutImage from "./about-image"

export default function About() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.5,
      },
    }),
  }

  const highlights = [
    "7+ years of professional development experience",
    "Expertise in modern JavaScript frameworks",
    "Strong backend architecture skills",
    "DevOps and cloud infrastructure knowledge",
    "Team leadership and mentoring experience",
    "Agile development methodology advocate",
  ]

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 glow-text">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Get to know more about my background, experience, and what drives me as a developer.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <AboutImage />

          <div className="space-y-6">
            <motion.h3
              custom={0}
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-2xl font-bold font-heading"
            >
              Senior Full Stack Developer
            </motion.h3>

            <motion.p
              custom={1}
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-gray-400"
            >
              I am a passionate full stack developer with over a decade of experience building robust, scalable, and
              user-friendly applications. My journey in software development has equipped me with a diverse skill set
              spanning frontend, backend, DevOps, and architecture design.
            </motion.p>

            <motion.p
              custom={2}
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-gray-400"
            >
              I thrive in collaborative environments where I can leverage my technical expertise and leadership skills
              to deliver exceptional products. My approach combines cutting-edge technologies with best practices to
              create solutions that not only meet but exceed client expectations.
            </motion.p>

            <motion.div
              custom={3}
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6"
            >
              {highlights.map((item, index) => (
                <div key={index} className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-300">{item}</span>
                </div>
              ))}
            </motion.div>

            <motion.div
              custom={4}
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="pt-4"
            >
              <div className="glass-effect p-6 rounded-xl border border-blue-500/20">
                <p className="text-gray-300 italic">
                  "I believe that great software is not just about code, but about creating experiences that solve real
                  problems and delight users. My mission is to build technology that makes a positive impact."
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

