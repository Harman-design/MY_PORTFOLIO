// ─── Personal Info ────────────────────────────────────────────────────────────

export const PERSONAL = {
  name: "Harmanpreet Kaur",
  initials: "HK",
  title: "Computer Science Engineering Student",
  subtitle: "Frontend Developer · AI & Data Science Enthusiast",
  email: "hk466967@gmail.com",
  location: "Chennai, Tamil Nadu, India",
  university: "SRM Institute of Science and Technology",
  degree: "B.Tech Computer Science Engineering",
  year: "2nd Year (2024–2028)",
  github: "https://github.com/harmanpreetkaur",
  linkedin: "https://linkedin.com/in/harmanpreet-kaur-9b70ab32b/",
  resume: "/pdf24_converted.pdf",
  bio: [
    "I'm a passionate 2nd-year B.Tech Computer Science Engineering student at SRM Institute of Science and Technology, Chennai, with a deep interest in AI, Data Science, and building impactful technology solutions.",
    "I thrive at the intersection of design and engineering — creating beautiful interfaces powered by intelligent backends. From AI-powered civic platforms to mobile blood donation apps, I approach every challenge with curiosity, creativity, and relentless execution.",
    "Currently seeking internship opportunities where I can contribute to meaningful products and accelerate my growth as an engineer.",
  ],
  traits: [
    { label: "Leadership", icon: "🎯" },
    { label: "Hardworking", icon: "💪" },
    { label: "Problem Solver", icon: "🧠" },
    { label: "Team Player", icon: "🤝" },
    { label: "Quick Learner", icon: "⚡" },
  ],
};

// ─── Typing roles ─────────────────────────────────────────────────────────────

export const TYPING_ROLES = [
  "Frontend Developer",
  "AI Enthusiast",
  "Data Science Learner",
  "Problem Solver",
  "Full Stack Builder",
  "Open Source Contributor",
];

// ─── Hero stats ───────────────────────────────────────────────────────────────

export const HERO_STATS = [
  { value: "4+", label: "Projects Built" },
  { value: "3", label: "Internships" },
  { value: "10+", label: "Technologies" },
  { value: "2nd", label: "Year B.Tech" },
];

// ─── About Stats ──────────────────────────────────────────────────────────────

export const ABOUT_STATS = [
  { value: "4+", label: "Projects Completed", icon: "🚀" },
  { value: "3", label: "Internship Experience", icon: "💼" },
  { value: "1yr+", label: "Frontend Development", icon: "⚛️" },
  { value: "5+", label: "Languages Known", icon: "🧑‍💻" },
];

// ─── Skills ───────────────────────────────────────────────────────────────────

export const SKILL_CATEGORIES = [
  {
    id: "programming",
    label: "Programming Languages",
    icon: "⚙️",
    color: "purple",
    skills: [
      { name: "Python", level: 85, icon: "🐍" },
      { name: "JavaScript", level: 82, icon: "🟨" },
      { name: "TypeScript", level: 72, icon: "🔷" },
      { name: "C++", level: 75, icon: "⚡" },
      { name: "C", level: 70, icon: "📟" },
    ],
  },
  {
    id: "frontend",
    label: "Frontend Development",
    icon: "🎨",
    color: "cyan",
    skills: [
      { name: "React", level: 84, icon: "⚛️" },
      { name: "Next.js", level: 76, icon: "▲" },
      { name: "Tailwind CSS", level: 90, icon: "💨" },
      { name: "HTML5", level: 94, icon: "🌐" },
      { name: "CSS3", level: 88, icon: "🎭" },
    ],
  },
  {
    id: "backend",
    label: "Backend & Database",
    icon: "🛠️",
    color: "amber",
    skills: [
      { name: "Node.js", level: 72, icon: "🟢" },
      { name: "Express.js", level: 68, icon: "🚂" },
      { name: "MongoDB", level: 70, icon: "🍃" },
      { name: "Firebase", level: 74, icon: "🔥" },
      { name: "REST APIs", level: 80, icon: "🔌" },
    ],
  },
  {
    id: "tools",
    label: "Tools & Platforms",
    icon: "🔧",
    color: "green",
    skills: [
      { name: "Git", level: 86, icon: "📌" },
      { name: "GitHub", level: 88, icon: "🐙" },
      { name: "VS Code", level: 92, icon: "💙" },
      { name: "Figma", level: 70, icon: "🖌️" },
      { name: "Flutter", level: 66, icon: "💙" },
    ],
  },
];

