/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  Github, 
  Linkedin, 
  Mail, 
  BrainCircuit, 
  Cpu, 
  BarChart3, 
  Code2, 
  Database, 
  Globe, 
  MessageSquare,
  FileText,
  Search,
  Layout,
  Layers,
  Terminal,
  Trophy,
  GraduationCap,
  Calendar,
  MapPin,
  ExternalLink,
  ChevronRight
} from 'lucide-react';

export const PERSONAL_INFO = {
  name: "Raushan Kumar",
  title: "AI Engineer | ML Engineer | Data Scientist",
  tagline: "Transforming Ideas into AI-Powered Solutions",
  bio: "I am an aspiring AI/ML Engineer and Data Science enthusiast passionate about building intelligent systems. Currently pursuing my B.Tech at Noida Institute of Engineering and Technology, I explore Machine Learning, Deep Learning, and software development, transforming curiosity into practical applications that solve real-world problems.",
  email: "raushankrrgupta1@gmail.com",
  phone: "9027459874",
  location: "Greater Noida",
  resumeLink: "https://drive.google.com/file/d/1zXAQ_FmM8che6F3rm5oljgOe93-SN9lO/view?usp=sharing",
  education: {
    degree: "B.Tech CSE (AI & ML)",
    school: "Noida Institute of Engineering and Technology",
    year: "2026"
  }
};

export const SOCIAL_LINKS = [
  { name: "GitHub", url: "https://github.com/raushan0422", icon: Github },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/raushan-kumar-gupta-2aa47b247/", icon: Linkedin },
  { name: "Kaggle", url: "https://www.kaggle.com/raushan0422", icon: BarChart3 }
];

export const SKILLS = [
  { 
    category: "Languages", 
    items: [
      { name: "Python", level: 90 },
      { name: "SQL", level: 85 },
      { name: "HTML5/CSS3", level: 80 }
    ],
    icon: Code2
  },
  { 
    category: "AI/ML Core", 
    items: [
      { name: "Machine Learning", level: 90 },
      { name: "Deep Learning", level: 85 },
      { name: "Computer Vision", level: 85 },
      { name: "NLP", level: 80 },
      { name: "Generative AI", level: 75 }
    ],
    icon: BrainCircuit
  },
  { 
    category: "Tools & Frameworks", 
    items: [
      { name: "TensorFlow/Keras", level: 85 },
      { name: "Scikit-Learn", level: 90 },
      { name: "PyTorch", level: 70 },
      { name: "Streamlit/Flask", level: 85 },
      { name: "Hugging Face", level: 80 }
    ],
    icon: Cpu
  },
  { 
    category: "Data & Cloud", 
    items: [
      { name: "MySQL/MongoDB", level: 85 },
      { name: "Pandas/NumPy", level: 95 },
      { name: "Git/GitHub", level: 90 }
    ],
    icon: Database
  }
];

export const PROJECTS = [
  {
    title: "AI Vehicle Detection & Counting",
    description: "Intelligent computer vision system for real-time traffic monitoring using CNNs.",
    tech: ["Python", "OpenCV", "TensorFlow", "CNN"],
    links: { github: "#", demo: "#" },
    icon: Search
  },
  {
    title: "AI Virtual Assistant (JARVIS)",
    description: "Smart voice-powered assistant capable of task automation and real-time command execution.",
    tech: ["Python", "SpeechRecognition", "NLP", "APIs"],
    links: { github: "#" },
    icon: MessageSquare
  },
  {
    title: "Next Word Prediction Model",
    description: "Deep learning NLP model using LSTM for context-aware predictive text generation.",
    tech: ["Python", "TensorFlow", "Keras", "LSTM"],
    links: { github: "#" },
    icon: Terminal
  },
  {
    title: "Smart Research Summarizer",
    description: "Generative AI assistant for document Q&A and contextual summarization.",
    tech: ["Python", "Streamlit", "LangChain", "LLMs"],
    links: { github: "#" },
    icon: FileText
  }
];

export const EXPERIENCE = [
  {
    role: "LLM Post-Training Intern",
    company: "Ethara AI",
    duration: "Feb 2026 – Present",
    points: [
      "Evaluated LLM responses and prompt engineering (CoT, Few-shot).",
      "Identified hallucinations and bias in 500+ annotated samples.",
      "Contributed to RLHF workflows for model optimization."
    ],
    tech: ["Prompt Engineering", "NLP", "RLHF", "Generative AI"]
  },
  {
    role: "Data Science Intern",
    company: "Celebal Technologies",
    duration: "June 2025 – Aug 2025",
    points: [
      "Built image classification system (SVM & Random Forest) on 10k+ images.",
      "Achieved 91% accuracy, a 12% improvement over baseline.",
      "Applied feature extraction and data balancing techniques."
    ],
    tech: ["Python", "Machine Learning", "OpenCV", "Scikit-Learn"]
  }
];

export const ACHIEVEMENTS = [
  { title: "Microsoft Hackathon Finalist", detail: "Top 40 out of 5,000 teams" },
  { title: "MLH Electrothon 6.0 Winner", detail: "Track Winner at NIT Hamirpur" },
  { title: "HackFed Finalist", detail: "Top 5 Teams at GBU" },
  { title: "Head Organizer", detail: "NIET x Microsoft SKYNET (1200+ registrations)" }
];
