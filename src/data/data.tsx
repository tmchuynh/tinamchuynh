import {
  NotebookPen,
  CheckCheck,
  BookCheck,
  Presentation,
  NotebookText,
  Cat,
  CodeXml,
  DatabaseZap,
  FileTextIcon,
  GlobeIcon,
  CalendarIcon,
  BellIcon,
  Share2Icon,
  House,
  CircleUserRound,
  Info,
  Accessibility,
  Send,
  Pen,
  MessageSquareCode,
  BookMarked,
} from "lucide-react";
import { PortfolioProject, WritingPlatform } from "./types";
import { FaWindows } from "react-icons/fa6";
import { TimelineEvent } from "@/data/types";
import { AnimatedBeamMultipleOutput } from "@/components/AnimatedOutput";
import Marquee from "@/components/ui/marquee";
import { cn } from "@/lib/utils";
import { AnimatedList } from "@/components/ui/animated-list";
import { Calendar } from "@/components/ui/calendar";

export const timelineData: TimelineEvent[] = [
  {
    time: "August 2023 – PRESENT",
    title: "Software Engineer",
    description: "International Activities Club",
    bullets: [
      "Built interactive web apps for educational programs, improving engagement and usability.",
      "Collaborated with educators to streamline administrative tasks through custom software.",
    ],
    icon: DatabaseZap,
  },
  {
    time: "August 2023 – PRESENT",
    title: "Lead Administration",
    description: "International Activities Club",
    bullets: [
      "Improved workflows by 20% through streamlined processes and metrics monitoring.",
      "Led teams and trained staff, boosting efficiency and reducing issues by 25%.",
      "Implemented initiatives that increased growth by 15% and aligned organizational goals.",
    ],
    icon: Presentation,
  },
  {
    time: "July 2023 – October 2023",
    title: "Code Coach",
    description: "TheCoderSchool",
    bullets: [
      "Taught HTML, CSS, JavaScript, and Python, boosting student skills and participation.",
      "Designed curricula that increased engagement and project completion rates.",
      "Mentored instructors to enhance collaboration with management.",
    ],
    icon: CodeXml,
  },
  {
    time: "June 2019 – March 2020",
    title: "Curriculum Developer",
    description: "Brainstorm ",
    bullets: [
      "Created STEM-focused curricula, increasing engagement and outcomes by 35%.",
      "Designed lesson plans that improved student performance by 30%.",
      "Collaborated with stakeholders to enhance curriculum effectiveness.",
    ],
    icon: NotebookText,
  },
  {
    time: "November 2017 – January 2019",
    title: "Coding Instructor",
    description: "Code to the Future",
    bullets: [
      "Taught Scratch, improving student proficiency by 40%.",
      "Customized lessons to boost engagement and completion rates.",
    ],
    icon: Cat,
  },
];

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

export const shortcuts = [
  {
    shortcut: (
      <span>
        <FaWindows className="inline-block mr-1" /> + B
      </span>
    ),
    description: "Open/Close Side Menu",
  },
  {
    shortcut: (
      <span>
        <FaWindows className="inline-block mr-1" /> + M
      </span>
    ),
    description: "Open/Close Spotlight Search",
  },
  {
    shortcut: (
      <span>
        Ctrl + <FaWindows className="inline-block mr-1" /> + D
      </span>
    ),
    description: "Toggle Dark/Light Mode",
  },
  {
    shortcut: (
      <span>
        <FaWindows className="inline-block mr-1" /> + /
      </span>
    ),
    description: "Cut selected text",
  },
  {
    shortcut: (
      <span>
        <FaWindows className="inline-block mr-1" /> + /
      </span>
    ),
    description: "Undo last action",
  },
  {
    shortcut: (
      <span>
        <FaWindows className="inline-block mr-1" /> + /
      </span>
    ),
    description: "Redo last action",
  },
  {
    shortcut: (
      <span>
        <FaWindows className="inline-block mr-1" /> + /
      </span>
    ),
    description: "Save the current document",
  },
  {
    shortcut: (
      <span>
        <FaWindows className="inline-block mr-1" /> + /
      </span>
    ),
    description: "Close dialog or cancel",
  },
];

