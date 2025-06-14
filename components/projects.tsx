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
    { id: "AI", label: "AI" },
    { id: "web3", label: "Web3" },
  ]

  const projects = [
    {
      id: 1,
      title: "Wear Plakkies",
      description:
        "Development and Maintenance of e-commerce Website",
      image: "/images/projects/wearplakkies.png",
      category: "web",
      tags: ["React", "Next.js", "Tailwind CSS", "Shopify"],
      demoLink: "https://wearplakkies.com/",
      githubLink: "#",
    },
    {
      id: 2,
      title: "AI Voice Chatbot",
      description:
        "Implemented advanced algorithms for TTS and STT to achieve human-like voice quality and accuracy.",
      image: "/images/projects/voice_chatbot.png",
      category: "AI",
      tags: ["Speech Synthesis", "API Integration", "Artificial Intelligence", "Python", "Chatbot"],
      demoLink: "https://smart.sista.ai",
      githubLink: "#",
    },
    {
      id: 3,
      title: "Laxmi Hyundai - Chatbot",
      description:
        "Chatbot integration for a website, it improves the interaction with site visitors",
      image: "/images/projects/chatbot.png",
      category: "web",
      tags: ["Chatbot", "OpenAI", "GPT-4o", "React"],
      demoLink: "https://laxmihyundai.com/",
      githubLink: "#",
    },
    {
      id: 4,
      title: "Learning Management System",
      description:
        "Developed a comprehensive Learning Management System (LMS) using Next.js and TypeScript to deliver a seamless and scalable platform.",
      image: "/images/projects/lms.jpg",
      category: "backend",
      tags: ["Next.js", "React", "TypeScript", "NodeJS Framework", "Redux"],
      demoLink: "https://www.kitahub.io/",
      githubLink: "#",
    },
    {
      id: 5,
      title: "FlirtBox",
      description:
        "Flirt Box is a matchmaking app that combines audio rooms and live streams, offering a unique platform for real-time audience interaction through live audio.",
      image: "/images/projects/FlirtBox.jpg",
      category: "mobile",
      tags: ["Flutter", "React Native", "Dart", "Firebase", "PostgreSQL"],
      demoLink: "https://apkpure.com/flirtbox/kg.megacom.flirtbox/download/1.0.35",
      githubLink: "#",
    },
    {
      id: 6,
      title: "Tesla Website",
      description:
        "An interactive dashboard for financial data visualization, portfolio management, and investment tracking with real-time updates.",
      image: "/images/projects/tesla.jpg",
      category: "web",
      tags: ["React", "Next.js", "TypeScript", "TailwindCSS", "ExpressJS"],
      demoLink: "https://www.tesla.com",
      githubLink: "#",
    },
    {
      id: 7,
      title: "RAE Engineering - Web3",
      description:
        "At RAE Engineering, our focus is on determining and managing the integrity of pressure equipment, pressure piping, tanks and related mechanical equipment. ",
      image: "/images/projects/RAE.png",
      category: "web3",
      tags: ["Web3", "Next.js", "TypeScript", "TailwindCSS", "ExpressJS"],
      demoLink: "https://raeengineering.ca",
      githubLink: "#",
    },
    {
      id: 8,
      title: "MCP for Memorization - Mem0.ai",
      description:
        "Mem0 remembers user preferences, adapts to individual needs, and continuously improves over time. ",
      image: "/images/projects/Mem0.png",
      category: "AI",
      tags: ["LangFlow", "Next.js", "AWS", "Vercel"],
      demoLink: "https://mem0.ai/",
      githubLink: "#",
    },
      {
        id: 9,
        title: "Thealtmanbrothers - Real Estate",
        description:
          "The Altman Brothers is a real estate company that provides a wide range of services to their clients. ",
        image: "/images/projects/thealtmanbrothers.png",
        category: "web",
        tags: ["React", "Next.js", "Tailwind CSS", "Hubspot"],
        demoLink: "https://www.thealtmanbrothers.com/",
        githubLink: "#",
      },
      {
        id: 10,
        title: "Shopify Store",
        description:
          "This is a popular template I use for my clients. I can recreate this store with your colors, font, images, branding, etc ",
        image: "/images/projects/transport.png",
        category: "web",
        tags: ["React", "Next.js", "Tailwind CSS", "Shopify", "Shopify Theme"],
        demoLink: "https://transport-store.myshopify.com/",
        githubLink: "#",
      },
      {
        id: 11,
        title: "E-Commerce Platform",
        description:
          "As a full-stack developer, I've meticulously crafted this premium WordPress WooCommerce website to deliver an exceptional shopping experience ",
        image: "/images/projects/ecommerce.jpg",
        category: "web",
        tags: ["Ecommerce", "Bootstrap", "WordPress", "JavaScript", "Next.js"],
        demoLink: "https://wovenbyrd.com/?srsltid=AfmBOooK3lk69xv8v0lfLxqYpK2KCeTTJoAisP9FuhOZG94l0Hlft6_1",
        githubLink: "#",
      },
      {
        id: 12,
        title: "Real-Time Stock Market Analysis and Prediction System",
        description:
          "This project is a sophisticated real-time stock market analysis and prediction system that leverages AI agents",
        image: "/images/projects/ml.jpg",
        category: "web",
        tags: ["OpenAPI", "Python", "AI Agent Development", "LLaMA", "RAG"],
        demoLink: "https://www.thealtmanbrothers.com/",
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

