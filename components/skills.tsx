"use client"

import { motion } from "framer-motion"
import { Code2, Database, Server, Globe, Layers, Cpu, Cloud, GitBranch, Terminal, Smartphone } from "lucide-react"

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <Code2 className="h-6 w-6" />,
      skills: [
        { name: "React", level: 95 },
        { name: "Vue.js", level: 90 },
        { name: "Angular", level: 85 },
        { name: "Next.js", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Tailwind CSS", level: 95 },
      ],
    },
    {
      title: "Backend",
      icon: <Server className="h-6 w-6" />,
      skills: [
        { name: "Node.js", level: 95 },
        { name: "Python", level: 85 },
        { name: "Java", level: 80 },
        { name: "C#/.NET", level: 85 },
        { name: "GraphQL", level: 90 },
        { name: "REST API", level: 95 },
      ],
    },
    {
      title: "Database",
      icon: <Database className="h-6 w-6" />,
      skills: [
        { name: "MongoDB", level: 90 },
        { name: "PostgreSQL", level: 95 },
        { name: "MySQL", level: 90 },
        { name: "Redis", level: 85 },
        { name: "Firebase", level: 90 },
        { name: "Elasticsearch", level: 80 },
      ],
    },
    {
      title: "DevOps",
      icon: <Cloud className="h-6 w-6" />,
      skills: [
        { name: "Docker", level: 90 },
        { name: "Kubernetes", level: 85 },
        { name: "AWS", level: 90 },
        { name: "CI/CD", level: 95 },
        { name: "Terraform", level: 80 },
        { name: "Monitoring", level: 85 },
      ],
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-20 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-60 h-60 bg-blue-700/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 glow-text">
            My <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency levels across various technologies and
            domains.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="glass-effect rounded-xl p-6 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 group"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-blue-500/20 text-blue-400 group-hover:text-blue-300 group-hover:bg-blue-500/30 transition-all duration-300">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>

              <motion.div
                variants={container}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-4"
              >
                {category.skills.map((skill) => (
                  <motion.div key={skill.name} variants={item} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-sm text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="h-2 w-full bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="h-full bg-gradient-to-r from-blue-600 to-blue-400 rounded-full"
                      ></motion.div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 glass-effect rounded-xl p-6 border border-blue-500/20"
        >
          <h3 className="text-xl font-bold mb-6">Other Technologies & Tools</h3>
          <div className="flex flex-wrap gap-3">
            {[
              { name: "Git", icon: <GitBranch className="h-4 w-4" /> },
              { name: "Webpack", icon: <Layers className="h-4 w-4" /> },
              { name: "Vite", icon: <Terminal className="h-4 w-4" /> },
              { name: "Jest", icon: <Terminal className="h-4 w-4" /> },
              { name: "Cypress", icon: <Terminal className="h-4 w-4" /> },
              { name: "Redux", icon: <Layers className="h-4 w-4" /> },
              { name: "Sass", icon: <Code2 className="h-4 w-4" /> },
              { name: "WebSockets", icon: <Globe className="h-4 w-4" /> },
              { name: "Microservices", icon: <Cpu className="h-4 w-4" /> },
              { name: "PWA", icon: <Smartphone className="h-4 w-4" /> },
              { name: "Figma", icon: <Code2 className="h-4 w-4" /> },
              { name: "Agile", icon: <GitBranch className="h-4 w-4" /> },
              { name: "AI Integration", icon: <GitBranch className="h-4 w-4" /> },
              { name: "Chatbot", icon: <GitBranch className="h-4 w-4" /> },
            ].map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="px-4 py-2 rounded-full bg-blue-900/30 border border-blue-500/30 flex items-center gap-2 text-sm hover:bg-blue-900/40 hover:border-blue-500/50 transition-all duration-300 group"
              >
                <span className="text-blue-400 group-hover:text-blue-300 transition-colors duration-300">
                  {tech.icon}
                </span>
                <span>{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

