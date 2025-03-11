"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function AboutImage() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="relative"
    >
      <div className="relative z-10 rounded-2xl overflow-hidden glass-effect p-1">
        <Image
          src="/images/about.jpg"
          alt="Developer Portrait"
          width={500}
          height={600}
          className="rounded-xl object-cover w-full h-auto"
        />

        {/* Overlay with subtle gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60"></div>

        {/* Animated glow effect */}
        <motion.div
          animate={{
            opacity: [0.4, 0.6, 0.4],
            transition: { duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
          }}
          className="absolute inset-0 rounded-xl border border-blue-500/30"
        ></motion.div>
      </div>

      {/* Background glow effects */}
      <div className="absolute -bottom-4 -right-4 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl"></div>
      <div className="absolute -top-4 -left-4 w-40 h-40 bg-blue-700/20 rounded-full blur-3xl"></div>

      {/* Experience badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="absolute -bottom-5 -right-5 bg-blue-900/80 glass-effect px-4 py-2 rounded-lg border border-blue-500/40 z-20"
      >
        <span className="text-blue-300 font-bold">10+ Years Experience</span>
      </motion.div>
    </motion.div>
  )
}