// ─── Experience ───────────────────────────────────────────────────────────────

export const EXPERIENCES = [
  {
    id: 1,
    company: "SkillCraft Technology",
    role: "Frontend Developer Intern",
    period: "Jun 2024 – Aug 2024",
    type: "Internship",
    logo: "SC",
    logoColor: "#7c3aed",
    location: "Remote",
    description:
      "Built responsive, accessible UI components and implemented pixel-perfect designs from Figma mockups. Collaborated closely with the design team and contributed to multiple product features shipped to production.",
    achievements: [
      "Built 12+ reusable React component library modules used across the product",
      "Improved Lighthouse performance score from 68 → 91 on key landing pages",
      "Implemented advanced CSS animations and micro-interactions improving UX metrics",
      "Participated in agile sprints, code reviews, and daily standups",
    ],
    tech: ["React", "JavaScript", "CSS3", "Figma", "Git", "REST APIs"],
  },
  {
    id: 2,
    company: "ShadowFox",
    role: "Web Development Intern",
    period: "Sep 2024 – Nov 2024",
    type: "Internship",
    logo: "SF",
    logoColor: "#06b6d4",
    location: "Remote",
    description:
      "Developed full-stack web application features using modern JavaScript frameworks. Gained hands-on experience with backend API design, database integration, and deploying production-ready applications.",
    achievements: [
      "Developed 8 RESTful API endpoints integrated with MongoDB Atlas",
      "Built a real-time notification system using WebSockets",
      "Reduced API response time by 40% through query optimization and caching",
      "Contributed to CI/CD pipeline setup and automated testing workflows",
    ],
    tech: ["Next.js", "Node.js", "MongoDB", "Express.js", "TypeScript", "Vercel"],
  },
];

// ─── Projects ─────────────────────────────────────────────────────────────────

