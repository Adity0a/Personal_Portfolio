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
  docker,
  tripguide,
  threejs,
  linkedin,
  githublogo,
  ingram,
  gep,
  ambrosial,
  ens,
  portfolio,
  health,
  neu,
  vit,
  pace,
  sphs,
  studentnexus,
  staymaster,
  curvebike,
  sentiment,
  dj,
  yu,
  shirish,
  rohit
} from "../assets";
import { s } from "maath/dist/misc-7d870b3c.esm";

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
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  }
];

export const socialLinks = [
  {
    label: "Linkedin",
    url: "https://www.linkedin.com/in/adityaa-mishra/",
    icon: linkedin,
  },
  {
    label: "Github",
    url: "https://github.com/Adity0a",
    icon: githublogo,
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Software Testing",
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
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Android Developer Intern",
    company_name: "AICTE",
    icon: gep,
    iconBg: "#E6DEDD",
    date: "October 2025 - December 2022",
    points: [
      "Developed different web interfaces, API and integrate them for various clients",
      "Collaborated with cross-functional teams including business team, product managers, and other developers",
      "Contributed in success of GEP SMART and GEP NEXXE",
    ],
  },
  {
    title: "Full-Stack Developer",
    company_name: "Codeveda",
    icon: ens,
    iconBg: "#E6DEDD",
    date: "July 2025 - August 2025",
    points: [
      "Started a bootstrap business which catered to client needs for customised clothing and perfumes.",
      "Learned a lot about social media marketing, SEO, team management, business operations, etc.",
      "Also developed an e-commerce website “enswardrobe.com” using the MERN stack.",
    ],
  },
  {
    title: "Web Developer - Intern",
    company_name: "Cognifyz Technologies",
    icon: ambrosial,
    iconBg: "#E6DEDD",
    date: "April 2025 - June 2025",
    points: [
      "Developed and maintained web applications according to client needs",
      "Gained hands-on experience under guidance of senior developers",
      "Acquainted regarding the technologies like HTML5, CSS3, React",
    ],
  },
];

const schools = [
  {
    title: "Bachelor of Science - Information Technology",
    company_name: "Nagindas Khandwala College",
    icon: vit,
    iconBg: "#FFFFFF",
    date: "June 2023 - May 2026",
  },
  {
    title: "Higher Secondary Certificate - Science",
    company_name: "D.T.S.S Junior College of Science",
    icon: pace,
    iconBg: "#FFFFFF",
    date: "June 2020 - March 2022",
  },
  {
    title: "Secondary School Certificate",
    company_name: "Raj High School",
    icon: sphs,
    iconBg: "#FFFFFF",
    date: "June 2015 - March 2020",
  },
];

const achievements = [
  {
    title: "Android App Development Virtual Internship ",
    name: "All India Council for Technical Education (AICTE)",
    description:
      "Completed a comprehensive virtual internship program focused on Android app development, gaining practical experience in building mobile applications and enhancing programming skills.",
    company: "",
  },
  {
    title: "Prompt Engineering for Generative AI",
    name: "Amazon Web Services (AWS)",
    description:
      "Completed a specialized training program on prompt engineering for generative AI, acquiring skills to design effective prompts and optimize the performance of AI models in generating human-like text.",
    company: "",
  },
  {
    title: "Artificial Intelligence for Beginners",
    name: "HP LIFE (Learning Initiative for Entrepreneurs)",
    description: "Completed an introductory course on artificial intelligence, gaining foundational knowledge of AI concepts, applications, and ethical considerations, and developing skills to apply AI techniques in various domains.",
    company: "",
  },
  {
    title: "Data Science and Machine Learning Bootcamp",
    name: "Udemy",
    description:
      "Completed an intensive bootcamp on data science and machine learning, acquiring practical skills in data analysis, statistical modeling, and machine learning algorithms, and applying them to real-world datasets for predictive analytics and insights.",
    company: "",
  }
];

const testimonials = [
];

const projects = [
  {
    name: "SwiftShop: A Full-Stack Cross-Platform E-Commerce Solution",
    description:
      "A comprehensive, production-ready e-commerce mobile application designed to provide a seamless shopping experience. The project features a robust Node.js/Express backend and a high-performance React Native frontend. It includes a complete shopping flow—from product discovery and category filtering to secure checkout and order management.",
    tags: [
      {
        name: "React Native",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "Typescript",
        color: "pink-text-gradient",
      },
    ],
    image: sentiment,
    source_code_link: "https://github.com/Adity0a/E-Commerce.git",
    demo_link: "",
  },
  {
    name: "Ryde: A Real-Time Full-Stack Ride-Hailing Application",
    description:
      "A high-performance, real-time ride-sharing mobile application modeled after Uber. The platform enables seamless interaction between riders and drivers by leveraging advanced geospatial technologies. It features live tracking, dynamic routing, and instant state synchronization to ensure a reliable and responsive user experience.",
    tags: [
      {
        name: "React Native",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "NodeJS",
        color: "pink-text-gradient",
      },
    ],
    image: studentnexus,
    source_code_link: "https://github.com/Adity0a/Uber",
    demo_link: "",
  },
  {
    name: "E-Study: A Comprehensive Mobile Learning Management System (LMS)",
    description:
      "A full-featured educational platform designed to provide students with a seamless digital learning experience. E-Study enables users to discover academic content, engage with multimedia lessons, and monitor their educational journey through an intuitive mobile interface. The application bridges the gap between students and educators by offering a structured environment for course management and interactive learning.",
    tags: [
      {
        name: "Firestore",
        color: "blue-text-gradient",
      },
      {
        name: "Java",
        color: "green-text-gradient",
      },
      {
        name: "Redux",
        color: "pink-text-gradient",
      },
    ],
    image: staymaster,
    source_code_link: "https://github.com/Adity0a/E-Study.git",
    demo_link:
      "https://bustling-bellflower-465.notion.site/StayMaster-A-Smart-Hotel-Booking-Platform-1f0a1c2c8ee281008d62c81ef4406df9",
  },
  {
    name: "Curve Bike Management System",
    description:
      "A data-driven bike-sharing management system that models station demand and route traffic with time and climate factors to optimize bike inventory, rider incentives, and operational efficiency.",
    tags: [
      {
        name: "Streamlit",
        color: "blue-text-gradient",
      },
      {
        name: "OracleDB",
        color: "green-text-gradient",
      },
      {
        name: "Data Modeling",
        color: "pink-text-gradient",
      },
    ],
    image: curvebike,
    source_code_link:
      "https://github.com/bagwe-shubham1727/Curve-Bike-Management-System",
    demo_link: "",
  },
  {
    name: "Health Bridge - One Stop Healthcare",
    description:
      "Web application that enables users to avail medical services on go such as appointment booking, e-prescription, ambulance on demand, disease prediction",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Python",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
    ],
    image: health,
    source_code_link: "https://github.com/bagwe-shubham1727/HealthBridgeVIT",
    demo_link:
      "https://bustling-bellflower-465.notion.site/Health-Bridge-All-In-One-HealthCare-System-1f0a1c2c8ee28170b200f3b1263efb66",
  },
  {
    name: "Portfolio Website",
    description:
      "A portfolio website to showcase myself. One you're probably looking at right now.",
    tags: [
      {
        name: "Three.js",
        color: "blue-text-gradient",
      },
      {
        name: "Framer Motion",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link: "https://github.com/Adity0a/Personal_Portfolio.git",
    demo_link: "",
  },
];

export { services, technologies, experiences, schools, achievements, projects, testimonials };
