"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ExternalLink, Github, ArrowRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"
import ProjectPlaceholder from "./project-placeholder"

interface ProjectProps {
  title: string
  description: string
  image?: string
  tags: string[]
  demoLink: string
  githubLink: string
  index: number
}

export default function ProjectCard({ title, description, image, tags, demoLink, githubLink, index }: ProjectProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [imageError, setImageError] = useState(false)

  const handleImageError = () => {
    setImageError(true)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass-effect rounded-xl overflow-hidden group border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden h-48 sm:h-56 md:h-64">
        {image && !imageError ? (
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            onError={handleImageError}
          />
        ) : (
          <ProjectPlaceholder title={title} tags={tags} />
        )}

        <div
          className={`absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4 transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="flex gap-3">
            <Link
              href={demoLink}
              target="_blank"
              className="flex items-center gap-1 px-3 py-1.5 bg-black/50 border border-white/20 text-white text-sm rounded-md hover:bg-black/70 transition-colors"
            >
              <ExternalLink className="h-3.5 w-3.5" /> Demo
            </Link>
            {/* <Link
              href={githubLink}
              target="_blank"
              className="flex items-center gap-1 px-3 py-1.5 bg-black/50 border border-white/20 text-white text-sm rounded-md hover:bg-black/70 transition-colors"
            >
              <Github className="h-3.5 w-3.5" /> Code
            </Link> */}
          </div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-400 text-sm mb-4 line-clamp-3">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <Badge
              key={tag}
              variant="outline"
              className="bg-blue-900/30 text-blue-300 border-blue-500/30 hover:border-blue-500/50"
            >
              {tag}
            </Badge>
          ))}
        </div>
        <Link
          href={demoLink}
          className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors group/link"
        >
          View Project
          <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1" />
        </Link>
      </div>
    </motion.div>
  )
}