export const futureProjects: PortfolioProject[] = [
  {
    id: "futureProject1",
    title: "Future E-commerce Platform",
    description:
      "This project involves building a scalable and robust e-commerce platform that can handle high traffic, provide excellent user experience, and integrate with various payment systems.",
    focuses: [
      "Performance Optimization",
      "User Experience",
      "Scalability and Load Balancing",
      "Security and Payment Integration",
    ],
    technologies: ["React", "Node.js", "MongoDB", "GraphQL", "TailwindCSS"],
    images: [
      { src: "/images/inspiration1.jpg", alt: "minim enim", description: "minim enim" },
      { src: "/images/inspiration2.jpg", alt: "minim enim", description: "minim enim" },
      { src: "/images/inspiration3.jpg", alt: "minim enim", description: "minim enim" },
    ],
    timeline: [
      "Research and Initial Planning",
      "Prototype and Design",
      "Development (Frontend and Backend)",
      "Testing and Deployment",
    ],
    inspiration: [
      { src: "/images/inspiration1.jpg", alt: "minim enim", description: "minim enim" },
      { src: "/images/inspiration2.jpg", alt: "minim enim", description: "minim enim" },
      { src: "/images/inspiration3.jpg", alt: "minim enim", description: "minim enim" },
    ],
    githubLink: "https://github.com/yourgithub/future-ecommerce",
    liveLink: "https://future-ecommerce.com",
  },
];

