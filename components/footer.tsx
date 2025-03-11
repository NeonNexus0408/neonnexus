import { Github, Linkedin, Mail, MessageCircle } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="py-8 border-t border-blue-900/30 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link href="#home" className="text-xl font-heading font-bold">
              <span className="gradient-text">DEV</span>
              <span className="text-white">PORTFOLIO</span>
            </Link>
          </div>

          <div className="flex space-x-6 mb-4 md:mb-0">
            <Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Link>
            <Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
              <MessageCircle className="h-5 w-5" />
              <span className="sr-only">Telegram</span>
            </Link>
          </div>

          <div className="text-sm text-gray-500">&copy; {new Date().getFullYear()} All rights reserved.</div>
        </div>
      </div>
    </footer>
  )
}

