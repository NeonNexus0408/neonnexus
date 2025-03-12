"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function HeroImage() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, delay: 0.5 }}
      className="relative w-64 h-64 md:w-80 md:h-80 mx-auto mt-10"
    >
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600/20 to-blue-400/20 blur-3xl"></div>

      <div className="relative z-10 w-full h-full rounded-full p-2 glass-effect border border-blue-500/30">
        <div className="relative w-full h-full rounded-full overflow-hidden">
          <Image src="/images/profile.jpg" alt="Senior Full Stack Developer" fill className="object-cover" />

          {/* Animated border glow */}
          <motion.div
            animate={{
              boxShadow: [
                "0 0 10px rgba(59, 130, 246, 0.5)",
                "0 0 20px rgba(59, 130, 246, 0.7)",
                "0 0 10px rgba(59, 130, 246, 0.5)",
              ],
              transition: { duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
            }}
            className="absolute inset-0 rounded-full"
          ></motion.div>
        </div>
      </div>

      {/* Tech icons floating around */}
      <motion.div
        animate={{
          rotate: 360,
          transition: { duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
        }}
        
        className="absolute inset-0 w-full h-full"
      >
        {[0, 45, 90, 135, 180, 225, 270, 315].map((degree, i) => (
          <motion.div
            key={i}
            className="absolute w-10 h-10 rounded-full glass-effect flex items-center justify-center"
            style={{
              top: `calc(50% + ${Math.sin((degree * Math.PI) / 180) * 150}px)`,
              left: `calc(50% + ${Math.cos((degree * Math.PI) / 180) * 150}px)`,
              transform: "translate(-50%, -50%)",
            }}
            animate={{
              y: [0, 10, 0],
              transition: { duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: i * 0.2 },
            }}
          >
            <Image
              src={`/images/tech/icon-${(i % 8) + 1}.png`}
              alt="Tech icon"
              width={24}
              height={24}
              className="object-contain"
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}

