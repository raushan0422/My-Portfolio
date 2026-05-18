/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Download, 
  ChevronRight, 
  MapPin, 
  Calendar, 
  Award,
  Terminal,
  BookOpen,
  Send,
  Menu,
  X,
  Sparkles,
  GraduationCap,
  Trophy
} from 'lucide-react';
import { cn } from './lib/utils';
import { 
  PERSONAL_INFO, 
  SOCIAL_LINKS, 
  SKILLS, 
  PROJECTS, 
  EXPERIENCE, 
  ACHIEVEMENTS 
} from './constants';

// --- Shared Components ---

const SectionHeader = ({ title, subtitle }: { title: string; subtitle?: string }) => (
  <div className="mb-12 text-center md:text-left">
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-500 mb-4"
    >
      {title}
    </motion.h2>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-slate-400 max-w-2xl"
      >
        {subtitle}
      </motion.p>
    )}
    <div className="h-1 w-20 bg-brand-blue mt-4 rounded-full md:mx-0 mx-auto" />
  </div>
);

// --- Navbar ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 w-full z-50 transition-all duration-300 border-b",
      isScrolled ? "bg-brand-black/80 backdrop-blur-md py-4 border-white/10" : "bg-transparent py-6 border-transparent"
    )}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-xl font-bold tracking-tighter flex items-center gap-2"
        >
          <div className="w-8 h-8 rounded bg-brand-blue flex items-center justify-center">
            <span className="text-white text-xs">RK</span>
          </div>
          <span className="hidden sm:inline">RAUSHAN.AI</span>
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium text-slate-400 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href={PERSONAL_INFO.resumeLink}
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 bg-brand-blue/10 hover:bg-brand-blue/20 text-brand-blue text-sm font-semibold rounded-full border border-brand-blue/30 transition-all flex items-center gap-2"
          >
            <Download size={16} />
            Resume
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-slate-400 p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-brand-charcoal border-b border-white/10 overflow-hidden"
          >
            <div className="flex flex-col gap-4 p-6">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsMenuOpen(false)}
                  className="text-lg text-slate-300"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href={PERSONAL_INFO.resumeLink}
                className="w-full py-3 bg-brand-blue text-white text-center rounded-lg font-bold"
              >
                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