export const PROJECTS = [
  {
    id: 1,
    title: "CleanCity Connect",
    tagline: "AI-Powered Civic Issue Platform",
    description:
      "A full-stack AI-powered civic issue reporting platform enabling citizens to report waste management and cleanliness issues with image uploads, real-time tracking, and an intelligent admin dashboard.",
    longDescription:
      "CleanCity Connect bridges the gap between citizens and municipal authorities. Citizens can report issues with geo-tagged photos, while AI automatically categorizes and prioritizes complaints. Authorities get a powerful dashboard with analytics, heatmaps, and status management.",
    emoji: "🌿",
    gradient: "from-purple-900/50 via-slate-900 to-slate-900",
    accentColor: "rgba(124, 58, 237, 0.5)",
    glowColor: "rgba(124, 58, 237, 0.25)",
    featured: true,
    status: "Completed",
    features: [
      "AI-powered complaint categorization",
      "Image upload with geo-tagging",
      "Real-time issue tracking system",
      "Admin analytics dashboard",
      "Email/SMS notification system",
      "Public heatmap visualization",
    ],
    tech: ["React", "Node.js", "MongoDB", "Express.js", "Cloudinary", "Google Maps API"],
    github: "https://github.com/aadharkulshrestha/Urban-waste-management",
    demo: "https://cleancity-connect.vercel.app",
    stats: { stars: 24, forks: 8 },
  },
  {
    id: 2,
    title: "Placement Advisor",
    tagline: "AI Career Guidance Platform",
    description:
      "An AI-powered placement preparation and career guidance platform that helps students land their dream tech jobs through personalized resume analysis, job recommendations, and interview prep.",
    longDescription:
      "Placement Advisor uses AI to analyze resumes against job descriptions, identify skill gaps, and generate personalized preparation roadmaps. Students get company-specific interview questions, mock tests, and progress tracking.",
    emoji: "🎯",
    gradient: "from-cyan-900/50 via-slate-900 to-slate-900",
    accentColor: "rgba(6, 182, 212, 0.5)",
    glowColor: "rgba(6, 182, 212, 0.25)",
    featured: true,
    status: "In Progress",
    features: [
      "AI resume analysis & ATS scoring",
      "Personalized job recommendations",
      "Company-specific interview questions",
      "Mock interview simulator",
      "Skill gap analysis & roadmaps",
      "Progress tracking dashboard",
    ],
    tech: ["Next.js", "TypeScript", "MongoDB", "Claude API", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/aadharkulshrestha/Placement-Advisor-Final",
    demo: "https://placement-advisor.vercel.app",
    stats: { stars: 31, forks: 12 },
  },
  {
    id: 3,
    title: "Raktsanchar",
    tagline: "Blood Donation Mobile App",
    description:
      "A Flutter-based blood donation and donor management application connecting donors with recipients during emergencies, featuring real-time donor matching and push notifications.",
    longDescription:
      "Raktsanchar ('blood circulation') is a life-saving mobile application that maintains a database of blood donors, enables emergency requests with radius-based matching, and sends instant push notifications to compatible donors.",
    emoji: "🩸",
    gradient: "from-red-900/40 via-slate-900 to-slate-900",
    accentColor: "rgba(239, 68, 68, 0.5)",
    glowColor: "rgba(239, 68, 68, 0.2)",
    featured: false,
    status: "Completed",
    features: [
      "Donor registration & profile management",
      "Emergency blood request system",
      "Radius-based donor matching",
      "Push notification alerts",
      "Blood bank directory",
      "Donation history tracking",
    ],
    tech: ["Flutter", "Dart", "Firebase", "Cloud Firestore", "Cloud Messaging", "Google Maps"],
    github: "https://github.com/Harman-design/raktsanchar",
    demo: "#",
    stats: { stars: 18, forks: 5 },
  },
  {
    id: 4,
    title: "Heritage Travel Planner",
    tagline: "AI Heritage Tourism Platform",
    description:
      "An intelligent travel recommendation platform for heritage tourism featuring AI-generated personalized itineraries, cultural insights, and an interactive discovery experience.",
    longDescription:
      "Heritage Travel Planner makes India's rich cultural heritage accessible through intelligent travel planning. Users input their interests and duration, and the AI generates detailed day-by-day itineraries with historical context, travel tips, and local cuisine recommendations.",
    emoji: "🏛️",
    gradient: "from-amber-900/40 via-slate-900 to-slate-900",
    accentColor: "rgba(245, 158, 11, 0.5)",
    glowColor: "rgba(245, 158, 11, 0.2)",
    featured: false,
    status: "Completed",
    features: [
      "AI-personalized itinerary generation",
      "Heritage site discovery & search",
      "Interactive maps integration",
      "Cultural insights & history",
      "Local cuisine recommendations",
      "Offline-capable PWA",
    ],
    tech: ["React", "JavaScript", "Google Maps API", "OpenWeather API", "CSS3", "PWA"],
    github: "https://github.com/aadharkulshrestha/Heritage-Tour-Planner-Full-Stack",
    demo: "https://heritage-travel.vercel.app",
    stats: { stars: 15, forks: 4 },
  },
];

// ─── Achievements ─────────────────────────────────────────────────────────────

export const ACHIEVEMENTS = [
  {
    id: 1,
    title: "Internship at SkillCraft Technology",
    description:
      "Successfully completed a 3-month Frontend Developer internship, contributing to production features and improving overall code quality.",
    icon: "🏅",
    category: "Work Experience",
    color: "purple",
    year: "2024",
  },
  {
    id: 2,
    title: "Internship at ShadowFox",
    description:
      "Completed a full-stack Web Development internship, building scalable APIs and contributing to the core product.",
    icon: "💼",
    category: "Work Experience",
    color: "cyan",
    year: "2024",
  },
  {
    id: 3,
    title: "Python for Data Science — IBM Certification",
    description:
      "Earned IBM's Python for Data Science certification covering NumPy, Pandas, Matplotlib, and foundational ML concepts.",
    icon: "📜",
    category: "Certification",
    color: "amber",
    year: "2024",
  },
  {
    id: 4,
    title: "React Developer Certification",
    description:
      "Completed comprehensive React certification covering hooks, context, state management, testing, and performance optimization.",
    icon: "⚛️",
    category: "Certification",
    color: "green",
    year: "2024",
  },
  {
    id: 5,
    title: "SRM Hackathon — Top 10 Finalist",
    description:
      "Reached the top 10 in SRM's annual hackathon with CleanCity Connect — an AI civic tech solution for urban sanitation.",
    icon: "🏆",
    category: "Competition",
    color: "purple",
    year: "2024",
  },

  {
    id: 6,
    title: "Academic Excellence — CGPA 10",
    description:
      "Maintained a strong CGPA of 10 while simultaneously completing internships and building real-world projects.",
    icon: "🎓",
    category: "Academic",
    color: "green",
    year: "2024-2026",
  },
];

// ─── GitHub ───────────────────────────────────────────────────────────────────

export const GITHUB_STATS = [
  { label: "Public Repos", value: "12", icon: "📁" },
  { label: "Total Commits", value: "340+", icon: "💾" },
  { label: "Contributions", value: "280+", icon: "📊" },
  { label: "Languages", value: "6", icon: "💻" },
  { label: "Stars Earned", value: "88", icon: "⭐" },
  { label: "Pull Requests", value: "24", icon: "🔀" },
];

export const GITHUB_LANGUAGES = [
  { name: "JavaScript", percentage: 38, color: "#f7df1e" },
  { name: "Python", percentage: 26, color: "#3776ab" },
  { name: "TypeScript", percentage: 20, color: "#3178c6" },
  { name: "Dart", percentage: 10, color: "#0175c2" },
  { name: "CSS", percentage: 4, color: "#563d7c" },
  { name: "Other", percentage: 2, color: "#555" },
];

export const GITHUB_USERNAME = "harmanpreetkaur";

// ─── Contact ──────────────────────────────────────────────────────────────────

export const CONTACT_LINKS = [
  {
    label: "Email",
    value: "hk466967@gmail.com",
    href: "mailto:hk466967@gmail.com",
    icon: "Mail",
    color: "#7c3aed",
    bg: "rgba(124,58,237,0.12)",
    border: "rgba(124,58,237,0.25)",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/harmanpreet-kaur-9b70ab32b/",
    href: "https://www.linkedin.com/in/harmanpreet-kaur-9b70ab32b/",
    icon: "Linkedin",
    color: "#0077b5",
    bg: "rgba(0,119,181,0.12)",
    border: "rgba(0,119,181,0.25)",
  },
  {
    label: "GitHub",
    value: "github.com/Harman-design",
    href: "https://github.com/Harman-design",
    icon: "Github",
    color: "#e2e8f0",
    bg: "rgba(255,255,255,0.07)",
    border: "rgba(255,255,255,0.15)",
  },
  {
    label: "Resume",
    value: "Download PDF",
    href: "/pdf24_converted.pdf",
    icon: "FileText",
    color: "#06b6d4",
    bg: "rgba(6,182,212,0.12)",
    border: "rgba(6,182,212,0.25)",
  },
];

// ─── Nav Links ────────────────────────────────────────────────────────────────

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Achievements", href: "#achievements" },
  { label: "GitHub", href: "#github" },
  { label: "Contact", href: "#contact" },
];

