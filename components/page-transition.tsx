"use client"

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"

// Remove useSearchParams since it's causing the issue
export function PageTransition() {
  const pathname = usePathname()
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    // Just use pathname for transitions instead of searchParams
    setIsLoading(true)

    // Simulate a short loading time for page transitions
    const timeout = setTimeout(() => {
      setIsLoading(false)
    }, 500)

    return () => clearTimeout(timeout)
  }, [pathname]) // Only depend on pathname

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed top-0 left-0 w-full h-1 bg-blue-900/50 z-50"
        >
          <motion.div
            initial={{ width: "0%" }}
            animate={{
              width: ["0%", "50%", "100%"],
              transition: { duration: 0.5, times: [0, 0.7, 1] },
            }}
            className="h-full bg-gradient-to-r from-blue-600 via-blue-400 to-blue-600"
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}

