"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Send, Mail, MessageSquare, Github, Linkedin, Slack, MessageCircle, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/hooks/use-toast"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    })

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    })
    setIsSubmitting(false)
  }

  const socialLinks = [
    {
      name: "Email",
      icon: <Mail className="h-5 w-5" />,
      link: "mailto:contact@example.com",
      handle: "contact@example.com",
      color: "bg-red-500/20 text-red-400 hover:bg-red-500/30 hover:text-red-300",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="h-5 w-5" />,
      link: "https://linkedin.com/in/username",
      handle: "linkedin.com/in/username",
      color: "bg-blue-600/20 text-blue-400 hover:bg-blue-600/30 hover:text-blue-300",
    },
    {
      name: "GitHub",
      icon: <Github className="h-5 w-5" />,
      link: "https://github.com/username",
      handle: "github.com/username",
      color: "bg-gray-700/20 text-gray-400 hover:bg-gray-700/30 hover:text-gray-300",
    },
    {
      name: "Slack",
      icon: <Slack className="h-5 w-5" />,
      link: "#",
      handle: "@username",
      color: "bg-purple-500/20 text-purple-400 hover:bg-purple-500/30 hover:text-purple-300",
    },
    {
      name: "Discord",
      icon: <MessageSquare className="h-5 w-5" />,
      link: "#",
      handle: "username#1234",
      color: "bg-indigo-500/20 text-indigo-400 hover:bg-indigo-500/30 hover:text-indigo-300",
    },
    {
      name: "Telegram",
      icon: <MessageCircle className="h-5 w-5" />,
      link: "https://t.me/username",
      handle: "@username",
      color: "bg-sky-500/20 text-sky-400 hover:bg-sky-500/30 hover:text-sky-300",
    },
    {
      name: "WhatsApp",
      icon: <Phone className="h-5 w-5" />,
      link: "#",
      handle: "+1 (234) 567-8901",
      color: "bg-green-500/20 text-green-400 hover:bg-green-500/30 hover:text-green-300",
    },
  ]

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 right-20 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-60 h-60 bg-blue-700/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 glow-text">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or want to discuss potential opportunities? Feel free to reach out through any of the
            channels below.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <p className="text-gray-400 mb-8">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
            </p>

            <div className="space-y-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className={`flex items-center gap-4 p-4 rounded-lg ${social.color} transition-all duration-300 glass-effect border border-blue-500/10 hover:border-blue-500/30`}
                >
                  <div className="p-2 rounded-full bg-black/20">{social.icon}</div>
                  <div>
                    <h4 className="font-medium">{social.name}</h4>
                    <p className="text-sm opacity-80">{social.handle}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="glass-effect rounded-xl p-6 border border-blue-500/20"
          >
            <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="bg-blue-900/10 border-blue-500/30 focus:border-blue-500/50 placeholder:text-gray-500"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Your Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className="bg-blue-900/10 border-blue-500/30 focus:border-blue-500/50 placeholder:text-gray-500"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project Inquiry"
                  required
                  className="bg-blue-900/10 border-blue-500/30 focus:border-blue-500/50 placeholder:text-gray-500"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="I'd like to discuss a project..."
                  rows={5}
                  required
                  className="bg-blue-900/10 border-blue-500/30 focus:border-blue-500/50 placeholder:text-gray-500"
                />
              </div>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white transition-all duration-300 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                        fill="none"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    Send Message
                    <Send className="h-4 w-4" />
                  </span>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

