import { NotebookPen, CheckCheck, BookCheck } from "lucide-react";
import { PortfolioProject } from "./types";

export const listItems = [
  {
    title: "Your call has been confirmed.",
    description: "1 hour ago",
  },
  {
    title: "You have a new message!",
    description: "1 hour ago",
  },
  {
    title: "Your subscription is expiring soon!",
    description: "2 hours ago",
  },
];

export const projects: PortfolioProject[] = [
  {
    id: "mybussiness",
    title: "My Website Business Project",
    description:
      "This is a personal photography portfolio showcasing my journey through various landscapes and cityscapes. The project features a dynamic gallery, an interactive gallery layout, and optimized images for different screen sizes.",
    technologies: ["React", "TailwindCSS", "Node.js", "Express", "MongoDB"],
    features: ["React", "TailwindCSS", "Node.js", "Express", "MongoDB"],
    images: [
      { src: "/images/ecommerce1.jpg" },
      { src: "/images/ecommerce2.jpg" },
      { src: "/images/ecommerce3.jpg" },
      { src: "/images/ecommerce4.jpg" },
    ],
    githubLink: "https://github.com/yourgithub/photography-portfolio",
    liveLink: "https://yourportfolio.com",
  },
  {
    id: "iacwebsite",
    title: "International Activites Club Official Website",
    description:
      "An e-commerce platform built with React and Node.js. It supports user authentication, a shopping cart, and a complete checkout system.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
    features: [],
    images: [
      { src: "/images/ecommerce1.jpg" },
      { src: "/images/ecommerce2.jpg" },
      { src: "/images/ecommerce3.jpg" },
      { src: "/images/ecommerce4.jpg" },
    ],
    githubLink: "https://github.com/yourgithub/ecommerce-website",
    liveLink: "https://ecommerce-website.com",
  },
  {
    id: "quizapplication",
    title: "A Full-Stack Quiz Application",
    description:
      "An e-commerce platform built with React and Node.js. It supports user authentication, a shopping cart, and a complete checkout system.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
    features: [],
    images: [
      { src: "/images/ecommerce1.jpg" },
      { src: "/images/ecommerce2.jpg" },
      { src: "/images/ecommerce3.jpg" },
      { src: "/images/ecommerce4.jpg" },
    ],
    githubLink: "https://github.com/yourgithub/ecommerce-website",
    liveLink: "https://ecommerce-website.com",
  },
  {
    id: "sudoku",
    title: "A Sudoku Application for CodeNinjas",
    description:
      "An e-commerce platform built with React and Node.js. It supports user authentication, a shopping cart, and a complete checkout system.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
    features: [],
    images: [
      { src: "/images/ecommerce1.jpg" },
      { src: "/images/ecommerce2.jpg" },
      { src: "/images/ecommerce3.jpg" },
      { src: "/images/ecommerce4.jpg" },
    ],
    githubLink: "https://github.com/yourgithub/ecommerce-website",
    liveLink: "https://ecommerce-website.com",
  },
  {
    id: "frontendbook",
    title: "A Front-end Development Book for Beginners",
    description:
      "An e-commerce platform built with React and Node.js. It supports user authentication, a shopping cart, and a complete checkout system.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
    features: [],
    images: [
      { src: "/images/ecommerce1.jpg" },
      { src: "/images/ecommerce2.jpg" },
      { src: "/images/ecommerce3.jpg" },
      { src: "/images/ecommerce4.jpg" },
    ],
    githubLink: "https://github.com/yourgithub/ecommerce-website",
    liveLink: "https://ecommerce-website.com",
  },
  {
    id: "backendbook",
    title: "A Back-end Development Book for Beginners",
    description:
      "An e-commerce platform built with React and Node.js. It supports user authentication, a shopping cart, and a complete checkout system.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
    features: [],
    images: [
      { src: "/images/ecommerce1.jpg" },
      { src: "/images/ecommerce2.jpg" },
      { src: "/images/ecommerce3.jpg" },
      { src: "/images/ecommerce4.jpg" },
    ],
    githubLink: "https://github.com/yourgithub/ecommerce-website",
    liveLink: "https://ecommerce-website.com",
  },
];

export const data = {
  navMain: [
    {
      title: "Home",
      url: "/",
      icon: NotebookPen,
    },
    {
      title: "About Me",
      url: "/about",
      icon: NotebookPen,
    },
    {
      title: "Information",
      icon: CheckCheck,
      items: [
        {
          title: "Resume",
          url: "#",
        },
        {
          title: "Education",
          url: "#",
        },
        {
          title: "Relevant Experiences",
          url: "#",
        },
        {
          title: "Miscellaneous",
          url: "#",
        },
      ],
    },
    {
      title: "Contact",
      url: "/",
      icon: NotebookPen,
    },

  ],
  "information": [
    {
      title: "Projects",
      icon: BookCheck,
      items: [
        {
          title: "My Business",
          url: "/projects/mybussiness",
        },
        {
          title: "IAC Website",
          url: "/projects/iacwebsite",
        },
        {
          title: "Quiz Application",
          url: "/projects/quizapplication",
        },
        {
          title: "Sudoku",
          url: "/projects/sudoku",
        },
        {
          title: "Front-End Development Book",
          url: "/projects/frontendbook",
        },
        {
          title: "Back-End Development Book",
          url: "/projects/backendbook",
        },
      ],
    },
    {
      title: "Future Projects",
      icon: NotebookPen,
      items: [
        {
          title: "Full-Stack Web Development",
          url: "/roadmaps/fullstack",
        },
        {
          title: "Front-end Development",
          url: "/roadmaps/frontend",
        },
        {
          title: "Back-end Development",
          url: "/roadmaps/backend",
        },
        {
          title: "Pre Medical",
          url: "/roadmaps/premed",
        },
        {
          title: "Business",
          url: "/roadmaps/business",
        },
        {
          title: "Law",
          url: "/roadmaps/law",
        },
        {
          title: "Entrepreneurship",
          url: "/roadmaps/entrepreneurship",
        },
      ],
    },
  ],
};