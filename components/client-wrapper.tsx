"use client"

import type React from "react"

import { useState, useEffect, Suspense } from "react"
import { motion, AnimatePresence } from "framer-motion"
import LoadingScreen from "@/components/loading-screen"
import { PageTransition } from "@/components/page-transition"
import Header from "@/components/header"
import Footer from "@/components/footer"

// Simple fallback for Suspense
const PageTransitionFallback = () => <div className="h-1 bg-blue-900/50"></div>

export default function ClientWrapper({
  children,
}: {
  children: React.ReactNode
}) {
  const [isLoading, setIsLoading] = useState(true)
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    // Simulate loading time or wait for resources
    const timer = setTimeout(() => {
      setIsLoading(false)
      // Add a small delay before showing content for smooth transition
      setTimeout(() => setShowContent(true), 100)
    }, 3000) // Show loading screen for at least 3 seconds

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <AnimatePresence mode="wait">{isLoading && <LoadingScreen />}</AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: showContent ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        className={showContent ? "block" : "invisible"}
      >
        {/* Wrap PageTransition in Suspense boundary */}
        <Suspense fallback={<PageTransitionFallback />}>
          <PageTransition />
        </Suspense>
        <Header />
        {children}
        <Footer />
      </motion.div>
    </>
  )
}

