import React from 'react';
import { Github, Linkedin, Mail, Terminal, Server, Database, Code, Cpu, Globe, AlignCenter } from 'lucide-react';
import Canvas from './components/Canvas';
import Button from './components/Button';
import ProjectCard from './components/ProjectCard';
import photo from './assets/img/photo.jpg';
import './App.css';

function App() {
  const skills = [
    { name: 'Frontend Architecture', icon: <Code className="h-6 w-6 text-blue-400" />, technologies: ['React/Next.js', 'Vue/Nuxt.js', 'TypeScript', 'Micro-Frontends'] },
    { name: 'Backend Systems', icon: <Server className="h-6 w-6 text-green-400" />, technologies: ['Node.js', 'Python', 'Java', 'Microservices'] },
    { name: 'Database Design', icon: <Database className="h-6 w-6 text-purple-400" />, technologies: ['PostgreSQL', 'MongoDB', 'Redis', 'System Design'] },
    { name: 'DevOps & Cloud', icon: <Terminal className="h-6 w-6 text-orange-400" />, technologies: ['AWS', 'Docker', 'Kubernetes', 'CI/CD'] },
    { name: 'Performance', icon: <Cpu className="h-6 w-6 text-yellow-400" />, technologies: ['Web Vitals', 'Optimization', 'Caching', 'PWA'] },
    { name: 'API Design', icon: <Globe className="h-6 w-6 text-indigo-400" />, technologies: ['REST', 'GraphQL', 'WebSocket', 'gRPC'] },
  ];

  const projects = [
    {
      title: 'Enterprise SaaS Platform',
      description: 'High-performance SaaS platform serving 100k+ users with real-time collaboration and analytics.',
      technologies: ['Next.js', 'TypeScript', 'GraphQL', 'AWS'],
      imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
    },
    {
      title: 'AI-Powered Analytics',
      description: 'Advanced analytics platform using machine learning for predictive insights and data visualization.',
      technologies: ['React', 'Python', 'TensorFlow', 'AWS'],
      imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
    },
    {
      title: 'Scalable Microservices',
      description: 'Cloud-native microservices architecture handling millions of requests per day.',
      technologies: ['Node.js', 'Kubernetes', 'MongoDB', 'Redis'],
      imageUrl: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1600&q=80',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
    },
  ];

  return (
    <div className="relative min-h-screen">
      <Canvas />
      
      {/* Hero Section */}
      <section className="relative flex min-h-screen items-center justify-center px-4">
        <div className="text-center">
          <div className="mb-6 inline-block rounded-full bg-blue-500/10 px-4 py-2 text-blue-400">
            Senior Full Stack Developer
          </div>
          <div className='myphoto' style={{height:'300px', width:'300px', borderRadius:'50%',translate:'50%'}}>
          <img src={photo} style={{borderRadius:'50%'}}/>
          </div>
          <h1 className="mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-6xl font-extrabold leading-tight text-transparent md:text-7xl">
            NeonNexus0408
          </h1>
          <p className="mb-8 text-xl text-slate-300">
            8+ years of mastering modern web architectures and scalable solutions
          </p>
          <div className="flex justify-center gap-4">
            <Button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} style={{backgroundColor:'#8888ff33'}}>
              Get in Touch
            </Button>
            <Button variant="secondary" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
              View Portfolio
            </Button>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-4 text-center text-4xl font-bold text-white">Technical Expertise</h2>
          <p className="mb-12 text-center text-lg text-slate-300">Comprehensive mastery across the full technology stack</p>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {skills.map((skill) => (
              <div key={skill.name} className="group rounded-xl bg-slate-800/50 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:bg-slate-700/50">
                <div className="mb-4 flex items-center gap-3">
                  {skill.icon}
                  <h3 className="text-xl font-semibold text-white">{skill.name}</h3>
                </div>
                <ul className="space-y-2">
                  {skill.technologies.map((tech) => (
                    <li key={tech} className="text-slate-300">
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-4 text-center text-4xl font-bold text-white">Featured Projects</h2>
          <p className="mb-12 text-center text-lg text-slate-300">Showcasing innovative solutions and technical excellence</p>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-4 text-center text-4xl font-bold text-white">Let's Connect</h2>
          <p className="mb-12 text-center text-lg text-slate-300">Open to discussing new opportunities and collaborations</p>
          <div className="flex justify-center gap-8 text-white">
            <a
              href="https://github.com/neonnexus0408"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 rounded-lg bg-slate-800/50 px-6 py-3 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-slate-700/50"
            >
              <Github className="h-6 w-6 transition-transform group-hover:scale-110" />
              GitHub
            </a>
            <a
              href="https://linkedin.com/neonnexus0408"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 rounded-lg bg-slate-800/50 px-6 py-3 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-slate-700/50"
            >
              <Linkedin className="h-6 w-6 transition-transform group-hover:scale-110" />
              LinkedIn
            </a>
            <a
              href="mailto:speeddev62@gmail.com"
              className="group flex items-center gap-2 rounded-lg bg-slate-800/50 px-6 py-3 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-slate-700/50"
            >
              <Mail className="h-6 w-6 transition-transform group-hover:scale-110" />
              Email
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;