// ─── HarmanGPT System Prompt ──────────────────────────────────────────────────

export const HARMANGPT_SYSTEM = `You are HarmanGPT, the personal AI assistant embedded in Harmanpreet Kaur's portfolio website. Your job is to answer questions about her background, skills, projects, and experience in a warm, concise, and professional way.

HARMANPREET'S PROFILE:
- Full Name: Harmanpreet Kaur
- Education: B.Tech Computer Science Engineering, 2nd Year (2024-2028) at SRM Institute of Science and Technology, Chennai
- Current CGPA: 10
- Passion Areas: AI/ML, Data Science, Full Stack Web Development, Frontend Engineering

TECHNICAL SKILLS:
Languages: Python (85%), JavaScript (82%), TypeScript (72%), C++ (75%), C (70%)
Frontend: React (84%), Next.js (76%), Tailwind CSS (90%), HTML5 (94%), CSS3 (88%)
Backend: Node.js (72%), Express.js (68%), MongoDB (70%), Firebase (74%), REST APIs (80%)
Tools: Git (86%), GitHub (88%), VS Code (92%), Figma (70%), Flutter (66%)

EXPERIENCE:
1. SkillCraft Technology — Frontend Developer Intern (Jun–Aug 2024)
   - Built 12+ reusable React component modules
   - Improved Lighthouse score from 68 to 91
   - Worked with React, JavaScript, CSS3, Figma

2. ShadowFox — Web Development Intern (Sep–Nov 2024)
   - Built 8 RESTful API endpoints with MongoDB Atlas
   - Reduced API response time by 40%
   - Tech: Next.js, Node.js, MongoDB, Express.js

PROJECTS:
1. CleanCity Connect — AI civic issue reporting platform (React, Node.js, MongoDB) — Featured
2. Placement Advisor — AI career guidance platform (Next.js, Claude API, MongoDB) — In Progress
3. Raktsanchar — Flutter blood donation app (Flutter, Firebase, Cloud Messaging)
4. Heritage Travel Planner — AI heritage tourism platform (React, Google Maps API)

ACHIEVEMENTS:
- Top 10 SRM Hackathon Finalist with CleanCity Connect
- IBM Python for Data Science Certification
- CGPA 10 in academics

PERSONALITY TRAITS: Leadership skills, Hardworking, Problem Solver, Team Player, Quick Learner

CONTACT: hk466967@gmail.coom | LinkedIn: linkedin.com/in/harmanpreet-kaur-9b70ab32b/

RESPONSE GUIDELINES:
- Keep answers concise (2-4 sentences max)
- Be warm and enthusiastic about Harmanpreet's work
- For questions about contacting her, direct to the Contact section
- If asked about something not in the profile, politely say you don't have that information
- Never make up facts or statistics
- Occasionally add relevant emoji to make responses friendly
- End technical answers by inviting follow-up questions`;