export const writingPlatforms: WritingPlatform[] = [
  {
    id: "medium",
    title: "Medium",
    description:
      "I write articles on various topics like technology, travel, and personal growth.",
    focuses: ["technology", "travel", "personal growth"],
    articles: [
      {
        title: "My First Blog Post",
        link: {
          url: "https://medium.com/@yourusername/my-first-blog-post",
          label: "Read Article",
        },
        date: "March 15, 2023",
        display: [
          { icon: CheckCheck },
          { icon: Presentation },
          { icon: BookCheck },
        ],
        description: "This is a short description of my first blog post.",
        tags: ["tech", "beginner"],
      },
    ],
    links: [
      { url: "https://platform1.com", label: "Visit Medium" },
      { url: "https://medium.com/@yourusername", label: "My Profile" },
    ],
  },
  {
    id: "devto",
    title: "Dev.to",
    description:
      "I'm a freelance developer and I've written numerous articles and blog posts on various topics, including technology, travel, and personal growth. I'm always looking for new content to share.",
    focuses: ["technology", "travel", "personal growth"],
    articles: [
      {
        title: "VSCode Extensions I'm in LOVE With",
        link: {
          url: "https://dev.to/tmchuynh/vscode-extensions-im-in-love-with-oab",
          label: "Take a Look",
        },
        date: "Jun 6, 2023",
        display: [
          { icon: NotebookText },
          { icon: CodeXml },
          { icon: CheckCheck },
          { icon: Presentation },
          { icon: BookCheck },
          { icon: NotebookPen },
        ],
        description: "In cillum pariatur quis mollit aliquip in cillum nisi ut minim enim.",
        tags: ["formatting", "live server", "documentation", "auto"],
      },
      {
        title: "Books to Read as a Developer",
        link: {
          url: "https://dev.to/tmchuynh/books-to-read-as-a-developer-33eh",
          label: "Start Reading Today",
        },
        date: "Mar 23, 2022",
        display: [
          { icon: NotebookText },
          { icon: CodeXml },
          { icon: CheckCheck },
          { icon: Presentation },
          { icon: BookCheck },
          { icon: NotebookPen },
        ],
        description: "Choosing a career in tech. is choosing an endless life learning. But, then again, which career isn't like that? Improvement is critical after all.",
        tags: ["software design", "design patterns", "clean code"],
      },
      {
        title: "Intermediate & Advanced Python Projects",
        link: {
          url: "https://dev.to/tmchuynh/intermediate-advanced-python-projects-4hb8",
          label: "Start Creating",
        },
        date: "Mar 31, 2022",
        display: [
          { icon: NotebookText },
          { icon: CodeXml },
          { icon: CheckCheck },
          { icon: Presentation },
          { icon: BookCheck },
          { icon: NotebookPen },
        ],
        description: "The web, desktop, and command-line are three major platforms you'll want to consider building for. Where will you build?",
        tags: ["chatbot", "web crwlers", "audiobooks"],
      },
      {
        title: "My First Blog Post",
        link: {
          url: "https://medium.com/@yourusername/my-first-blog-post-355531635569",
          label: "My First Blog Post",
        },
        date: "March 15, 2023",
        display: [
          { icon: NotebookText },
          { icon: CodeXml },
          { icon: CheckCheck },
          { icon: Presentation },
          { icon: BookCheck },
          { icon: NotebookPen },
        ],
        description: "In cillum pariatur quis mollit aliquip in cillum nisi ut minim enim.",
        tags: ["minim enim", "minim enim"],
      },
      {
        title: "My First Blog Post",
        link: {
          url: "https://medium.com/@yourusername/my-first-blog-post-355531635569",
          label: "My First Blog Post",
        },
        date: "March 15, 2023",
        display: [
          { icon: NotebookText },
          { icon: CodeXml },
          { icon: CheckCheck },
          { icon: Presentation },
          { icon: BookCheck },
          { icon: NotebookPen },
        ],
        description: "In cillum pariatur quis mollit aliquip in cillum nisi ut minim enim.",
        tags: ["minim enim", "minim enim"],
      },
      {
        title: "My First Blog Post",
        link: {
          url: "https://medium.com/@yourusername/my-first-blog-post-355531635569",
          label: "My First Blog Post",
        },
        date: "March 15, 2023",
        display: [
          { icon: NotebookText },
          { icon: CodeXml },
          { icon: CheckCheck },
          { icon: Presentation },
          { icon: BookCheck },
          { icon: NotebookPen },
        ],
        description: "In cillum pariatur quis mollit aliquip in cillum nisi ut minim enim.",
        tags: ["minim enim", "minim enim"],
      },
      {
        title: "My First Blog Post",
        link: {
          url: "https://medium.com/@yourusername/my-first-blog-post-355531635569",
          label: "My First Blog Post",
        },
        date: "March 15, 2023",
        display: [
          { icon: NotebookText },
          { icon: CodeXml },
          { icon: CheckCheck },
          { icon: Presentation },
          { icon: BookCheck },
          { icon: NotebookPen },
        ],
        description: "In cillum pariatur quis mollit aliquip in cillum nisi ut minim enim.",
        tags: ["minim enim", "minim enim"],
      },
      {
        title: "My First Blog Post",
        link: {
          url: "https://medium.com/@yourusername/my-first-blog-post-355531635569",
          label: "My First Blog Post",
        },
        date: "March 15, 2023",
        display: [
          { icon: NotebookText },
          { icon: CodeXml },
          { icon: CheckCheck },
          { icon: Presentation },
          { icon: BookCheck },
          { icon: NotebookPen },
        ],
        description: "In cillum pariatur quis mollit aliquip in cillum nisi ut minim enim.",
        tags: ["minim enim", "minim enim"],
      },
      {
        title: "My First Blog Post",
        link: {
          url: "https://medium.com/@yourusername/my-first-blog-post-355531635569",
          label: "My First Blog Post",
        },
        date: "March 15, 2023",
        display: [
          { icon: NotebookText },
          { icon: CodeXml },
          { icon: CheckCheck },
          { icon: Presentation },
          { icon: BookCheck },
          { icon: NotebookPen },
        ],
        description: "In cillum pariatur quis mollit aliquip in cillum nisi ut minim enim.",
        tags: ["minim enim", "minim enim"],
      },
      {
        title: "My First Blog Post",
        link: {
          url: "https://medium.com/@yourusername/my-first-blog-post-355531635569",
          label: "My First Blog Post",
        },
        date: "March 15, 2023",
        display: [
          { icon: NotebookText },
          { icon: CodeXml },
          { icon: CheckCheck },
          { icon: Presentation },
          { icon: BookCheck },
          { icon: NotebookPen },
        ],
        description: "In cillum pariatur quis mollit aliquip in cillum nisi ut minim enim.",
        tags: ["minim enim", "minim enim"],
      },
      {
        title: "My First Blog Post",
        link: {
          url: "https://medium.com/@yourusername/my-first-blog-post-355531635569",
          label: "My First Blog Post",
        },
        date: "March 15, 2023",
        display: [
          { icon: NotebookText },
          { icon: CodeXml },
          { icon: CheckCheck },
          { icon: Presentation },
          { icon: BookCheck },
          { icon: NotebookPen },
        ],
        description: "In cillum pariatur quis mollit aliquip in cillum nisi ut minim enim.",
        tags: ["minim enim", "minim enim"],
      },
      {
        title: "My First Blog Post",
        link: {
          url: "https://medium.com/@yourusername/my-first-blog-post-355531635569",
          label: "My First Blog Post",
        },
        date: "March 15, 2023",
        display: [
          { icon: NotebookText },
          { icon: CodeXml },
          { icon: CheckCheck },
          { icon: Presentation },
          { icon: BookCheck },
          { icon: NotebookPen },
        ],
        description: "In cillum pariatur quis mollit aliquip in cillum nisi ut minim enim.",
        tags: ["minim enim", "minim enim"],
      },
      {
        title: "My First Blog Post",
        link: {
          url: "https://medium.com/@yourusername/my-first-blog-post-355531635569",
          label: "My First Blog Post",
        },
        date: "March 15, 2023",
        display: [
          { icon: NotebookText },
          { icon: CodeXml },
          { icon: CheckCheck },
          { icon: Presentation },
          { icon: BookCheck },
          { icon: NotebookPen },
        ],
        description: "In cillum pariatur quis mollit aliquip in cillum nisi ut minim enim.",
        tags: ["minim enim", "minim enim"],
      },
      {
        title: "My First Blog Post",
        link: {
          url: "https://medium.com/@yourusername/my-first-blog-post-355531635569",
          label: "My First Blog Post",
        },
        date: "March 15, 2023",
        display: [
          { icon: NotebookText },
          { icon: CodeXml },
          { icon: CheckCheck },
          { icon: Presentation },
          { icon: BookCheck },
          { icon: NotebookPen },
        ],
        description: "In cillum pariatur quis mollit aliquip in cillum nisi ut minim enim.",
        tags: ["minim enim", "minim enim"],
      },
      {
        title: "My First Blog Post",
        link: {
          url: "https://medium.com/@yourusername/my-first-blog-post-355531635569",
          label: "My First Blog Post",
        },
        date: "March 15, 2023",
        display: [
          { icon: NotebookText },
          { icon: CodeXml },
          { icon: CheckCheck },
          { icon: Presentation },
          { icon: BookCheck },
          { icon: NotebookPen },
        ],
        description: "In cillum pariatur quis mollit aliquip in cillum nisi ut minim enim.",
        tags: ["minim enim", "minim enim"],
      },
    ],
    links: [
      { url: "https://platform1.com", label: "Visit Site" },
      { url: "https://platform1-docs.com", label: "Read Docs" },
    ],
  },
  {
    id: "hackernoon",
    title: "Hackernoon",
    description:
      "I'm a freelance writer and I've written numerous articles and blog posts on various topics, including",
    focuses: ["technology", "travel", "personal growth"],
    articles: [
      {
        title: "My First Blog Post",
        link: {
          url: "https://medium.com/@yourusername/my-first-blog-post-355531635569",
          label: "My First Blog Post",
        },
        date: "March 15, 2023",
        display: [
          { icon: NotebookText },
          { icon: CodeXml },
          { icon: CheckCheck },
          { icon: Presentation },
        ],
        description: "minim enim",
        tags: ["minim enim", "minim enim"],
      },
    ],
    links: [
      { url: "https://platform1.com", label: "Visit Site" },
      { url: "https://platform1-docs.com", label: "Read Docs" },
    ],
  },
];

