// Mock data for portfolio website
// This will be replaced with Firebase data later

export const profileData = {
  name: "Besong Wisdom",
  title: "Software Engineer",
  bio: "Passionate software engineer specializing in building exceptional digital experiences. I focus on creating scalable, user-friendly applications that solve real-world problems.",
  email: "contact@besongwisdom.online",
  location: "Available Worldwide",
  profileImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
  social: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com"
  }
};

export const aboutData = {
  fullBio: "I'm a dedicated software engineer with a passion for creating innovative solutions. With expertise in modern web technologies and a keen eye for detail, I strive to build applications that not only function flawlessly but also provide exceptional user experiences. My approach combines technical excellence with creative problem-solving.",
  highlights: [
    "Full-stack development expertise",
    "Agile methodology practitioner",
    "Strong problem-solving skills",
    "Continuous learner and innovator"
  ]
};

export const skillsData = [
  {
    category: "Frontend Development",
    skills: ["React", "JavaScript", "TypeScript", "HTML/CSS", "Tailwind CSS", "Next.js"]
  },
  {
    category: "Backend Development",
    skills: ["Node.js", "Python", "FastAPI", "Express.js", "RESTful APIs"]
  },
  {
    category: "Database & Cloud",
    skills: ["MongoDB", "Firebase", "PostgreSQL", "AWS", "Docker"]
  },
  {
    category: "Tools & Methods",
    skills: ["Git", "Agile", "CI/CD", "Testing", "Linux"]
  }
];

export const projectsData = [
  {
    id: "1",
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce platform with real-time inventory management, secure payments, and admin dashboard.",
    techStack: ["React", "Node.js", "MongoDB", "Stripe"],
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=600&h=400&fit=crop",
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    featured: true
  },
  {
    id: "2",
    title: "Task Management System",
    description: "Collaborative task management application with real-time updates, team features, and analytics.",
    techStack: ["React", "Firebase", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop",
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    featured: true
  },
  {
    id: "3",
    title: "Weather Dashboard",
    description: "Real-time weather application with forecasts, maps, and location-based alerts.",
    techStack: ["React", "API Integration", "Chart.js"],
    image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=600&h=400&fit=crop",
    githubUrl: "https://github.com",
    featured: false
  },
  {
    id: "4",
    title: "Social Media Analytics",
    description: "Analytics dashboard for tracking social media metrics and engagement across multiple platforms.",
    techStack: ["Next.js", "Python", "FastAPI", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    githubUrl: "https://github.com",
    featured: false
  }
];

export const experienceData = [
  {
    id: "1",
    title: "Senior Software Engineer",
    company: "Tech Solutions Inc.",
    location: "Remote",
    startDate: "2022-01",
    endDate: null,
    current: true,
    description: "Leading development of scalable web applications, mentoring junior developers, and implementing best practices across the team.",
    achievements: [
      "Improved application performance by 40%",
      "Led migration to microservices architecture",
      "Mentored 5 junior developers"
    ]
  },
  {
    id: "2",
    title: "Software Engineer",
    company: "Digital Innovations Ltd.",
    location: "Hybrid",
    startDate: "2020-03",
    endDate: "2021-12",
    current: false,
    description: "Developed and maintained full-stack applications using modern technologies. Collaborated with cross-functional teams to deliver high-quality solutions.",
    achievements: [
      "Built 3 major client projects from scratch",
      "Reduced bug reports by 35% through improved testing"
    ]
  },
  {
    id: "3",
    title: "Junior Developer",
    company: "StartUp Ventures",
    location: "On-site",
    startDate: "2018-06",
    endDate: "2020-02",
    current: false,
    description: "Contributed to various web development projects, focusing on frontend development and user interface improvements.",
    achievements: [
      "Implemented responsive designs for 10+ projects",
      "Learned and applied modern development practices"
    ]
  }
];

export const contactMessages = [];
