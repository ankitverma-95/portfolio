export const personalInfo = {
  name: "Ankit Verma",
  role: "Full Stack Developer & Software Engineer",
  bio: "Full Stack Developer with 2+ years of experience building scalable, high-performance web applications across frontend (React, Next.js, Angular) and backend (Java Spring Boot, Node.js) ecosystems. Specialized in microservices architecture, decoupled RESTful APIs, and responsive, interactive digital experiences.",
  phone: "+91 9315694385",
  email: "av6007616@gmail.com",
  location: "Delhi, India",
  birthday: "Sep 25, 2002",
  avatar: "/img/user.png",
  resumeUrl: "/download-cv",
  github: "https://github.com/ankitverma-95",
  linkedin: "https://www.linkedin.com/in/ankitverma-95",
};

export const stats = [
  { label: "Years Experience", value: "2+" },
  { label: "Projects Completed", value: "15+" },
  { label: "Tech Stack Tools", value: "18+" },
  { label: "Code Quality", value: "100%" },
];

export const services = [
  {
    title: "Web Development",
    icon: "Globe",
    description: "Designing and engineering responsive, high-speed full-stack web applications using React, Next.js, Tailwind CSS, and Node.js.",
  },
  {
    title: "Backend & API Design",
    icon: "Server",
    description: "Architecting resilient microservices, high-throughput RESTful APIs, and asynchronous messaging with Java Spring Boot and Kafka.",
  },
  {
    title: "Mobile App Development",
    icon: "Smartphone",
    description: "Developing cross-platform mobile apps for Android & iOS using Flutter and Dart with real-time Firebase cloud integration.",
  },
  {
    title: "Database & Cloud Architecture",
    icon: "Database",
    description: "Data modeling, indexing, schema optimization, and automated migrations across MongoDB, MySQL, and PostgreSQL.",
  },
];

export const skillsData = {
  languages: [
    { name: "Java", level: 92 },
    { name: "JavaScript (ES6+)", level: 90 },
    { name: "TypeScript", level: 85 },
    { name: "SQL", level: 88 },
    { name: "Dart", level: 78 },
    { name: "HTML5 / CSS3", level: 95 },
  ],
  frameworks: [
    { name: "Spring Boot", level: 92 },
    { name: "React.js", level: 90 },
    { name: "Next.js", level: 88 },
    { name: "Node.js & Express", level: 87 },
    { name: "Angular", level: 75 },
    { name: "Flutter", level: 80 },
    { name: "Tailwind CSS", level: 92 },
    { name: "Apache Kafka", level: 78 },
  ],
  databases: [
    { name: "MongoDB", level: 88 },
    { name: "MySQL", level: 90 },
    { name: "PostgreSQL", level: 84 },
    { name: "Firebase", level: 85 },
  ],
  tools: [
    "Git & GitHub",
    "Docker",
    "Postman",
    "VS Code",
    "IntelliJ IDEA",
    "Android Studio",
    "Microservices",
    "REST APIs",
    "CI/CD Pipelines",
    "Vercel",
  ],
};

export const experiences = [
  {
    role: "Full Stack Developer",
    company: "Blu Parrot Ventures Pvt. Ltd.",
    location: "Gurugram, Delhi NCR",
    period: "Feb 2026 - Present",
    type: "Full-Time",
    highlights: [
      "Developing and maintaining robust full stack web applications using React.js/Next.js on frontend and Node.js/Spring Boot on backend.",
      "Building and optimizing high-performance RESTful APIs, facilitating seamless integration with user-friendly interfaces.",
      "Collaborating with cross-functional design and product teams to deliver responsive UI/UX layouts.",
      "Writing clean, robust, and well-documented code adhering to industry best practices, code reviews, and CI/CD pipelines.",
    ],
  },
  {
    role: "Software Engineer I",
    company: "Samrish Technologies Pvt. Ltd.",
    location: "Delhi, India",
    period: "Mar 2023 - Nov 2025",
    type: "Full-Time",
    badge: "Promoted from Intern",
    highlights: [
      "Deputed to Rally OurBus (USA), developing core backend services using Java, Spring Boot, and MVC architecture.",
      "Designed and maintained high-availability RESTful APIs serving multiple client applications with ultra-low latency.",
      "Implemented Apache Kafka-based asynchronous messaging for decoupled communication between microservices, improving reliability.",
      "Authored and executed automated database migration scripts supporting complex schema changes across major production releases.",
    ],
  },
];

