import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white p-4">
      <div className="text-center max-w-md mx-auto glass-effect p-8 rounded-xl border border-blue-500/20">
        <h1 className="text-6xl font-bold mb-4 glow-text">404</h1>
        <h2 className="text-2xl font-bold mb-4 gradient-text">Page Not Found</h2>
        <p className="text-gray-400 mb-8">The page you are looking for doesn't exist or has been moved.</p>
        <Button asChild className="bg-blue-600 hover:bg-blue-700">
          <Link href="/" className="flex items-center gap-2">
            <Home size={16} />
            Back to Home
          </Link>
        </Button>
      </div>

      {/* Background elements */}
      <div className="absolute top-1/4 left-1/4 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-1/4 right-1/4 w-60 h-60 bg-blue-700/10 rounded-full blur-3xl -z-10"></div>
    </div>
  )
}