export const projects: PortfolioProject[] = [
  {
    id: "mybussiness",
    title: "My Website Business Project",
    description:
      "This is a personal photography portfolio showcasing my journey through various landscapes and cityscapes. The project features a dynamic gallery, an interactive gallery layout, and optimized images for different screen sizes.",
    technologies: ["Next.js", "TypeScript", "Docker", "Tailwind", "Yup"],
    features: ["React", "TailwindCSS", "Node.js", "Express", "MongoDB"],
    images: [
      {
        src: "/images/business/contact_form.png",
        alt: "contact form",
        description: "minim enim",
      },
      {
        src: "/images/business/elevate_business.png",
        alt: "elevate_business",
        description: "minim enim",
      },
      {
        src: "/images/business/our_values.png",
        alt: "our_values",
        description: "minim enim",
      },
      {
        src: "/images/business/payment_plans.png",
        alt: "payment",
        description: "minim enim",
      },
      {
        src: "/images/business/personalized_web_design.png",
        alt: "personalized_web_design",
        description: "minim enim",
      },
      {
        src: "/images/business/portfolio_website.png",
        alt: "portfolio_website",
        description: "minim enim",
      },
      {
        src: "/images/business/professional_website.png",
        alt: "professional_website",
        description: "minim enim",
      },
    ],
  },
  {
    id: "iacwebsite",
    title: "International Activites Club Official Website",
    description:
      "An e-commerce platform built with React and Node.js. It supports user authentication, a shopping cart, and a complete checkout system.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Docker",
      "Tailwind",
      "Chart.js",
      "Yup",
    ],
    features: [],
    images: [
      { src: "/images/iac/about_classes.png", alt: "minim enim", description: "minim enim" },
      { src: "/images/iac/introduction.png", alt: "minim enim", description: "minim enim" },
      { src: "/images/iac/main_page.png", alt: "minim enim", description: "minim enim" },
      { src: "/images/iac/overview.png", alt: "minim enim", description: "minim enim" },
      { src: "/images/iac/staff_page.png", alt: "minim enim", description: "minim enim" },
    ],
    liveLink: "https://iacafterschools.com/",
  },
  {
    id: "quizapplication",
    title: "A Full-Stack Quiz Application",
    description:
      "An e-commerce platform built with React and Node.js. It supports user authentication, a shopping cart, and a complete checkout system.",
    technologies: ["localStorage", "sessionStorage", "JavaScript", "cookies"],
    features: [],
    images: [
      { src: "/images/quizapp/registration.png", alt: "minim enim", description: "minim enim" },
      { src: "/images/quizapp/taking_quiz.png", alt: "minim enim", description: "minim enim" },
      { src: "/images/quizapp/quiz_selection.png", alt: "minim enim", description: "minim enim" },
      { src: "/images/quizapp/quiz_history.png", alt: "minim enim", description: "minim enim" },
      { src: "/images/quizapp/level_selection.png", alt: "minim enim", description: "minim enim" },
      {
        src: "/images/quizapp/leaderboard_selection.png",
        alt: "minim enim",
        description: "minim enim",
      },
      { src: "/images/quizapp/leaderboard.png", alt: "minim enim", description: "minim enim" },
    ],
    githubLink: "https://github.com/tmchuynh/Quiz-App",
  },
  {
    id: "sudoku",
    title: "A Sudoku Application for CodeNinjas",
    description:
      "An e-commerce platform built with React and Node.js. It supports user authentication, a shopping cart, and a complete checkout system.",
    features: [],
    images: [{ src: "/images/sudoku/game.png", alt: "minim enim", description: "minim enim" }],
    githubLink: "https://github.com/tmchuynh/sudoku",
  },
  {
    id: "frontendbook",
    title: "A Front-end Development Book for Beginners",
    description:
      "An e-commerce platform built with React and Node.js. It supports user authentication, a shopping cart, and a complete checkout system.",
    features: [],
    images: [
      {
        src: "/images/frontend/table_of_contents.png",
        alt: "minim enim",
        description: "minim enim",
      },
      { src: "/images/frontend/abbr.png", alt: "minim enim", description: "minim enim" },
      { src: "/images/frontend/accessibility.png", alt: "minim enim", description: "minim enim" },
      {
        src: "/images/frontend/document_structure.png",
        alt: "minim enim",
        description: "minim enim",
      },
      { src: "/images/frontend/css.png", alt: "minim enim", description: "minim enim" },
      { src: "/images/frontend/quizapp.png", alt: "minim enim", description: "minim enim" },
      { src: "/images/frontend/next.png", alt: "minim enim", description: "minim enim" },
      { src: "/images/frontend/framework.png", alt: "minim enim", description: "minim enim" },
    ],
  },
  {
    id: "backendbook",
    title: "A Back-end Development Book for Beginners",
    description:
      "An e-commerce platform built with React and Node.js. It supports user authentication, a shopping cart, and a complete checkout system.",
    features: [],
    images: [
      { src: "/images/backend/github.png", alt: "minim enim", description: "minim enim" },
      { src: "/images/backend/principles.png", alt: "minim enim", description: "minim enim" },
      {
        src: "/images/backend/design_principles.png",
        alt: "minim enim",
        description: "minim enim",
      },
      { src: "/images/backend/databases.png", alt: "minim enim", description: "minim enim" },
      { src: "/images/backend/containers.png", alt: "minim enim", description: "minim enim" },
      { src: "/images/backend/web_dev.png", alt: "minim enim", description: "minim enim" },
      { src: "/images/backend/base.png", alt: "minim enim", description: "minim enim" },
    ],
  },
];

