export const personalInfo = {
  name: "Mina Raafat Fakry",
  shortName: "Mina Raafat",
  role: "Frontend Developer (Vue.js)",
  email: "minarafat113@gmail.com",
  phone: "+201278889860",
  phoneDisplay: "01278889860",
  location: "Cairo, Egypt",
  github: "https://github.com/monz7",
  githubUsername: "monz7",
  linkedin: "https://www.linkedin.com/in/mina-raafat-fakry/",
  whatsapp: "https://wa.me/201278889860",
  summary: "Frontend Developer specializing in Vue.js with a focus on building interactive and scalable web applications. Proficient in modern JavaScript (ES6+), Vue 3 (Composition API), and state management using Pinia. Passionate about transforming complex designs into pixel-perfect, responsive user interfaces while following clean code architecture and software engineering best practices.",
  statusBadge: "Available for Opportunities",
  stats: [
    { label: "Projects Completed", value: "5+" },
    { label: "Core Framework", value: "Vue 3" },
    { label: "Verified Certifications", value: "4" },
    { label: "Code Quality", value: "Pixel-Perfect" }
  ]
}

export const experiences = [
  {
    role: "Frontend Developer Intern",
    company: "Zumra Food",
    period: "Internship",
    location: "Cairo, Egypt",
    type: "Work Experience",
    points: [
      "Developed and maintained responsive web interfaces using Vue.js, ensuring a seamless user experience across different devices.",
      "Collaborated with the design team to transform UI/UX wireframes into functional and interactive frontend components.",
      "Integrated RESTful APIs to display dynamic content and handled application state management.",
      "Participated in debugging, testing, and optimizing frontend performance to enhance user engagement.",
      "Applied software engineering best practices to write clean, maintainable, and reusable code."
    ],
    skills: ["Vue.js", "Composition API", "RESTful APIs", "State Management", "Responsive UI"]
  },
  {
    role: "Bachelor of Computer Science",
    company: "Modern Academy for Engineering and Technology",
    period: "09/2023 – Present",
    location: "Cairo, Egypt",
    type: "Education",
    points: [
      "Studying core computer science fundamentals, data structures, algorithms, object-oriented programming, and software engineering principles.",
      "Building practical software projects and refining modern web development practices."
    ],
    skills: ["Computer Science", "Data Structures", "Algorithms", "Software Engineering"]
  }
]

export const skillsCategories = [
  {
    name: "Frontend Core",
    icon: "code",
    skills: [
      { name: "Vue.js (Vue 3 / Composition API)", level: 95, tag: "Primary" },
      { name: "JavaScript (ES6+)", level: 90, tag: "Core" },
      { name: "HTML5 & Semantic Markup", level: 95, tag: "Foundation" },
      { name: "CSS3 & Modern Animations", level: 90, tag: "Foundation" }
    ]
  },
  {
    name: "State & Architecture",
    icon: "layers",
    skills: [
      { name: "Pinia State Management", level: 92, tag: "Primary" },
      { name: "Vuex", level: 85, tag: "State" },
      { name: "Vue Router", level: 90, tag: "Routing" },
      { name: "RESTful APIs & Axios", level: 92, tag: "Integration" }
    ]
  },
  {
    name: "Styling & UI Systems",
    icon: "palette",
    skills: [
      { name: "Tailwind CSS", level: 95, tag: "Primary" },
      { name: "Bootstrap", level: 88, tag: "Framework" },
      { name: "Responsive Web Design", level: 98, tag: "Essential" },
      { name: "Glassmorphism & Micro-UI", level: 90, tag: "Design" }
    ]
  },
  {
    name: "Tools & Workflow",
    icon: "wrench",
    skills: [
      { name: "Git & GitHub", level: 90, tag: "Version Control" },
      { name: "Vite & Modern Bundlers", level: 90, tag: "Build Tool" },
      { name: "Postman API Testing", level: 85, tag: "Testing" },
      { name: "NPM & Package Ecosystem", level: 90, tag: "Tooling" },
      { name: "Vercel Deployment", level: 88, tag: "CI/CD" }
    ]
  }
]

export const certificates = [
  {
    id: "itida-eyouth",
    title: "Freelance Training Program (3 Months)",
    issuer: "ITIDA & EYouth (itida+gigs)",
    signee: "Eng. Ahmed El-Zaher (CEO, ITIDA)",
    credentialId: "ITIDA-GIGS-FREELANCE",
    image: "/certificates/itida-eyouth.jpg",
    badge: "Official Certificate",
    year: "Graduated",
    description: "Successfully graduated from the rigorous 3-month ITIDA Gigs freelance training program, certifying proficiency in technical execution, client delivery, and professional freelance workflows.",
    skills: ["Freelance Web Development", "Client Communication", "Project Delivery", "Agile Execution"]
  },
  {
    id: "sprints-microsoft",
    title: "Web Development Summer Camp",
    issuer: "Sprints | Microsoft",
    signee: "Ayman Bazaraa (CEO, Sprints)",
    credentialId: "SPR - P12W1D",
    image: "/certificates/sprints-microsoft.png",
    badge: "Microsoft x Sprints",
    year: "40 Hours Workload",
    description: "Certified completion of the Microsoft & Sprints intensive web development track, mastering core modern web standards, engineering methodologies, and hands-on coding challenges.",
    skills: ["Modern Web Development", "JavaScript", "Responsive Design", "Problem Solving"]
  },
  {
    id: "route-academy",
    title: "Frontend Development (Vue.js) Track",
    issuer: "Route Academy",
    signee: "Route Academy Instructors",
    credentialId: "ROUTE-VUE-FRONTEND",
    image: null,
    badge: "Professional Track",
    year: "Certified Track",
    description: "In-depth professional training program specialized in modern Vue.js development, Composition API, Pinia, Vue Router, component-driven architecture, and REST API integration.",
    skills: ["Vue.js 3", "Composition API", "Pinia", "RESTful APIs", "Vue Router"]
  },
  {
    id: "sprints-fundamentals",
    title: "Web Development Fundamentals",
    issuer: "Sprints",
    signee: "Sprints Academic Team",
    credentialId: "SPR-WEB-FUNDAMENTALS",
    image: null,
    badge: "Fundamentals",
    year: "Certified Course",
    description: "Comprehensive foundational certification encompassing client-server architecture, modern DOM manipulation, semantic structures, and responsive layouts.",
    skills: ["Web Fundamentals", "HTML5/CSS3", "DOM Architecture", "Responsive Layouts"]
  }
]

