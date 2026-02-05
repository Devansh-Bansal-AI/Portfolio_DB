import { 
  Code2, 
  Cpu, 
  Globe, 
  Github, 
  Linkedin, 
  Twitter, 
  Award, 
  BookOpen,
  Sparkles,
  Database,
  BarChart3,
  Cloud,
  Terminal
} from "lucide-react";

// --- Social Links ---
export const socialLinks = [
  { 
    name: "GitHub", 
    icon: Github, 
    link: "https://github.com/Devansh-Bansal-AI" 
  },
  { 
    name: "LinkedIn", 
    icon: Linkedin, 
    link: "https://www.linkedin.com/in/devansh-bansal-772b9a237/" 
  },
  { 
    name: "X (Twitter)", 
    icon: Twitter, 
    link: "https://x.com/Devansh90586531" 
  }
];

// --- Navbar ---
export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Education", href: "#education" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

// --- Education History ---
export const educationData = [
  {
    title: "B.Tech in Computer Science & Engineering",
    institution: "VIT BHOPAL UNIVERSITY",
    year: "2024 - 2028",
    desc: "Focused on AI, Data Science, and Full Stack Web Development. Active technical core member of the UX club.",
    icon: Cpu,
  },
  {
    title: "Higher Secondary (12th Grade)",
    institution: "Saraf Public School",
    year: "2022 - 2024",
    desc: "Major in Physics, Chemistry, and Mathematics (PCM).",
    icon: BookOpen,
  },
];

// --- Certifications ---
export const certificationData = [
  {
    title: "Gemini Certified Student",
    issuer: "Google Career Certificates",
    date: "Nov 2025",
    icon: Sparkles,
  },
  {
    title: "Oracle Cloud Infrastructure 2025 Certified Data Science Professional",
    issuer: "Oracle",
    date: "Oct 2025",
    icon: Database,
  },
  {
    title: "Data Analytics Job Simulation",
    issuer: "Deloitte Australia (Forage)",
    date: "Aug 2025",
    icon: BarChart3,
  },
  {
    title: "Qode & Play Certificate of Completion",
    issuer: "AWS Cloud Club VITBHOPAL",
    date: "Aug 2025",
    icon: Cloud,
  },
  {
    title: "Certified MATLAB Professional",
    issuer: "MATLAB Coding",
    date: "Aug 2025",
    icon: Terminal,
  },
  {
    title: "Insights on Computational Data Science",
    issuer: "Indiana University Indianapolis",
    date: "Dec 2024",
    icon: Globe,
  },
];

// --- Projects (Updated from Screenshot) ---
export const projectsData = [
  {
    title: "Flower Disease Detection",
    description: "A CNN-based system for detecting diseases in flowers using deep learning techniques.",
    tags: ["Python", "TensorFlow", "CNN"],
    image: "https://placehold.co/600x400/6C63FF/ffffff?text=Flower+Disease+Detection", // Replaced with matching placeholder
    link: "#",
  },
  {
    title: "AI Drug-related Codewords Detection",
    description: "An AI system that detects drug-related codewords on social media platforms to prevent illicit activities.",
    tags: ["Python", "NLP", "Machine Learning"],
    image: "https://placehold.co/600x400/6C63FF/ffffff?text=AI+Drug+Detection",
    link: "#",
  },
  {
    title: "Email Fraud Detection System",
    description: "A Streamlit-based web application that detects fraudulent emails using machine learning algorithms.",
    tags: ["Python", "Streamlit", "ML"],
    image: "https://placehold.co/600x400/6C63FF/ffffff?text=Email+Fraud+Detection",
    link: "#",
  },
];