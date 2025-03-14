"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import Typed from "typed.js"
import HeroImage from "./hero-image"

export default function Hero() {
  const typedRef = useRef(null)

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ["Full Stack Developer", "Frontend Specialist", "Backend Engineer", "DevOps Expert", "UI/UX Enthusiast"],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 1500,
      loop: true,
    })

    return () => {
      typed.destroy()
    }
  }, [])

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4"
          >
            <span className="px-4 py-1.5 rounded-full text-sm font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20 inline-block">
              7+ Years of Experience
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold font-heading mb-6 glow-text"
          >
            Senior <span className="gradient-text">Full Stack</span> Developer
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-400 mb-8 h-10"
          >
            <span className="inline-block mr-2">I am a</span>
            <span ref={typedRef} className="text-blue-400 font-medium"></span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="max-w-2xl text-gray-400 mb-10 text-lg"
          >
            Crafting elegant solutions to complex problems with modern technologies. Specializing in scalable
            applications and intuitive user experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 mb-16"
          >
            <Button
              asChild
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 rounded-lg transition-all duration-300 hover:translate-y-[-2px] hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] group"
            >
              <Link href="#projects">
                View My Work
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-blue-500 text-blue-400 hover:text-blue-300 px-8 py-6 rounded-lg transition-all duration-300 hover:border-blue-400 hover:bg-blue-900/20 hover:shadow-[0_0_10px_rgba(59,130,246,0.3)]"
            >
              <Link href="#contact">Contact Me</Link>
            </Button>
          </motion.div>

          {/* Add the hero image */}
          <HeroImage />
        </div>
      </div>
    </section>
  )
}

