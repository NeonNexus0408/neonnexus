"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import ProjectCard from "./project-card"

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("all")

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "web", label: "Web Apps" },
    { id: "mobile", label: "Mobile" },
    { id: "backend", label: "Backend" },
  ]

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A full-featured e-commerce platform with product management, cart functionality, payment processing, and order tracking.",
      image: "/images/projects/ecommerce.jpg",
      category: "web",
      tags: ["React", "Node.js", "MongoDB", "Stripe", "Redux"],
      demoLink: "#",
      githubLink: "#",
    },
    {
      id: 2,
      title: "AI Voice Chatbot",
      description:
        "A real-time messaging platform with features like user authentication, private messaging, group chats, and file sharing.",
      image: "/images/projects/voice_chatbot.jpg",
      category: "web",
      tags: ["Socket.io", "React", "Express", "MongoDB", "JWT"],
      demoLink: "#",
      githubLink: "#",
    },
    {
      id: 3,
      title: "AI Chatbot",
      description:
        "A comprehensive project management tool with task tracking, team collaboration, deadline management, and reporting features.",
      image: "/images/projects/chatbot.jpg",
      category: "web",
      tags: ["Vue.js", "Firebase", "Tailwind CSS", "Vuex"],
      demoLink: "#",
      githubLink: "#",
    },
    {
      id: 4,
      title: "Learning Management System",
      description:
        "A mobile application for tracking workouts, nutrition, and progress with personalized recommendations and social features.",
      image: "/images/projects/lms.jpg",
      category: "mobile",
      tags: ["React Native", "GraphQL", "Node.js", "MongoDB"],
      demoLink: "#",
      githubLink: "#",
    },
    {
      id: 5,
      title: "Fitness Mobile App",
      description:
        "A headless CMS API with content modeling, versioning, localization, and multi-channel publishing capabilities.",
      image: "/images/projects/fitness.jpg",
      category: "backend",
      tags: ["Node.js", "Express", "PostgreSQL", "Redis", "Docker"],
      demoLink: "#",
      githubLink: "#",
    },
    {
      id: 6,
      title: "Telsa Website",
      description:
        "An interactive dashboard for financial data visualization, portfolio management, and investment tracking with real-time updates.",
      image: "/images/projects/telsa.jpg",
      category: "web",
      tags: ["Angular", "D3.js", "TypeScript", "Node.js", "MongoDB"],
      demoLink: "#",
      githubLink: "#",
    },
  ]

  const filteredProjects =
    activeCategory === "all" ? projects : projects.filter((project) => project.category === activeCategory)

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 glow-text">
            My <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore a selection of my recent work showcasing my skills and expertise across different technologies and
            domains.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              onClick={() => setActiveCategory(category.id)}
              className={`rounded-full px-6 ${
                activeCategory === category.id
                  ? "bg-blue-600 hover:bg-blue-700 text-white"
                  : "border-blue-500/50 text-blue-400 hover:text-blue-300 hover:bg-blue-900/20"
              } transition-all duration-300`}
            >
              {category.label}
            </Button>
          ))}
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                image={project.image}
                tags={project.tags}
                demoLink={project.demoLink}
                githubLink={project.githubLink}
                index={index}
              />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

