"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Code, Braces, Terminal } from "lucide-react"
import LoadingBackground from "./loading-background"

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(interval)
          return 100
        }
        return prevProgress + Math.floor(Math.random() * 10) + 1
      })
    }, 200)

    return () => clearInterval(interval)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black"
    >
      <LoadingBackground />

      <div className="relative mb-12 z-10">
        <motion.div
          animate={{
            rotate: 360,
            transition: { duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
          }}
          className="relative w-32 h-32"
        >
          <motion.div
            animate={{
              opacity: [0.5, 1, 0.5],
              scale: [0.8, 1, 0.8],
              transition: { duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
            }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <Code className="w-16 h-16 text-blue-500" />
          </motion.div>

          <motion.div
            animate={{
              opacity: [0.3, 0.7, 0.3],
              scale: [1, 1.2, 1],
              transition: { duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 0.5 },
            }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <Braces className="w-24 h-24 text-blue-400/50" />
          </motion.div>

          <motion.div
            animate={{
              opacity: [0.2, 0.5, 0.2],
              scale: [1.2, 1.4, 1.2],
              transition: { duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 },
            }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <Terminal className="w-32 h-32 text-blue-300/30" />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-40 h-40"
        >
          <div className="relative w-full h-full">
            <div className="absolute inset-0 rounded-full bg-blue-500/10 blur-xl"></div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-center z-10"
      >
        <h2 className="text-2xl font-bold font-heading mb-2 glow-text">
          <span className="gradient-text">Loading</span> Portfolio
        </h2>
        <p className="text-blue-400 text-sm mb-6">Please wait while we prepare something amazing</p>
      </motion.div>

      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${Math.min(progress, 100)}%` }}
        className="w-full max-w-md h-1 bg-blue-900/50 rounded-full overflow-hidden relative mb-2 z-10"
      >
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 h-full rounded-full"
        >
          <motion.div
            animate={{
              opacity: [0.5, 1, 0.5],
              transition: { duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
            }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-300/80 to-transparent"
            style={{ transform: "translateX(-100%)" }}
          />
        </motion.div>
      </motion.div>

      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-blue-500/80 text-sm z-10">
        {Math.min(progress, 100)}%
      </motion.p>
    </motion.div>
  )
}