export const navBar = {
  navMain: [
    {
      title: "Home",
      url: "/",
      icon: House,
    },
    {
      title: "About Me",
      url: "/about",
      icon: CircleUserRound,
    },
    {
      title: "Information",
      icon: Info,
      items: [
        {
          title: "Resume",
          url: "/info/resume",
        },
        {
          title: "Education",
          url: "/info/education",
        },
        {
          title: "Tech Stacks",
          url: "/info/techStack",
        },
        {
          title: "Relevant Achievements",
          url: "/info/experiences&achievements",
        },
      ],
    },
    {
      title: "Accessibility Statement",
      icon: Accessibility,
      url: "/accessibility",
    },
    {
      title: "Contact",
      url: "/contact",
      icon: Send,
    },
  ],
  works: [
    {
      title: "Writings",
      icon: Pen,
      items: [
        {
          title: "Front-End Development Book",
          url: "/projects/frontendbook",
        },
        {
          title: "Back-End Development Book",
          url: "/projects/backendbook",
        },
        {
          title: "Medium Blog",
          url: "/writings/medium",
        },
        {
          title: "Dev.to Blog",
          url: "/writings/devto",
        },
        {
          title: "Hackernoon Blog",
          url: "/writings/hackernoon",
        },
      ],
    },
    {
      title: "Projects",
      icon: MessageSquareCode,
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
      ],
    },
    {
      title: "Future Projects",
      icon: BookMarked,
      items: [
        {
          title: "Full-Stack Web Development",
          url: "/futureProjects/futureProject1",
        },
        {
          title: "Front-end Development",
          url: "/futureProjects/futureProject1",
        },
        {
          title: "Back-end Development",
          url: "/futureProjects/futureProject1",
        },
        {
          title: "Pre Medical",
          url: "/futureProjects/futureProject1",
        },
        {
          title: "Business",
          url: "/futureProjects/futureProject1",
        },
        {
          title: "Law",
          url: "/futureProjects/futureProject1",
        },
        {
          title: "Entrepreneurship",
          url: "/roadmaps/entrepreneurship",
        },
      ],
    },
  ],
};