// ─── Floating tech icons for hero ─────────────────────────────────────────────

export const FLOATING_ICONS = [
  { icon: "⚛️", x: "8%", y: "22%", delay: 0, duration: 6.5, label: "React" },
  { icon: "🐍", x: "88%", y: "18%", delay: 1.2, duration: 7.5, label: "Python" },
  { icon: "🤖", x: "5%", y: "68%", delay: 2.1, duration: 8, label: "AI" },
  { icon: "⚡", x: "92%", y: "70%", delay: 0.6, duration: 6, label: "Performance" },
  { icon: "🧠", x: "50%", y: "7%", delay: 3, duration: 9, label: "ML" },
  { icon: "💻", x: "82%", y: "44%", delay: 1.5, duration: 7, label: "Dev" },
  { icon: "🎯", x: "14%", y: "44%", delay: 2.8, duration: 7.8, label: "Goals" },
  { icon: "🚀", x: "46%", y: "91%", delay: 0.9, duration: 8.5, label: "Launch" },
];

// ─── Achievement category colors ──────────────────────────────────────────────

export const ACHIEVEMENT_COLORS: Record<string, { bg: string; border: string; text: string; glow: string }> = {
  purple: {
    bg: "rgba(124,58,237,0.12)",
    border: "rgba(124,58,237,0.25)",
    text: "#a78bfa",
    glow: "rgba(124,58,237,0.3)",
  },
  cyan: {
    bg: "rgba(6,182,212,0.12)",
    border: "rgba(6,182,212,0.25)",
    text: "#67e8f9",
    glow: "rgba(6,182,212,0.3)",
  },
  amber: {
    bg: "rgba(245,158,11,0.12)",
    border: "rgba(245,158,11,0.25)",
    text: "#fcd34d",
    glow: "rgba(245,158,11,0.3)",
  },
  green: {
    bg: "rgba(34,197,94,0.12)",
    border: "rgba(34,197,94,0.25)",
    text: "#86efac",
    glow: "rgba(34,197,94,0.3)",
  },
};
