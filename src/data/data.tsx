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
  Github,
  Code,
  Book,
  BookCopy,
  LibraryBig,
  PencilLine,
  BookOpen,
  NotepadText,
  GitCompareArrows,
  Braces,
  SquareChevronRight,
  SquareDashedBottomCode,
  SquareTerminal,
  Binary,
  Terminal,
  SpellCheck,
  MessageCircleCode,
  BookOpenCheck,
  Signature,
  Waypoints,
} from "lucide-react";
import { PortfolioProject, WritingPlatform } from "./types";
import {
  FaBookOpenReader,
  FaBrain,
  FaCodeCompare,
  FaCss3Alt,
  FaFileSignature,
  FaGoodreads,
  FaHandshake,
  FaHtml5,
  FaPenFancy,
  FaPeopleGroup,
  FaPython,
  FaReact,
  FaShieldHalved,
  FaUserLock,
  FaWindows,
} from "react-icons/fa6";
import { IoCall, IoLogoCodepen, IoLogoIonic } from "react-icons/io5";
import {
  SiAuth0,
  SiFlutter,
  SiLibreofficewriter,
  SiOpenai,
  SiTypescript,
  SiWritedotas,
} from "react-icons/si";
import { CgWebsite } from "react-icons/cg";
import { FaHandsHelping, FaIdCard } from "react-icons/fa";
import { MdBook, MdContactSupport, MdMapsHomeWork, MdModeOfTravel, MdOutlineSyncLock, MdOutlineTravelExplore, MdTypeSpecimen } from "react-icons/md";
import { LuBrainCircuit, LuComponent } from "react-icons/lu";
import { TbAuth2Fa } from "react-icons/tb";
import { TfiWrite } from "react-icons/tfi";
import { VscExtensions, VscVscodeInsiders } from "react-icons/vsc";
import { GiPalmTree, GiTechnoHeart } from "react-icons/gi";
import { BsChatHeartFill } from "react-icons/bs";
import { GrWorkshop } from "react-icons/gr";
import { RiNextjsFill } from "react-icons/ri";
import {
  PiBookOpenText,
  PiBookOpenTextDuotone,
  PiFileCssLight,
  PiFileHtmlLight,
  PiFileJsLight,
  PiLockKeyOpenFill,
  PiProjectorScreenFill,
} from "react-icons/pi";
import { TimelineEvent } from "@/data/types";
import { AnimatedBeamMultipleOutput } from "@/components/AnimatedOutput";
import Marquee from "@/components/ui/marquee";
import { cn } from "@/lib/utils";
import { AnimatedList } from "@/components/ui/animated-list";
import { Calendar } from "@/components/ui/calendar";
import clsx from "clsx";

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
      {
        src: "/images/inspiration1.jpg",
        alt: "minim enim",
        description: "minim enim",
      },
      {
        src: "/images/inspiration2.jpg",
        alt: "minim enim",
        description: "minim enim",
      },
      {
        src: "/images/inspiration3.jpg",
        alt: "minim enim",
        description: "minim enim",
      },
    ],
    timeline: [
      "Research and Initial Planning",
      "Prototype and Design",
      "Development (Frontend and Backend)",
      "Testing and Deployment",
    ],
    inspiration: [
      {
        src: "/images/inspiration1.jpg",
        alt: "minim enim",
        description: "minim enim",
      },
      {
        src: "/images/inspiration2.jpg",
        alt: "minim enim",
        description: "minim enim",
      },
      {
        src: "/images/inspiration3.jpg",
        alt: "minim enim",
        description: "minim enim",
      },
    ],
    githubLink: "https://github.com/yourgithub/future-ecommerce",
    liveLink: "https://future-ecommerce.com",
  },
];

