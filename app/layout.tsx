import type React from "react"
import type { Metadata } from "next"
import { Inter, Space_Grotesk } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import ClientWrapper from "@/components/client-wrapper"
import { Suspense } from "react"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
})

export const metadata: Metadata = {
  title: "Senior Full Stack Developer Portfolio",
  description: "Portfolio of a senior full stack developer with 7+ years of experience",
    generator: 'v0.dev'
}

// Simple loading fallback
const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-black text-white">
    <div className="text-xl">Loading...</div>
  </div>
)

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          <Suspense fallback={<LoadingFallback />}>
            <ClientWrapper>{children}</ClientWrapper>
          </Suspense>
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'