export const projects = [
  {
    id: "freshcart",
    title: "FreshCart",
    subtitle: "E-commerce Web Application",
    category: "Vue.js",
    featured: true,
    description: "A full-fledged, high-performance e-commerce platform built with Vue.js 3 and Tailwind CSS. Features complete authentication flow, interactive shopping cart, dynamic product catalog with real-time search & filters, and integrated checkout flow.",
    tags: ["Vue.js 3", "Tailwind CSS", "Pinia", "RESTful API", "Vue Router"],
    liveUrl: "https://freshcart-mauve-omega.vercel.app",
    githubUrl: "https://github.com/monz7/FreshCart",
    gradient: "from-emerald-500/20 to-teal-500/10",
    accentColor: "emerald",
    features: [
      "Dynamic product catalog with multi-criteria category filtering and live search",
      "Robust Authentication system (Login, Registration, and Password Recovery)",
      "Global application state management using Pinia for cart & session sync",
      "Seamless checkout experience connected to real-world RESTful APIs",
      "100% Responsive, mobile-first design with Tailwind CSS"
    ]
  },
  {
    id: "3dsh",
    title: "3DSH (عدسة - عالم التصوير)",
    subtitle: "Photography World Platform",
    category: "Vue.js",
    featured: true,
    description: "An elegant, interactive photography and creative visual showcase web application built with Vue.js. Provides a rich aesthetic experience for exploring curated photography albums with smooth transitions.",
    tags: ["Vue.js 3", "Composition API", "Tailwind / CSS3", "Responsive UI", "Vercel"],
    liveUrl: "https://3-dsh-3alm-altsoyr.vercel.app",
    githubUrl: "https://github.com/monz7/3DSH-3almAltsoyr",
    gradient: "from-cyan-500/20 to-blue-500/10",
    accentColor: "cyan",
    features: [
      "Modern interactive visual album explorer with smooth animations",
      "Optimized media loading and fluid touch interactions for mobile",
      "Component-based architecture powered by Vue 3 Composition API",
      "Tailored artistic UI with sleek dark aesthetic"
    ]
  },
  {
    id: "whats-for-dinner",
    title: "What's For Dinner",
    subtitle: "Recipe Discovery & Meal Planner",
    category: "JavaScript",
    featured: false,
    description: "An engaging web app solving the daily dinner dilemma! Dynamically fetches and suggests delicious meals and recipes via third-party APIs with full ingredient breakdown and instructions.",
    tags: ["JavaScript (ES6+)", "RESTful APIs", "HTML5", "CSS3", "Bootstrap"],
    liveUrl: "https://github.com/monz7/-What-s-For-Dinner",
    githubUrl: "https://github.com/monz7/-What-s-For-Dinner",
    gradient: "from-amber-500/20 to-orange-500/10",
    accentColor: "amber",
    features: [
      "Random and category-based meal suggestions via REST APIs",
      "Interactive recipe modal with ingredients list and preparation guide",
      "Clean, responsive UI with quick search functionality"
    ]
  },
  {
    id: "contacthub",
    title: "ContactHub",
    subtitle: "Comprehensive Contact Management CRUD",
    category: "JavaScript",
    featured: false,
    description: "A full-featured Contact Management CRUD application with real-time search, robust input validation, and persistent storage.",
    tags: ["JavaScript (ES6+)", "HTML5 / CSS3", "CRUD Architecture", "Local Storage"],
    liveUrl: "https://github.com/monz7/ContactHub",
    githubUrl: "https://github.com/monz7/ContactHub",
    gradient: "from-indigo-500/20 to-purple-500/10",
    accentColor: "indigo",
    features: [
      "Full CRUD functionality (Add, Edit, Delete, View contacts)",
      "Instant live search filter as the user types",
      "Client-side form validation and persistent data storage"
    ]
  },
  {
    id: "clarity",
    title: "Clarity",
    subtitle: "Modern Responsive Landing Page",
    category: "Web Apps",
    featured: false,
    description: "A clean, modern, and accessible landing page experience showcasing responsive typography, flexible layouts, and micro-interactions.",
    tags: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    liveUrl: "https://github.com/monz7/Clarity",
    githubUrl: "https://github.com/monz7/Clarity",
    gradient: "from-teal-500/20 to-emerald-500/10",
    accentColor: "teal",
    features: [
      "Fluid responsive layout tested across multiple viewports",
      "Modern aesthetic with subtle hover states and accessible elements",
      "Semantic HTML structure optimized for performance"
    ]
  }
]