const slider = [
  {
    name: "bitcoin.pdf",
    body: "Bitcoin is a cryptocurrency invented in 2008 by an unknown person or group of people using the name Satoshi Nakamoto.",
  },
  {
    name: "finances.xlsx",
    body: "A spreadsheet or worksheet is a file made of rows and columns that help sort data, arrange data easily, and calculate numerical data.",
  },
  {
    name: "logo.svg",
    body: "Scalable Vector Graphics is an Extensible Markup Language-based vector image format for two-dimensional graphics with support for interactivity and animation.",
  },
  {
    name: "keys.gpg",
    body: "GPG keys are used to encrypt and decrypt email, files, directories, and whole disk partitions and to authenticate messages.",
  },
  {
    name: "seed.txt",
    body: "A seed phrase, seed recovery phrase or backup seed phrase is a list of words which store all the information needed to recover Bitcoin funds on-chain.",
  },
];

const animatedAlerts = [
  "Complete React Tutorial",
  "Work on Portfolio",
  "Finish API Project",
  "Finish API Project",
  "Finish API Project",
  "Finish API Project",
  "Finish API Project",
  "Finish API Project",
  "Finish API Project",
  "Finish API Project",
  "Finish API Project",
  "Read Web Dev Book",
  "Attend Team Meeting",
  "Write Blog Post",
  "Take a Break",
];