export const writingPlatforms: WritingPlatform[] = [
  {
    id: "devto",
    title: "Dev.to",
    description:
      "I'm a freelance developer and I've written numerous articles and blog posts on various topics, including technology, travel, and personal growth. I'm always looking for new content to share.",
    focuses: ["technology", "travel", "personal growth"],
    articles: [
      {
        title: "A Comparative Look at ShadeCN/UI and Magic UI",
        link: {
          url: "https://dev.to/tmchuynh/a-comparative-look-at-shadecnui-and-magic-ui-streamlining-your-frontend-development-122g",
          label: "Start Using Them Today!",
        },
        date: "Nov 21, 2024",
        display: [
          { icon: FaReact },
          { icon: LuComponent },
          { icon: RiNextjsFill },
        ],
        description:
          "Compare ShadeCN/UI and Magic UI to discover which design system best suits your project’s needs for functionality, flexibility, and aesthetics.",
        tags: ["UI Design Systems", "Component Libraries Comparison"],
      },
      {
        title: "Comparative Guide to NextAuth.js vs. Passport.js",
        link: {
          url: "https://dev.to/tmchuynh/nextauthjs-vs-passportjs-a-comparative-guide-to-authentication-in-nodejs-applications-hcc",
          label: "Which One is Right For You?",
        },
        date: "Nov 18, 2024",
        display: [
          { icon: FaUserLock },
          { icon: SiAuth0 },
          { icon: TbAuth2Fa },
        ],
        description:
          "Explore the key differences between NextAuth.js and Passport.js to choose the best authentication library for your Node.js or Next.js project.",
        tags: ["Authentication Libraries", "NextAuth.js vs Passport.js"],
      },
      {
        title: "Type Safety: TypeScript with React",
        link: {
          url: "https://dev.to/tmchuynh/typescript-with-react-2pp",
          label: "Start Learning",
        },
        date: "Nov 9, 2024",
        display: [{ icon: SiTypescript }, { icon: MdOutlineSyncLock }, { icon: FaReact }],
        description:
          "Learn how TypeScript enhances React development by providing type safety, reducing bugs, and improving code maintainability.",
        tags: ["TypeScript Best Practices", "React Type Safety"],
      },
      {
        title: "ADHD in Tech: Strengths, and Support Strategies",
        link: {
          url: "https://dev.to/tmchuynh/adhd-in-the-tech-industry-challenges-strengths-and-support-strategies-nk2",
          label: "Become More Aware",
        },
        date: "Nov 2, 2024",
        display: [
          { icon: FaHandsHelping },
          { icon: GiTechnoHeart },
          { icon: MdContactSupport },
        ],
        description:
          "While ADHD presents challenges, it also brings unique strengths that can be powerful assets in the tech world.",
        tags: ["Neurodiversity in Tech", "ADHD Strengths and Strategies"],
      },
      {
        title: "VSCode Extensions I'm in LOVE With 1.0 and 2.0",
        link: {
          url: "https://dev.to/tmchuynh/vscode-extensions-im-in-love-with-oab",
          label: "Take a Look",
        },
        date: "Jun 6, 2023",
        display: [
          { icon: VscVscodeInsiders },
          { icon: VscExtensions },
          { icon: BsChatHeartFill },
        ],
        description:
          "Discover the must-have VSCode extensions that boost productivity, streamline workflows, and make coding an absolute joy.",
        tags: ["VSCode Productivity Tools", "Must-Have Extensions"],
      },
      {
        title: "Ionic vs React Nactive vs Flutter",
        link: {
          url: "https://dev.to/tmchuynh/ionic-vs-react-nactive-vs-flutter-1fhf",
          label: "View A Comparison",
        },
        date: "March 15, 2023",
        display: [
          { icon: IoLogoIonic },
          { icon: FaReact },
          { icon: SiFlutter },
        ],
        description:
          "An in-depth comparison of Ionic, React Native, and Flutter to help you choose the best framework for your next mobile app project.",
        tags: ["Mobile Development Frameworks", "Framework Comparison"],
      },
      {
        title: "A Personal Website w/ EVERYTHING",
        link: {
          url: "https://dev.to/tmchuynh/a-personal-website-w-everything-268k",
          label: "See How to Create Yours Today",
        },
        date: "March 15, 2023",
        display: [
          { icon: FaPeopleGroup },
          { icon: CgWebsite },
          { icon: Code },
        ],
        description:
          "How I built a personal website that showcases everything from my skills and projects to my personality and creative flair.",
        tags: ["Web Development Inspiration", "Portfolio Design"],
      },
      {
        title: "Best Contactless Business Card Options",
        link: {
          url: "https://dev.to/tmchuynh/best-contactless-business-card-options-4do5",
          label: "Grab Yours Today",
        },
        date: "March 15, 2023",
        display: [{ icon: FaIdCard }, { icon: FaHandshake }, { icon: IoCall }],
        description:
          "Explore the top contactless business card solutions that combine technology, convenience, and sustainability for modern networking.",
        tags: ["Digital Networking Tools", "Contactless"],
      },
      {
        title: "Machine Learning Project Ideas",
        link: {
          url: "https://dev.to/tmchuynh/intermediate-to-advanced-machine-learning-project-ideas-3j51",
          label: "What's Stopping You?",
        },
        date: "May 14, 2022",
        display: [{ icon: SiOpenai }, { icon: LuBrainCircuit }, { icon: Waypoints }],
        description:
          "Unlock your creativity with these innovative machine learning project ideas, perfect for beginners and seasoned developers alike.",
        tags: ["Project Inspiration", "Machine Learning"],
      },
      {
        title: "Who's the Better Hire? - Jack of All Trades OR Master of One",
        link: {
          url: "https://dev.to/tmchuynh/whos-the-better-hire-jack-of-all-trades-or-master-of-one-3b6a",
          label: "Which Are You?",
        },
        date: "Apr 22, 2022",
        display: [
          { icon: FaFileSignature },
          { icon: GrWorkshop },
          { icon: MdMapsHomeWork },
        ],
        description:
          "An insightful exploration of whether a versatile generalist or a highly specialized expert makes the ideal hire for your team.",
        tags: ["Hiring Strategies", "Generalist vs Specialist"],
      },
      {
        title: "What's a Digital Nomad? Would You Become One?",
        link: {
          url: "https://dev.to/tmchuynh/whats-a-digital-nomad-4e2e",
          label: "Decide Today",
        },
        date: "Apr 6, 2022 ",
        display: [
          { icon: MdOutlineTravelExplore },
          { icon: GiPalmTree },
          { icon: MdModeOfTravel },
        ],
        description:
          "Discover the lifestyle of digital nomads—professionals who work remotely while traveling the world and embracing ultimate freedom.",
        tags: ["Remote Work Lifestyle", "Digital Nomad"],
      },
      {
        title: "Intermediate & Advanced Python Projects",
        link: {
          url: "https://dev.to/tmchuynh/intermediate-advanced-python-projects-4hb8",
          label: "Start Creating",
        },
        date: "Mar 31, 2022",
        display: [{ icon: PiProjectorScreenFill }, { icon: FaPython }, { icon: FaCodeCompare }],
        description:
          "Level up your Python skills with these exciting intermediate and advanced projects, designed to challenge and inspire developers",
        tags: ["Python Project Ideas", "Advanced Programming"],
      },
      {
        title: "Why Every Developer Should Write",
        link: {
          url: "https://dev.to/tmchuynh/why-every-developer-should-write-articles-47mb",
          label: "Read More",
        },
        date: "Mar 31, 2022",
        display: [
          { icon: SiLibreofficewriter },
          { icon: FaPenFancy },
          { icon: MdTypeSpecimen },
        ],
        description:
          "Explore the powerful benefits of writing for developers, from improving communication skills to solidifying technical knowledge and building a personal brand.",
        tags: ["Communication Skills", "Technical Writing Benefits"],
      },
      {
        title: "Books to Read as a Developer at Least Once",
        link: {
          url: "https://dev.to/tmchuynh/books-to-read-as-a-developer-33eh",
          label: "Start Reading Today",
        },
        date: "Mar 23, 2022",
        display: [
          { icon: MdBook },
          { icon: FaGoodreads },
          { icon: FaBookOpenReader },
        ],
        description:
          "Discover must-read books for developers that inspire growth, enhance technical skills, and provide valuable insights into the world of coding and beyond.",
        tags: ["Developer Reading List", "Programming Book Recommendations"],
      },
      {
        title: "9 Tips to Start Learning HTML/CSS",
        link: {
          url: "https://dev.to/tmchuynh/9-tips-to-start-learning-htmlcss-2a58",
          label: "Share with a Friend",
        },
        date: "Mar 19, 2022",
        display: [{ icon: PiFileCssLight }, { icon: PiFileHtmlLight }, { icon: PiFileJsLight }],
        description:
          "Master the basics of web development with these 9 essential tips for learning HTML and CSS effectively and confidently.",
        tags: ["Web Development Basics", "HTML and CSS Essentials"],
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
      {
        src: "/images/iac/about_classes.png",
        alt: "minim enim",
        description: "minim enim",
      },
      {
        src: "/images/iac/introduction.png",
        alt: "minim enim",
        description: "minim enim",
      },
      {
        src: "/images/iac/main_page.png",
        alt: "minim enim",
        description: "minim enim",
      },
      {
        src: "/images/iac/overview.png",
        alt: "minim enim",
        description: "minim enim",
      },
      {
        src: "/images/iac/staff_page.png",
        alt: "minim enim",
        description: "minim enim",
      },
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
      {
        src: "/images/quizapp/registration.png",
        alt: "minim enim",
        description: "minim enim",
      },
      {
        src: "/images/quizapp/taking_quiz.png",
        alt: "minim enim",
        description: "minim enim",
      },
      {
        src: "/images/quizapp/quiz_selection.png",
        alt: "minim enim",
        description: "minim enim",
      },
      {
        src: "/images/quizapp/quiz_history.png",
        alt: "minim enim",
        description: "minim enim",
      },
      {
        src: "/images/quizapp/level_selection.png",
        alt: "minim enim",
        description: "minim enim",
      },
      {
        src: "/images/quizapp/leaderboard_selection.png",
        alt: "minim enim",
        description: "minim enim",
      },
      {
        src: "/images/quizapp/leaderboard.png",
        alt: "minim enim",
        description: "minim enim",
      },
    ],
    githubLink: "https://github.com/tmchuynh/Quiz-App",
  },
  {
    id: "sudoku",
    title: "A Sudoku Application for CodeNinjas",
    description:
      "An e-commerce platform built with React and Node.js. It supports user authentication, a shopping cart, and a complete checkout system.",
    features: [],
    images: [
      {
        src: "/images/sudoku/game.png",
        alt: "minim enim",
        description: "minim enim",
      },
    ],
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
      {
        src: "/images/frontend/abbr.png",
        alt: "minim enim",
        description: "minim enim",
      },
      {
        src: "/images/frontend/accessibility.png",
        alt: "minim enim",
        description: "minim enim",
      },
      {
        src: "/images/frontend/document_structure.png",
        alt: "minim enim",
        description: "minim enim",
      },
      {
        src: "/images/frontend/css.png",
        alt: "minim enim",
        description: "minim enim",
      },
      {
        src: "/images/frontend/quizapp.png",
        alt: "minim enim",
        description: "minim enim",
      },
      {
        src: "/images/frontend/next.png",
        alt: "minim enim",
        description: "minim enim",
      },
      {
        src: "/images/frontend/framework.png",
        alt: "minim enim",
        description: "minim enim",
      },
    ],
  },
  {
    id: "backendbook",
    title: "A Back-end Development Book for Beginners",
    description:
      "An e-commerce platform built with React and Node.js. It supports user authentication, a shopping cart, and a complete checkout system.",
    features: [],
    images: [
      {
        src: "/images/backend/github.png",
        alt: "minim enim",
        description: "minim enim",
      },
      {
        src: "/images/backend/principles.png",
        alt: "minim enim",
        description: "minim enim",
      },
      {
        src: "/images/backend/design_principles.png",
        alt: "minim enim",
        description: "minim enim",
      },
      {
        src: "/images/backend/databases.png",
        alt: "minim enim",
        description: "minim enim",
      },
      {
        src: "/images/backend/containers.png",
        alt: "minim enim",
        description: "minim enim",
      },
      {
        src: "/images/backend/web_dev.png",
        alt: "minim enim",
        description: "minim enim",
      },
      {
        src: "/images/backend/base.png",
        alt: "minim enim",
        description: "minim enim",
      },
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
          title: "Dev.to Blog",
          url: "/writings/devto",
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
    name: "firstinrow.pdf",
    body: "Bitcoin is a cryptocurrency invented in 2008 by an unknown person or group of people using the name Satoshi Nakamoto.",
  },
  {
    name: "bitcoin.pdf",
    body: "Bitcoin is a cryptocurrency invented in 2008 by an unknown person or group of people using the name Satoshi Nakamoto.",
  },
  {
    name: "bitcoin.pdf",
    body: "Bitcoin is a cryptocurrency invented in 2008 by an unknown person or group of people using the name Satoshi Nakamoto.",
  },
  {
    name: "bitcoin.pdf",
    body: "Bitcoin is a cryptocurrency invented in 2008 by an unknown person or group of people using the name Satoshi Nakamoto.",
  },
  {
    name: "bitcoin.pdf",
    body: "Bitcoin is a cryptocurrency invented in 2008 by an unknown person or group of people using the name Satoshi Nakamoto.",
  },
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
    name: "lastinrow.txt",
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
    Icon: DatabaseZap,
    name: "Full text search",
    description: "Search through all your files in one place.",
    href: "/",
    cta: "Learn more",
    background: <img className="-top-20 -right-20 absolute opacity-60" />,
    className: "col-span-4",
  },
  {
    Icon: CalendarIcon,
    name: "Calendar",
    description: "Use the calendar to filter your files by date.",
    className: "flex items-end col-span-4",
    href: "#",
    cta: "Learn more",
    background: (
      <div className="px-8 py-10">
        <Calendar
          mode="single"
          selected={new Date( 2022, 4, 11, 0, 0, 0 )}
          className="group-hover:scale-105 [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] border rounded-md w-fit origin-top transition-all duration-300 ease-out"
        />
      </div>
    ),
  },
  {
    Icon: Share2Icon,
    name: "Technology Stacks",
    description: "Supports 100+ integrations and counting.",
    href: "#",
    cta: "Learn more",
    className: "col-span-9 relative transform scale-25",
    background: (
      <AnimatedBeamMultipleOutput className="group-hover:scale-105 [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] absolute border-none h-[9.5rem] transition-all duration-300 ease-out" />
    ),
  },
  {
    Icon: FileTextIcon,
    name: "Experiences",
    description: "We automatically save your files as you type.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3",
    background: (
      <Marquee
        pauseOnHover
        repeat={5}
        vertical
        className="[mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] flex mx-2 min-w-7xl"
      >
        {slider.map( ( f, idx ) => (
          <figure
            key={idx}
            className={clsx(
              "relative border-secondary p-4 border rounded-xl cursor-pointer overflow-hidden",
            )}
          >
            <div className="flex items-center gap-2 w-16">
              <div className="flex">
                <figcaption className="font-medium text-sm dark:text-white">
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
    className: "col-span-3",
    background: <img className="-top-20 -right-20 absolute opacity-60" />,
  },
  {
    Icon: BellIcon,
    name: "Projects",
    description: "Get notified when something happens.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3",
    background: (
      <AnimatedList className="mx-auto max-w-md">
        {animatedAlerts.map( ( item, index ) => (
          <div
            key={index}
            className="-z-0 border-highlight bg-accent opacity-50 shadow-lg mx-auto p-4 border rounded-lg w-10/12 text-accent-foreground"
          >
            {item}
          </div>
        ) )}
      </AnimatedList>
    ),
  },
];