// --- Sections ---

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Mesh Gradient Background */}
      <div className="absolute inset-0 -z-10 bg-brand-black">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-brand-blue/10 blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-brand-indigo/10 blur-[120px] animate-pulse" />
        <div 
          className="absolute inset-0 opacity-[0.03]" 
          style={{ backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,1) 1px, transparent 0)`, backgroundSize: '40px 40px' }} 
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-brand-neon text-xs font-medium mb-6 backdrop-blur-sm"
        >
          <Sparkles size={12} />
          <span>Opening to AI/ML Opportunities</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-8xl font-black tracking-tighter mb-6 text-white"
        >
          {PERSONAL_INFO.name.split(' ')[0]} <span className="text-gradient">{PERSONAL_INFO.name.split(' ')[1]}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl md:text-2xl text-slate-400 font-medium max-w-2xl mx-auto mb-10 leading-snug"
        >
          {PERSONAL_INFO.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href="#projects" className="w-full sm:w-auto px-8 py-4 bg-white text-black font-bold rounded-xl hover:bg-slate-200 transition-all flex items-center justify-center gap-2">
            View Work <ChevronRight size={18} />
          </a>
          <a href="#contact" className="w-full sm:w-auto px-8 py-4 bg-white/5 text-white font-bold rounded-xl border border-white/10 hover:bg-white/10 transition-all flex items-center justify-center gap-2 backdrop-blur-md">
            Let's Connect
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <div className="w-px h-12 bg-gradient-to-b from-brand-blue to-transparent" />
          <span className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Scroll Down</span>
        </motion.div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 bg-brand-charcoal/50">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader title="About Me" subtitle="The journey from curiosity to building intelligent systems." />
        
        <div className="grid md:grid-cols-12 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-12 lg:col-span-7 space-y-6"
          >
            <p className="text-lg text-slate-300 leading-relaxed italic border-l-4 border-brand-blue pl-6 bg-brand-blue/5 py-4 rounded-r-xl">
              "{PERSONAL_INFO.bio}"
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 glass rounded-xl space-y-2">
                <div className="flex items-center gap-2 text-brand-blue">
                  <GraduationCap size={18} />
                  <span className="font-bold text-sm">Education</span>
                </div>
                <h4 className="font-bold">{PERSONAL_INFO.education.degree}</h4>
                <p className="text-xs text-slate-400">{PERSONAL_INFO.education.school} • {PERSONAL_INFO.education.year}</p>
              </div>

              <div className="p-4 glass rounded-xl space-y-2">
                <div className="flex items-center gap-2 text-brand-indigo">
                  <MapPin size={18} />
                  <span className="font-bold text-sm">Location</span>
                </div>
                <h4 className="font-bold">{PERSONAL_INFO.location}, India</h4>
                <p className="text-xs text-slate-400">Available for Remote / Relocation</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="md:col-span-12 lg:col-span-5 relative"
          >
            <div className="aspect-square bg-gradient-to-br from-brand-blue/20 to-brand-indigo/20 rounded-3xl border border-white/10 flex items-center justify-center">
               {/* Terminal Style AI Mockup */}
               <div className="w-[85%] h-[75%] bg-brand-black rounded-xl border border-white/10 shadow-2xl overflow-hidden font-mono text-[10px]">
                  <div className="bg-white/5 px-3 py-2 border-b border-white/10 flex items-center justify-between">
                    <div className="flex gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-red-500/50" />
                      <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                      <div className="w-2 h-2 rounded-full bg-green-500/50" />
                    </div>
                    <span className="text-slate-500">raushan_ai.py</span>
                  </div>
                  <div className="p-4 space-y-3 text-slate-400">
                    <div className="flex items-start gap-2">
                      <span className="text-brand-blue">&gt;&gt;&gt;</span>
                      <span>import os, tensorflow as tf</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-brand-blue">&gt;&gt;&gt;</span>
                      <span>model = build_intelligent_future()</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-brand-blue">&gt;&gt;&gt;</span>
                      <span>print(model.get_status())</span>
                    </div>
                    <div className="text-white pt-2">
                      {"{ \"impact\": \"High\", \"innovation\": \"Continuously Learning\" }"}
                    </div>
                  </div>
               </div>
            </div>
            {/* Achievement Badges */}
            <div className="absolute -bottom-6 -right-6 glass p-4 rounded-2xl shadow-xl border-brand-blue/30 backdrop-blur-2xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand-blue/20 flex items-center justify-center text-brand-blue text-xl font-bold">
                  <Award />
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 font-bold uppercase tracking-tight">Top Accomplishment</p>
                  <p className="text-sm font-bold">Microsoft Hackathon Finalist</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader 
          title="Technical Arsenal" 
          subtitle="Specialized skills in Artificial Intelligence, Machine Learning, and Modern Development." 
        />
        
        <div className="grid md:grid-cols-2 gap-8">
          {SKILLS.map((set, idx) => (
            <motion.div 
              key={set.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 glass rounded-3xl space-y-8"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-brand-blue/10 rounded-xl text-brand-blue font-bold">
                    <set.icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold">{set.category}</h3>
                </div>
                <div className="text-slate-500 text-xs font-mono">GROUP_{idx + 1}</div>
              </div>

              <div className="space-y-6">
                {set.items.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-end">
                      <span className="text-sm font-medium text-slate-300">{skill.name}</span>
                      <span className="text-[10px] font-mono text-slate-500 italic">
                        {skill.level >= 90 ? 'Advanced' : skill.level >= 75 ? 'Intermediate' : 'Learning'}
                      </span>
                    </div>
                    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-brand-blue to-brand-neon rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ExperienceTimeline = () => {
  return (
    <section id="experience" className="py-24 bg-brand-charcoal/30">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader title="Professional Timeline" subtitle="Experience across startups, industry, and leadership." />
        
        <div className="space-y-12 relative before:absolute before:left-[17px] md:before:left-1/2 before:top-4 before:bottom-4 before:w-px before:bg-white/10">
          {EXPERIENCE.map((exp, idx) => (
            <motion.div 
               key={exp.company}
               initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className={cn(
                 "flex flex-col md:flex-row gap-8 items-start relative",
                 idx % 2 !== 0 && "md:flex-row-reverse"
               )}
            >
              <div className="absolute left-[17px] md:left-1/2 -translate-x-1/2 w-9 h-9 glass rounded-full flex items-center justify-center border-brand-blue/50 z-10 bg-brand-black">
                <div className="w-3 h-3 bg-brand-blue rounded-full shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
              </div>

              <div className={cn("flex-1 pt-0 md:pt-1 pl-12 md:pl-0", idx % 2 === 0 ? "md:text-right" : "md:text-left")}>
                <div className="glass p-6 rounded-2xl hover:border-brand-blue/30 transition-colors">
                  <div className="flex flex-col space-y-1 mb-4">
                    <span className="text-[10px] font-bold text-brand-blue uppercase tracking-widest">{exp.duration}</span>
                    <h3 className="text-xl font-bold">{exp.role}</h3>
                    <p className="text-slate-400 font-medium">{exp.company}</p>
                  </div>
                  <ul className={cn("space-y-2 mb-4", idx % 2 === 0 ? "md:items-end flex flex-col" : "items-start")}>
                    {exp.points.map((p, i) => (
                      <li key={i} className="text-sm text-slate-400 leading-relaxed text-left">
                        • {p}
                      </li>
                    ))}
                  </ul>
                  <div className={cn("flex flex-wrap gap-2 pt-4 border-t border-white/5", idx % 2 === 0 ? "md:justify-end" : "justify-start")}>
                    {exp.tech.map(t => (
                      <span key={t} className="text-[10px] px-2 py-1 bg-white/5 border border-white/10 rounded-md text-slate-300">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="hidden md:block flex-1" />
            </motion.div>
          ))}
        </div>

        <div className="mt-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {ACHIEVEMENTS.map((ach) => (
            <div key={ach.title} className="p-6 glass rounded-2xl hover:bg-brand-blue/5 transition-all group">
              <Trophy className="text-brand-blue mb-4 group-hover:scale-110 transition-transform" size={24} />
              <h4 className="font-bold mb-1">{ach.title}</h4>
              <p className="text-xs text-slate-400 font-medium">{ach.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader 
          title="Featured Works" 
          subtitle="A selection of AI/ML projects tackling complex problems with code and data." 
        />
        
        <div className="grid md:grid-cols-2 gap-8">
          {PROJECTS.map((project, idx) => (
            <motion.div 
              key={project.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative h-[400px] overflow-hidden rounded-[2.5rem] border border-white/10 bg-brand-charcoal hover:border-brand-blue/50 transition-all cursor-pointer shadow-2xl"
            >
              {/* Fake Project Image/BG */}
              <div className="absolute inset-x-0 bottom-0 top-[40%] bg-gradient-to-t from-black via-black/90 to-transparent z-10" />
              <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/10 to-brand-indigo/10 flex items-center justify-center -translate-y-20 group-hover:scale-110 transition-transform duration-700">
                <project.icon size={120} className="text-brand-blue/30" />
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-8 z-20 space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map(t => (
                    <span key={t} className="text-[10px] px-2 py-1 bg-brand-blue/10 border border-brand-blue/30 rounded text-brand-neon font-bold tracking-tight">
                      {t.toUpperCase()}
                    </span>
                  ))}
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-white">{project.title}</h3>
                  <p className="text-sm text-slate-400 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>
                </div>
                <div className="flex items-center gap-4 pt-2">
                   {project.links.github && (
                     <a href={project.links.github} className="flex items-center gap-2 text-xs font-bold text-white hover:text-brand-blue transition-colors">
                       <Github size={16} /> Codebase
                     </a>
                   )}
                   {project.links.demo && (
                     <a href={project.links.demo} className="flex items-center gap-2 text-xs font-bold text-white hover:text-brand-blue transition-colors">
                       <ExternalLink size={16} /> Live Demo
                     </a>
                   )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[500px] bg-brand-blue/5 rounded-full blur-[100px] -z-10" />
      
      <div className="max-w-4xl mx-auto px-6">
        <SectionHeader title="Get in Touch" subtitle="Let's discuss how we can build something impactful together." />
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <p className="text-lg text-slate-400 leading-relaxed">
              I'm always open to discussing new AI/ML projects, creative ideas, or being part of your vision. 
              Drop me a message and let's start a conversation.
            </p>
            <div className="space-y-4">
              <a href={`mailto:${PERSONAL_INFO.email}`} className="flex items-center gap-4 group p-4 glass rounded-2xl hover:bg-brand-blue/5 transition-all">
                <div className="w-12 h-12 rounded-xl bg-brand-blue/10 flex items-center justify-center text-brand-blue">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-bold uppercase">Email</p>
                  <p className="font-bold group-hover:text-brand-blue transition-colors">{PERSONAL_INFO.email}</p>
                </div>
              </a>
              <div className="flex items-center gap-4 p-4 glass rounded-2xl">
                <div className="w-12 h-12 rounded-xl bg-brand-indigo/10 flex items-center justify-center text-brand-indigo">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-bold uppercase">Location</p>
                  <p className="font-bold">{PERSONAL_INFO.location}, UP, India</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              {SOCIAL_LINKS.map((social) => (
                <a 
                  key={social.name} 
                  href={social.url}
                  className="w-12 h-12 glass rounded-xl flex items-center justify-center text-slate-400 hover:text-brand-blue hover:border-brand-blue/50 transition-all"
                  title={social.name}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div className="glass p-8 rounded-3xl space-y-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Full Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-brand-blue focus:outline-none transition-colors text-white" 
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Email Address</label>
                <input 
                  type="email" 
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-brand-blue focus:outline-none transition-colors text-white" 
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Message</label>
                <textarea 
                  rows={4}
                  placeholder="Tell me about your project..."
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-brand-blue focus:outline-none transition-colors text-white resize-none" 
                />
              </div>
              <button className="w-full py-4 bg-white text-black font-extrabold rounded-xl hover:bg-brand-blue hover:text-white transition-all flex items-center justify-center gap-2 shadow-xl shadow-white/5">
                Send Message <Send size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="py-12 border-t border-white/10 bg-brand-black">
    <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 rounded bg-brand-blue flex items-center justify-center">
          <span className="text-white text-[10px] font-bold">RK</span>
        </div>
        <span className="text-sm font-bold tracking-tighter text-slate-400">RAUSHAN.AI © 2026</span>
      </div>
      
      <div className="text-xs text-slate-500 font-medium">
        Built with React, Tailwind CC & Framer Motion. Inspired by Linear.
      </div>
      
      <div className="flex gap-6">
        {SOCIAL_LINKS.map(s => (
          <a key={s.name} href={s.url} className="text-slate-500 hover:text-white transition-colors text-xs font-bold uppercase tracking-widest">
            {s.name}
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="bg-brand-black font-sans scroll-smooth">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <ExperienceTimeline />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
