import { color } from "framer-motion";
import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  webAnno,
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
  parimitra,
  lowLight,
  neural,
  commutify,
  chatbot
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
    title: "Software Developer Intern",
    company_name: "Parimitra Pvt Ltd",
    icon: parimitra,
    iconBg: "white",
    date: "July 2024 - September 2024",
    points: [
      "Developed secure role-based authentication by defining user roles, integrating Google Authenticator and OTP services.",
      "Developed an API to shift data filtration management from frontend to backend, reducing website load, preventing hangs, and enabling efficient graph generation.",
      "Engineered a software system to store IoT device analytics in Firebase, modeled Firestore clusters for efficient data organization, and integrated Twilio to deliver real-time alerts and warnings to clients.",
      "Delivered products CrowdEye for crowd analytics and TransitEye for vehicle tracking, deploying on Vercel with CI/CD and performance optimization for a responsive user experience."
    ]    
  },
  {
    title: "Web Developer",
    company_name: "Commutify",
    icon: commutify,
    iconBg: "white",
    date: "October 2024 - Present",
    points: [
      "Integrated an ML model to predict occupancy and transit details, connecting it to another server via an API endpoint that provides real-time transit occupancy data for a trip planner.",
      "Created a dashboard to analyze ETM data, providing service providers with agency- and route-based analytics, including revenue, occupancy, and time-based trends for improved operational insights.",
      "Integrated the Esquisse app, an R-based tool, to enable interactive data visualization and enhance analytical efficiency.",
      "Configured and managed NGINX for hosting backend APIs, optimized server performance, and set up logging for real-time API monitoring and error tracking in production environments."
    ]    
  },
  {
    title: "ML Engineer",
    company_name: "Singla Labs IITR",
    icon: tesla,
    iconBg: "white",
    date: "Jun 2024 - July 2024",
    points: [
      "Developed a TensorFlow model for 3D cell segmentation in microscopy, achieving a Dice coefficient of 0.2917.",
      "Automated preprocessing for over 1,500+ 3D images, streamlining the workflow and enhancing efficiency.",
      "Improved the signal-to-noise ratio, significantly boosting image quality and image analysis accuracy.",
      "Fine-tuned hyperparameters and optimized training processes, leading to more reliable segmentation results."
    ]    
  },
  {
    title: "Frontend Manager",
    company_name: "Cognizance IITR",
    icon: starbucks,
    iconBg: "black",
    date: "January 2023 - Present",
    points: [
      "Integrated a 3D spline model and created events and workshops page to enhance attendee experience and engagement.",
      "Built user authentication features, including Forgot Password and Google Sign-Up, to streamline the registrations.",
      "Created an admin feature to automate and streamline various operational tasks for the Cognizance team.",
      "Collaborated with a payment partner to process payments, while maintaining records for carting, ticketing systems, and other transactional data."
    ]    
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
    source_code_link: "https://rlandhunt.onrender.com",
  },
  {
    name: "Neural Style Transfer",
    description:
      "Neural Style Transfer is a deep learning technique that combines the content of one image with the artistic style of another, enabling users to create unique, visually stunning artworks by merging diverse aesthetics seamlessly.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "Machine Learning",
        color: "green-text-gradient",
      },
      {
        name: "PyTorch",
        color: "pink-text-gradient",
      },
    ],
    image: neural,
    source_code_link: "https://github.com/kartik-ag/Neural-Style-Transfer",
  },
  {
    name: "Web Annotator Extension",
    description:
    "The web annotator extension enhances online research by allowing users to highlight, comment, and organize content directly on webpages. It features saving functionality for easy retrieval and collaboration, streamlining workflows for researchers and students alike.",
    tags: [
      {
        name: "Web-Extension",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: webAnno,
    source_code_link: "https://github.com/kartik-ag/Web_Annotator_Extension",
  },
  {
    name: "Dark Image Optimizer",
    description:
    "Low light image enhancement improves the quality of images captured in dim conditions by reducing noise, increasing brightness, and enhancing details. This technique utilizes advanced algorithms to produce clearer and more vibrant visuals, enhancing overall visibility.",
    tags: [
      {
        name: "Machine Learning",
        color: "blue-text-gradient",
      },
      {
        name: "tensorflow",
        color: "green-text-gradient",
      },
      {
        name: "jupiter",
        color: "pink-text-gradient",
      },
    ],
    image: lowLight,
    source_code_link: "https://github.com/kartik-ag/Image-Enhancement",
  },
  {
    name: "RAG Chatbot",
    description: "An intelligent RAG chatbot that provides real-time transit directions and assists users with seamless, accurate travel planning.",
    tags: [
      {
        name: "Retrieval Augmented Generation",
        color: "blue-text-gradient",
      },
      {
        name: "Large Language Model",
        color: "green-text-gradient"
      },
      {
        name: "Artificial intelligence",
        color: "pink-text-gradient"
      }
    ],
    image: chatbot,
    source_code_link: "#"
  }
];

export { services, technologies, experiences, testimonials, projects };
