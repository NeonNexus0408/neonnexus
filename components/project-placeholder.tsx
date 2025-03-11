"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

interface ProjectPlaceholderProps {
  title: string
  tags: string[]
}

export default function ProjectPlaceholder({ title, tags }: ProjectPlaceholderProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight

    // Draw background
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
    gradient.addColorStop(0, "#0f172a")
    gradient.addColorStop(1, "#1e293b")
    ctx.fillStyle = gradient
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    // Draw grid lines
    ctx.strokeStyle = "rgba(59, 130, 246, 0.1)"
    ctx.lineWidth = 1

    // Horizontal lines
    for (let y = 20; y < canvas.height; y += 20) {
      ctx.beginPath()
      ctx.moveTo(0, y)
      ctx.lineTo(canvas.width, y)
      ctx.stroke()
    }

    // Vertical lines
    for (let x = 20; x < canvas.width; x += 20) {
      ctx.beginPath()
      ctx.moveTo(x, 0)
      ctx.lineTo(x, canvas.height)
      ctx.stroke()
    }

    // Draw UI elements

    // Header
    ctx.fillStyle = "rgba(59, 130, 246, 0.2)"
    ctx.fillRect(20, 20, canvas.width - 40, 40)

    // Sidebar
    ctx.fillStyle = "rgba(59, 130, 246, 0.15)"
    ctx.fillRect(20, 80, 100, canvas.height - 100)

    // Content area
    ctx.fillStyle = "rgba(255, 255, 255, 0.05)"
    ctx.fillRect(140, 80, canvas.width - 160, canvas.height - 100)

    // Draw title
    ctx.font = "16px sans-serif"
    ctx.fillStyle = "rgba(59, 130, 246, 0.8)"
    ctx.fillText(title, canvas.width / 2 - ctx.measureText(title).width / 2, 45)

    // Draw tags as UI elements
    let tagX = 160
    const tagY = 100

    tags.slice(0, 3).forEach((tag) => {
      const tagWidth = ctx.measureText(tag).width + 20

      // Tag background
      ctx.fillStyle = "rgba(59, 130, 246, 0.3)"
      ctx.fillRect(tagX, tagY, tagWidth, 24)

      // Tag text
      ctx.fillStyle = "rgba(255, 255, 255, 0.8)"
      ctx.fillText(tag, tagX + 10, tagY + 16)

      tagX += tagWidth + 10
    })

    // Draw some UI elements

    // Buttons
    ctx.fillStyle = "rgba(59, 130, 246, 0.4)"
    ctx.fillRect(160, 150, 100, 30)
    ctx.fillRect(280, 150, 100, 30)

    // Content blocks
    ctx.fillStyle = "rgba(255, 255, 255, 0.1)"
    ctx.fillRect(160, 200, canvas.width - 200, 40)
    ctx.fillRect(160, 260, canvas.width - 200, 40)
    ctx.fillRect(160, 320, canvas.width - 200, 40)

    // Add some glow
    ctx.shadowBlur = 20
    ctx.shadowColor = "rgba(59, 130, 246, 0.5)"
    ctx.beginPath()
    ctx.arc(canvas.width / 2, canvas.height / 2, 5, 0, Math.PI * 2)
    ctx.fillStyle = "rgba(59, 130, 246, 0.8)"
    ctx.fill()

    // Reset shadow
    ctx.shadowBlur = 0
  }, [title, tags])

  return (
    <div className="relative w-full h-full overflow-hidden">
      <canvas ref={canvasRef} className="w-full h-full object-cover" />

      {/* Animated elements */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-3 h-3 rounded-full bg-blue-500/80"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-1/3 left-1/3 w-2 h-2 rounded-full bg-blue-400/80"
        animate={{
          scale: [1, 1.8, 1],
          opacity: [0.3, 0.8, 0.3],
        }}
        transition={{
          duration: 2.5,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 0.5,
        }}
      />

      <motion.div
        className="absolute top-1/2 right-1/3 w-4 h-4 rounded-full bg-blue-600/50"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.6, 0.2],
        }}
        transition={{
          duration: 3,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 1,
        }}
      />
    </div>
  )
}

