import React, { useState, useEffect } from 'react';
import { Camera, Github, Linkedin, Mail, ArrowUpRight, Sparkles, Code2, Layers, Cpu } from 'lucide-react';

export default function Portfolio2026() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = (window.scrollY / totalScroll) * 100;
      setScrollProgress(currentProgress);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const projects = [
    {
      title: "Neural Commerce",
      category: "E-Commerce Platform",
      tech: ["Next.js", "AI/ML", "WebGL"],
      gradient: "from-cyan-400 via-blue-500 to-purple-600",
      year: "2026"
    },
    {
      title: "Quantum Dashboard",
      category: "Data Visualization",
      tech: ["React", "D3.js", "Three.js"],
      gradient: "from-emerald-400 via-teal-500 to-cyan-600",
      year: "2025"
    },
    {
      title: "SynthWave Studio",
      category: "Creative Platform",
      tech: ["TypeScript", "WebGPU", "WASM"],
      gradient: "from-pink-400 via-rose-500 to-orange-600",
      year: "2026"
    }
  ];

  const skills = [
    { name: "Next.js 15", level: 98, icon: <Layers className="w-5 h-5" /> },
    { name: "React 19", level: 95, icon: <Code2 className="w-5 h-5" /> },
    { name: "TypeScript", level: 92, icon: <Cpu className="w-5 h-5" /> },
    { name: "WebGL/Three.js", level: 88, icon: <Sparkles className="w-5 h-5" /> }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden relative">
      {/* Custom Cursor Trail */}
      <div 
        className="fixed w-6 h-6 rounded-full bg-cyan-400/30 blur-xl pointer-events-none transition-all duration-300 z-50"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          transform: 'translate(-50%, -50%)'
        }}
      />

      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-900 z-50">
        <div 
          className="h-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 transition-all duration-100"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Animated Grid Background */}
      <div className="fixed inset-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, rgba(6, 182, 212, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(6, 182, 212, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          animation: 'gridMove 20s linear infinite'
        }} />
      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@300;400;500;600&display=swap');
        
        @keyframes gridMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(60px, 60px); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        
        @keyframes glow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        
        @keyframes slideInLeft {
          from { transform: translateX(-100px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        
        @keyframes slideInRight {
          from { transform: translateX(100px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        
        @keyframes fadeInUp {
          from { transform: translateY(40px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }

        * {
          font-family: 'JetBrains Mono', monospace;
        }
        
        h1, h2, h3, h4, h5, h6 {
          font-family: 'Orbitron', sans-serif;
        }
      `}</style>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 relative">
        <div className="max-w-6xl w-full">
          {/* Floating Geometric Shapes */}
          <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-tr from-pink-500/20 to-orange-500/20 rounded-full blur-3xl" style={{ animation: 'float 8s ease-in-out infinite' }} />
          
          <div className="relative z-10">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 mb-8"
                 style={{ animation: 'fadeInUp 0.8s ease-out' }}>
              <div className="w-2 h-2 rounded-full bg-cyan-400" style={{ animation: 'glow 2s ease-in-out infinite' }} />
              <span className="text-cyan-400 text-sm font-medium">Available for Projects • 2026</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-7xl md:text-9xl font-black mb-6 leading-none"
                style={{ animation: 'slideInLeft 1s ease-out 0.2s backwards' }}>
              <span className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                FRONTEND
              </span>
              <span className="block text-white">ARCHITECT</span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mb-12 leading-relaxed"
               style={{ animation: 'fadeInUp 1s ease-out 0.4s backwards' }}>
              Crafting next-generation digital experiences with cutting-edge technologies. 
              Specializing in <span className="text-cyan-400 font-semibold">WebGL</span>, 
              <span className="text-purple-400 font-semibold"> AI-driven UIs</span>, and 
              <span className="text-pink-400 font-semibold"> immersive interactions</span>.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4"
                 style={{ animation: 'fadeInUp 1s ease-out 0.6s backwards' }}>
              <button className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105">
                <span className="flex items-center gap-2">
                  View Projects
                  <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </span>
              </button>
              <button className="px-8 py-4 border-2 border-gray-700 rounded-full font-bold text-lg hover:border-cyan-500 hover:bg-cyan-500/10 transition-all duration-300">
                Get In Touch
              </button>
            </div>

            {/* Tech Stack Badges */}
            <div className="flex flex-wrap gap-3 mt-12"
                 style={{ animation: 'fadeInUp 1s ease-out 0.8s backwards' }}>
              {['Next.js', 'React', 'TypeScript', 'WebGL', 'AI/ML', 'Three.js'].map((tech, i) => (
                <span key={tech} 
                      className="px-4 py-2 bg-gray-900 border border-gray-800 rounded-lg text-sm text-gray-400 hover:border-cyan-500/50 hover:text-cyan-400 transition-all cursor-default"
                      style={{ animation: `fadeInUp 0.6s ease-out ${0.8 + i * 0.1}s backwards` }}>
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-xs text-gray-500 uppercase tracking-wider">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-gray-700 rounded-full flex justify-center p-2">
            <div className="w-1 h-3 bg-cyan-400 rounded-full" style={{ animation: 'float 2s ease-in-out infinite' }} />
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="min-h-screen py-32 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-16">
            <div className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-purple-500" />
            <h2 className="text-5xl md:text-6xl font-black">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                FEATURED WORK
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index}
                   className="group relative bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-3xl p-8 hover:border-cyan-500/50 transition-all duration-500 cursor-pointer overflow-hidden"
                   style={{ animation: `fadeInUp 0.6s ease-out ${index * 0.2}s backwards` }}>
                
                {/* Hover Gradient Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                {/* Year Badge */}
                <div className="absolute top-6 right-6 px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full text-xs text-cyan-400 font-bold border border-cyan-500/30">
                  {project.year}
                </div>

                <div className="relative z-10">
                  {/* Project Icon/Image Placeholder */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${project.gradient} mb-6 flex items-center justify-center`}>
                    <Code2 className="w-8 h-8 text-white" />
                  </div>

                  {/* Category */}
                  <span className="text-xs uppercase tracking-wider text-gray-500 font-bold">
                    {project.category}
                  </span>

                  {/* Title */}
                  <h3 className="text-3xl font-black mt-2 mb-4 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span key={tech} className="text-xs px-3 py-1 bg-gray-800/50 rounded-full text-gray-400">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* View Project Link */}
                  <div className="flex items-center gap-2 text-cyan-400 font-bold group-hover:gap-3 transition-all">
                    <span>View Project</span>
                    <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </div>
                </div>

                {/* Decorative Corner */}
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-cyan-500/5 to-transparent rounded-tl-full" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Showcase */}
      <section className="py-32 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Title */}
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-1 bg-gradient-to-r from-purple-400 to-pink-500" />
                <h2 className="text-5xl md:text-6xl font-black">
                  <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    EXPERTISE
                  </span>
                </h2>
              </div>
              <p className="text-xl text-gray-400 leading-relaxed">
                Mastering the tools that power modern web experiences. 
                Constantly evolving with the latest frameworks and emerging technologies.
              </p>
            </div>

            {/* Right: Skills */}
            <div className="space-y-8">
              {skills.map((skill, index) => (
                <div key={index} className="group">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-lg group-hover:scale-110 transition-transform">
                        {skill.icon}
                      </div>
                      <span className="font-bold text-lg">{skill.name}</span>
                    </div>
                    <span className="text-cyan-400 font-bold">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-gray-900 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full transition-all duration-1000 ease-out"
                      style={{ 
                        width: `${skill.level}%`,
                        animation: `slideInLeft 1.5s ease-out ${index * 0.2}s backwards`
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-32 px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Floating Elements */}
          <div className="absolute -top-20 left-10 w-72 h-72 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 right-10 w-72 h-72 bg-gradient-to-br from-pink-500/10 to-orange-500/10 rounded-full blur-3xl" />

          <div className="relative z-10">
            <h2 className="text-6xl md:text-8xl font-black mb-8">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                LET'S BUILD
              </span>
              <br />
              <span className="text-white">SOMETHING EPIC</span>
            </h2>

            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
              Have a project in mind? Let's collaborate and create something extraordinary together.
            </p>

            {/* Social Links */}
            <div className="flex justify-center gap-6 mb-12">
              {[
                { icon: <Github />, label: 'GitHub', link: '#' },
                { icon: <Linkedin />, label: 'LinkedIn', link: '#' },
                { icon: <Mail />, label: 'Email', link: '#' }
              ].map((social, i) => (
                <a key={i} 
                   href={social.link}
                   className="group p-4 bg-gray-900 border border-gray-800 rounded-2xl hover:border-cyan-500 hover:bg-cyan-500/10 transition-all duration-300 hover:scale-110">
                  <div className="w-6 h-6 text-gray-400 group-hover:text-cyan-400 transition-colors">
                    {social.icon}
                  </div>
                </a>
              ))}
            </div>

            {/* Email CTA */}
            <a href="mailto:hello@frontend.dev" 
               className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-full font-bold text-xl hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105">
              <Mail className="w-6 h-6" />
              hello@frontend.dev
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-900 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-gray-500 text-sm">
            © 2026 Frontend Architect. Crafted with Next.js 15 & React 19
          </div>
          <div className="flex gap-8 text-sm text-gray-500">
            <a href="#" className="hover:text-cyan-400 transition-colors">Privacy</a>
            <a href="#" className="hover:text-cyan-400 transition-colors">Terms</a>
            <a href="#" className="hover:text-cyan-400 transition-colors">License</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
