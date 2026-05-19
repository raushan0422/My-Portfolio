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
  Trophy,
  Copy,
  CheckCircle2
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
    <section id="skills" className="py-32 relative bg-brand-black">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tighter"
          >
            Technical <span className="text-brand-blue">Stack</span>
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            className="h-1 bg-brand-blue mx-auto rounded-full"
          />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {SKILLS.flatMap(set => set.items).map((skill, idx) => (
            <motion.div 
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.03, duration: 0.3 }}
              whileHover={{ y: -8, scale: 1.05 }}
              className="group relative aspect-square bg-[#0F0F0F] border border-white/5 hover:border-brand-blue/40 rounded-3xl p-6 flex flex-col items-center justify-center gap-5 transition-all duration-500 shadow-2xl hover:shadow-brand-blue/5 overflow-hidden"
            >
              {/* Animated Glow on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/10 via-transparent to-brand-indigo/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 w-16 h-16 rounded-2xl bg-black/50 border border-white/5 flex items-center justify-center group-hover:border-brand-blue/30 transition-all duration-500 overflow-hidden">
                <img 
                  src={`https://cdn.simpleicons.org/${skill.slug}/ffffff`} 
                  alt={skill.name}
                  className="w-8 h-8 object-contain opacity-60 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110 filter brightness-120"
                  referrerPolicy="no-referrer"
                />
              </div>

              <span className="relative z-10 text-[11px] font-black text-slate-500 group-hover:text-white uppercase tracking-widest transition-colors text-center">
                {skill.name}
              </span>

              {/* Decorative Corner Line */}
              <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-white/0 group-hover:border-brand-blue/30 transition-all duration-500" />
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
                     <a 
                       href={project.links.github} 
                       target="_blank" 
                       rel="noopener noreferrer" 
                       className="flex items-center gap-2 text-xs font-bold text-white hover:text-brand-blue transition-colors"
                     >
                       <Github size={16} /> Codebase
                     </a>
                   )}
                   {project.links.demo && (
                     <a 
                       href={project.links.demo} 
                       target="_blank" 
                       rel="noopener noreferrer" 
                       className="flex items-center gap-2 text-xs font-bold text-white hover:text-brand-blue transition-colors"
                     >
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
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setFormStatus('success');
      } else {
        setFormStatus('error');
      }
    } catch (err) {
      setFormStatus('error');
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-brand-black">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[500px] bg-brand-blue/5 rounded-full blur-[100px] -z-10" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          <div className="lg:w-1/2 space-y-10">
            <div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-brand-blue font-mono text-sm tracking-[0.3em] mb-4"
              >
                CONTACT
              </motion.div>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-5xl md:text-6xl font-black text-white uppercase tracking-tighter mb-8"
              >
                Let's Build the <br /><span className="text-gradient">Next Big Thing</span>
              </motion.h2>
              <p className="text-lg text-slate-400 leading-relaxed max-w-md">
                I'm active for new collaborations and high-impact AI/ML opportunities. Let's discuss your vision.
              </p>
            </div>

            <div className="space-y-6">
              <div className="group flex items-center justify-between p-6 glass rounded-3xl hover:bg-brand-blue/5 transition-all duration-500">
                <div className="flex items-center gap-4 md:gap-6">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-brand-blue/10 flex items-center justify-center text-brand-blue shrink-0">
                    <Mail size={24} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mb-0.5 md:mb-1">Direct Contact</p>
                    <p className="font-bold text-white text-sm md:text-lg truncate">{PERSONAL_INFO.email}</p>
                  </div>
                </div>
                <button 
                  onClick={copyEmail}
                  className="p-2.5 md:p-3 bg-white/5 border border-white/10 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-all shrink-0 ml-2"
                  title="Copy Email"
                >
                  {copied ? <CheckCircle2 size={18} className="text-green-500" /> : <Copy size={18} />}
                </button>
              </div>

              <div className="flex items-center gap-4 md:gap-6 p-6 glass rounded-3xl">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-brand-indigo/10 flex items-center justify-center text-brand-indigo shrink-0">
                  <MapPin size={24} />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mb-0.5 md:mb-1">Based In</p>
                  <p className="font-bold text-white text-sm md:text-lg truncate">{PERSONAL_INFO.location}, UP, India</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              {SOCIAL_LINKS.map((social) => (
                <a 
                  key={social.name} 
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 glass rounded-2xl flex items-center justify-center text-slate-400 hover:text-brand-blue hover:border-brand-blue/40 transition-all group lg:hover:scale-110"
                  title={social.name}
                >
                  <social.icon size={24} className="group-hover:rotate-12 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative glass p-8 md:p-10 rounded-[2.5rem] border-white/5 hover:border-white/10 transition-all"
            >
              <AnimatePresence mode="wait">
                {formStatus === 'success' ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12 space-y-6"
                  >
                    <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto text-green-500 border border-green-500/20">
                      <CheckCircle2 size={40} />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold text-white">Message Transmitted</h3>
                      <p className="text-slate-400">Thank you, Raushan will get back to you shortly.</p>
                    </div>
                    <button 
                      onClick={() => setFormStatus('idle')}
                      className="px-8 py-3 bg-white/5 border border-white/10 rounded-xl text-white font-bold hover:bg-white/10 transition-all"
                    >
                      Send Another
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Full Name</label>
                        <input 
                          required
                          name="name"
                          type="text" 
                          placeholder="Raushan Kumar"
                          className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-2xl focus:border-brand-blue focus:outline-none transition-all text-white placeholder:text-slate-600 focus:bg-white/10 shadow-inner" 
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Email Address</label>
                        <input 
                          required
                          name="email"
                          type="email" 
                          placeholder="hello@company.com"
                          className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-2xl focus:border-brand-blue focus:outline-none transition-all text-white placeholder:text-slate-600 focus:bg-white/10 shadow-inner" 
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Your Vision</label>
                      <textarea 
                        required
                        name="message"
                        rows={5}
                        placeholder="Describe the opportunity or project..."
                        className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-2xl focus:border-brand-blue focus:outline-none transition-all text-white placeholder:text-slate-600 focus:bg-white/10 shadow-inner resize-none" 
                      />
                    </div>

                    {formStatus === 'error' && (
                      <p className="text-xs text-red-500 font-bold bg-red-500/10 p-3 rounded-xl border border-red-500/20">
                        Transmission failed. Please check your connection and try again.
                      </p>
                    )}

                    <button 
                      disabled={formStatus === 'submitting'}
                      className="w-full py-5 bg-white text-black font-black rounded-2xl hover:bg-brand-blue hover:text-white transition-all flex items-center justify-center gap-3 shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed transform active:scale-95 duration-200"
                    >
                      {formStatus === 'submitting' ? (
                        <>
                          <div className="w-5 h-5 border-2 border-slate-900 border-t-transparent rounded-full animate-spin" />
                          TRANSMITTING...
                        </>
                      ) : (
                        <>
                          INITIATE CONTACT <Send size={20} />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </AnimatePresence>
            </motion.div>
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
          <a 
            key={s.name} 
            href={s.url} 
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-white transition-colors text-xs font-bold uppercase tracking-widest"
          >
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