export const features = [
  {
    Icon: BellIcon,
    name: "Projects",
    description: "Get notified when something happens.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2",
    background: (
      <AnimatedList className="max-w-md mx-auto">
        {animatedAlerts.map( ( item, index ) => (
          <div
            key={index}
            className="bg-secondary text-secondary-foreground w-10/12 mx-auto opacity-60 p-4 -z-0 rounded-lg shadow-lg"
          >
            {item}
          </div>
        ) )}
      </AnimatedList>
    ),
  },
  {
    Icon: DatabaseZap,
    name: "Full text search",
    description: "Search through all your files in one place.",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "col-span-4 lg:col-span-2",
  },
  {
    Icon: Share2Icon,
    name: "Technology Stacks",
    description: "Supports 100+ integrations and counting.",
    href: "#",
    cta: "Learn more",
    className: "col-span-4 lg:col-span-2",
    background: (
      <AnimatedBeamMultipleOutput className="absolute h-[300px] border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105" />
    ),
  },
  {
    Icon: FileTextIcon,
    name: "Experiences",
    description: "We automatically save your files as you type.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-1",
    background: (
      <Marquee
        pauseOnHover
        className="absolute top-10 [--duration:20s] [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] "
      >
        {slider.map( ( f, idx ) => (
          <figure
            key={idx}
            className={cn(
              "relative w-32 cursor-pointer overflow-hidden rounded-xl border p-4",
              "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
              "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
              "transform-gpu blur-[1px] transition-all duration-300 ease-out hover:blur-none"
            )}
          >
            <div className="flex flex-row items-center gap-2">
              <div className="flex flex-col">
                <figcaption className="text-sm font-medium dark:text-white ">
                  {f.name}
                </figcaption>
              </div>
            </div>
            <blockquote className="mt-2 text-xs">{f.body}</blockquote>
          </figure>
        ) )}
      </Marquee>
    ),
  },
  {
    Icon: GlobeIcon,
    name: "Statements",
    description: "Supports 100+ languages and counting.",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "col-span-3 lg:col-span-1",
  },

  {
    Icon: CalendarIcon,
    name: "Calendar",
    description: "Use the calendar to filter your files by date.",
    className: "col-span-3 lg:col-span-1",
    href: "#",
    cta: "Learn more",
    background: (
      <Calendar
        mode="single"
        selected={new Date( 2022, 4, 11, 0, 0, 0 )}
        className="absolute right-10 bottom-12 origin-top rounded-md border transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] group-hover:scale-105"
      />
    ),
  },
];
