import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  amit,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  parimitra
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "ML Enthusiast",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Software Developer",
    company_name: "Parimitra Pvt Ltd",
    icon: parimitra,
    iconBg: "white",
    date: "Aug 2024 - Current",
    points: [
      "Led full-stack development for web and mobile applications, managing both frontend and backend tasks.",
      "Oversaw project progress, coordinating with web and app development teams to meet timely delivery of milestones.",
      "Directed server infrastructure, deployment pipelines and Firestore database securing best performance and security."
    ]
  },
  {
    title: "ML Engineer",
    company_name: "Singla Labs IITR",
    icon: tesla,
    iconBg: "white",
    date: "Jun 2024 - July 2024",
    points: [
      "Worked on a CNN-based machine learning application for 3D microscopy image segmentation with 85% accuracy.",
      "Increased research throughput by 50% through enhanced visualization and analysis of cellular morphology.",
      "Deployed algorithms for multi-class segmentation, reducing segmentation time by 60% compared to manual ones.",
    ],
  },
  {
    title: "Frontend Manager",
    company_name: "Cognizance IITR",
    icon: starbucks,
    iconBg: "black",
    date: "January 2023 - March 2024",
    points: [
      "Designed a 3D spline model for the home page, enhancing attendee experience and event navigation.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Oversaw server configurations and deployments, achieving 99.9% uptime for the Techfest IITR website.",
      "Optimized and maintained databases for 3000+ registrations, ensuring efficient data storage and retrieval",
    ],
  },
  
];

const testimonials = [
  {
    testimonial:
      "Smart Programmer with plenty of innovative ideas and quick implementation skills.",
    name: "Amit Agarwal",
    designation: "Associate Professor",
    company: "IITR",
    image: amit,
  },
  
];

const projects = [
  {
    name: "E-Treasure Hunt  ",
    description:
      "Web-based platform that allows users to participate in treasure hunts in teams, it replaced the necessityof QR codes for clues, shows live leaderboard, scores.",
    tags: [
      {
        name: "ejs scripts",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "geofencing technology",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/kartik-ag/R-Land-Hunt",
  },
  {
    name: "Parimitra",
    description:
      "The project addresses overcrowding issues at Har Ki Pauri, Haridwar, by using IoT cameras for real-time monitoring, preventing stampedes, and enabling authorities to respond quickly with live updates and alerts.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "data management",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Communify",
    description:
      "The project aims to improve trip planning by predicting transit crowding and optimizing routes, helping passengers avoid delays and identify transportation service gaps for better service efficiency.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "deep learning",
        color: "green-text-gradient",
      },
      {
        name: "graphs",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "#confidential",
  },
];

export { services, technologies, experiences, testimonials, projects };
