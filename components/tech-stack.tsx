"use client"

import { motion } from "framer-motion"
import Image from "next/image"

interface TechItem {
  name: string
  icon: string
  category: "frontend" | "backend" | "database" | "devops" | "other"
}

const techStack: TechItem[] = [
  // Frontend
  { name: "React", icon: "/images/tech/react.png", category: "frontend" },
  { name: "Vue.js", icon: "/images/tech/vue.png", category: "frontend" },
  { name: "Angular", icon: "/images/tech/angular.png", category: "frontend" },
  { name: "Next.js", icon: "/images/tech/nextjs.png", category: "frontend" },
  { name: "TypeScript", icon: "/images/tech/typescript.png", category: "frontend" },
  { name: "Tailwind CSS", icon: "/images/tech/tailwind.png", category: "frontend" },

  // Backend
  { name: "Node.js", icon: "/images/tech/nodejs.png", category: "backend" },
  { name: "Python", icon: "/images/tech/python.png", category: "backend" },
  { name: "Java", icon: "/images/tech/java.png", category: "backend" },
  { name: "C#/.NET", icon: "/images/tech/csharp.png", category: "backend" },
  { name: "GraphQL", icon: "/images/tech/graphql.png", category: "backend" },
  { name: "REST API", icon: "/images/tech/rest.png", category: "backend" },

  // Database
  { name: "MongoDB", icon: "/images/tech/mongodb.png", category: "database" },
  { name: "PostgreSQL", icon: "/images/tech/postgresql.png", category: "database" },
  { name: "MySQL", icon: "/images/tech/mysql.png", category: "database" },
  { name: "Redis", icon: "/images/tech/redis.png", category: "database" },
  { name: "Firebase", icon: "/images/tech/firebase.png", category: "database" },

  // DevOps
  { name: "Docker", icon: "/images/tech/docker.png", category: "devops" },
  { name: "Kubernetes", icon: "/images/tech/kubernetes.png", category: "devops" },
  { name: "AWS", icon: "/images/tech/aws.png", category: "devops" },
  { name: "CI/CD", icon: "/images/tech/cicd.png", category: "devops" },
  { name: "Git", icon: "/images/tech/git.png", category: "devops" },
]

export default function TechStack() {
  return (
    <div className="py-12">
      <h3 className="text-2xl font-bold mb-8 text-center">Technologies I Work With</h3>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6">
        {techStack.map((tech, index) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className="flex flex-col items-center gap-3 p-4 glass-effect rounded-lg hover:scale-105 transition-all duration-300 group"
          >
            <div className="relative w-12 h-12 md:w-16 md:h-16">
              <Image
                src={tech.icon || "/placeholder.svg"}
                alt={tech.name}
                fill
                className="object-contain filter drop-shadow-[0_0_8px_rgba(59,130,246,0.5)] group-hover:drop-shadow-[0_0_12px_rgba(59,130,246,0.7)] transition-all duration-300"
              />
            </div>
            <span className="text-xs md:text-sm text-gray-300 group-hover:text-white transition-colors duration-300">
              {tech.name}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