export const education = [
  {
    degree: "Bachelor of Technology (B.Tech)",
    field: "Computer Science & Engineering",
    institution: "Guru Gobind Singh Indraprastha University (GGSIPU)",
    period: "2021 - 2024",
    location: "Delhi, India",
    grade: "CGPA: 8.9 / 10",
  },
  {
    degree: "Diploma in Computer Engineering",
    field: "Computer Science",
    institution: "Guru Nanak Dev Institute of Technology (GNDIT)",
    period: "2019 - 2021",
    location: "Delhi, India",
    grade: "CGPA: 8.2 / 10",
  },
];

export const projects = [
  {
    id: "mediachat-ai",
    title: "MediaChat AI",
    category: "AI & Full-Stack",
    description: "AI-powered multimodal workspace enabling users to upload PDFs, audio, and videos for instant summaries and contextual Q&A using Google Gemini API.",
    tags: ["Java", "Spring Boot", "React", "Gemini API", "MySQL"],
    github: "https://github.com/ankitverma-95/MediaChat-AI",
    featured: true,
    color: "from-purple-500/20 to-indigo-500/20",
  },
  {
    id: "flight-tracker",
    title: "Real-Time Flight Tracker",
    category: "Full-Stack",
    description: "Comprehensive live flight status monitoring system tracking delays, gate changes, and cancellations with interactive Leaflet.js map overlays.",
    tags: ["React.js", "Java Spring Boot", "MongoDB", "Firebase FCM", "Leaflet"],
    github: "https://github.com/ankitverma-95/Flight-Tracker",
    featured: true,
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    id: "fluent-fusion",
    title: "Fluent Fusion",
    category: "Mobile",
    description: "Education management app featuring 10+ dynamic screens including student directories, fee tracking, faculty schedules, and real-time Firebase sync.",
    tags: ["Flutter", "Dart", "Firebase", "Android Studio"],
    github: "https://github.com/ankitverma-95/Fluent-Fusion",
    featured: true,
    color: "from-amber-500/20 to-orange-500/20",
  },
  {
    id: "mihome-portal",
    title: "MiHome Rental Portal",
    category: "Full-Stack",
    description: "House rental and tenant management ecosystem streamlining billing, maintenance requests, lease documents, and room vacancy statuses.",
    tags: ["Angular", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/ankitverma-95/MiHome-Portal",
    featured: false,
    color: "from-emerald-500/20 to-teal-500/20",
  },
  {
    id: "web-task-manager",
    title: "Collaborative Task Manager",
    category: "Full-Stack",
    description: "Kanban-style productivity tool with drag-and-drop workflow boards, priority tags, team assignments, and secure RESTful backend routing.",
    tags: ["Next.js", "TypeScript", "Node.js", "Express", "Tailwind CSS"],
    github: "https://github.com/ankitverma-95/Web-Task-Manager",
    featured: true,
    color: "from-pink-500/20 to-rose-500/20",
  },
  {
    id: "task-mobile-app",
    title: "Task Mobile App",
    category: "Mobile",
    description: "Sleek personal task management mobile application with recurring schedules, local alerts, categories, and offline persistence.",
    tags: ["Flutter", "Dart", "Mobile UI", "SQLite"],
    github: "https://github.com/ankitverma-95/Task-App-Flutter",
    featured: false,
    color: "from-violet-500/20 to-purple-500/20",
  },
  {
    id: "careerconnect",
    title: "CareerConnect Portal",
    category: "Full-Stack",
    description: "Recruitment portal connecting university students with industry recruiters, featuring automated resume matching and job alerts.",
    tags: ["JavaScript", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/ankitverma-95/CareerConnect",
    featured: false,
    color: "from-sky-500/20 to-blue-500/20",
  },
  {
    id: "library-api",
    title: "Library Management Microservice",
    category: "Backend",
    description: "Robust Spring Boot backend handling book catalogs, barcode indexation, member checkout pipelines, and overdue fine calculations.",
    tags: ["Java", "Spring Boot", "JPA / Hibernate", "MySQL"],
    github: "https://github.com/ankitverma-95/Library-System-API",
    featured: false,
    color: "from-indigo-500/20 to-cyan-500/20",
  },
];
