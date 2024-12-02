import {
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
import { BookProject, CommandShortcuts, PortfolioProject, WritingPlatform } from "./types";
import {
  FaChess,
  FaDatabase,
  FaWindows,
} from "react-icons/fa6";
import { TimelineEvent } from "@/data/types";
import Marquee from "@/components/ui/marquee";
import { FaUniversalAccess } from "react-icons/fa";
import { GrAchievement } from "react-icons/gr";
import { IoBusiness } from "react-icons/io5";
import { SiStylelint } from "react-icons/si";
import { MdOutlineStackedBarChart } from "react-icons/md";
import { AnimatedList } from "@/components/ui/animated-list";
import { Calendar } from "@/components/ui/calendar";
import { IconClouds } from "@/components/IconCircles";
import Globe from "@/components/ui/globe";
import ClientTweetCard from "@/components/ClientTweetCard";

export const navBar = {
  navMain: [
    {
      title: "Home",
      url: "/",
      icon: House,
    },
    {
      title: "About Me",
      icon: Info,
      items: [
        {
          title: "Who I Am",
          url: "/about",
          icon: CircleUserRound,
        },
        {
          title: "Accessibility Declaration",
          icon: Accessibility,
          url: "/info/accessibility",
        },
        {
          title: "Resume",
          url: "/info/resume",
        },
        {
          title: "Tech Stacks",
          url: "/info/techStack",
        },
        {
          title: "Achievements",
          url: "/info/experiences&achievements",
        },
      ],
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
          url: "/book/frontendbook",
        },
        {
          title: "Back-End Development Book",
          url: "/book/backendbook",
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

export const shortcuts = [
  {
    shortcut: (
      <span>
        Ctrl + Alt + L
      </span>
    ),
    description: "Toggle Dark/Light Mode",
  },
  {
    shortcut: (
      <span>
        <FaWindows className="inline-flex mr-1" /> + B
      </span>
    ),
    description: "Open/Close Side Menu",
  },
  {
    shortcut: (
      <span>
        Ctrl + Shift + F
      </span>
    ),
    description: "Open/Close Spotlight Search",
  },
  {
    shortcut: (
      <span>
        <FaWindows className="inline-flex mr-1" /> + /
      </span>
    ),
    description: "Cut selected text",
  },
  {
    shortcut: (
      <span>
        <FaWindows className="inline-flex mr-1" /> + /
      </span>
    ),
    description: "Undo last action",
  },
  {
    shortcut: (
      <span>
        <FaWindows className="inline-flex mr-1" /> + /
      </span>
    ),
    description: "Redo last action",
  },
  {
    shortcut: (
      <span>
        <FaWindows className="inline-flex mr-1" /> + /
      </span>
    ),
    description: "Save the current document",
  },
  {
    shortcut: (
      <span>
        <FaWindows className="inline-flex mr-1" /> + /
      </span>
    ),
    description: "Close dialog or cancel",
  },
];

export const commands: CommandShortcuts[] = [
  {
    groupName: "Suggestions",
    items: [
      {
        icon: MdOutlineStackedBarChart,
        title: "Tech Stack",
        onSelect: "/info/techStack",
      },
      {
        icon: FaUniversalAccess,
        title: "Accessibility Declaration",
        onSelect: "/accessibility",
      },
      {
        icon: GrAchievement,
        title: "Achievements and Certifications",
        onSelect: "/info/experiences&achievements",
      },
    ],
  },
  {
    groupName: "Projects",
    items: [
      {
        icon: FaChess,
        title: "International Activities Club Website",
        onSelect: "/projects/iacwebsite",
      },
      {
        icon: SiStylelint,
        title: "A Front-end Development Book for Beginners",
        onSelect: "/writings/book/frontendbook",
      },
      {
        icon: FaDatabase,
        title: "A Back-end Development Book for Beginners",
        onSelect: "/writings/book/backendbook",
      },
      {
        icon: IoBusiness,
        title: "Business",
        onSelect: "/profile",
      },
    ],
  },
];

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
  {
    id: "futureProject10",
    title: "Future E-commerce Website",
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
    focuses: ["Joined on Feb 23, 2022", "190+ posts published", "230+ comments written"],
    links: [
      { url: "https://dev.to/tmchuynh", label: "Visit Site" },
    ],
  },
];

export const bookProjects: BookProject[] = [
  {
    id: "frontendbook",
    title: "A Front-end Development Book for Beginners",
    description:
      "An e-commerce platform built with React and Node.js. It supports user authentication, a shopping cart, and a complete checkout system.",
    focuses: [],
    images: [
      {
        src: "/images/frontend/table_of_contents.png",
        alt: "table_of_contents",
        description: "minim enim",
      },
      {
        src: "/images/frontend/abbr.png",
        alt: "abbreviations page",
        description: "minim enim",
      },
      {
        src: "/images/frontend/accessibility.png",
        alt: "accessibility information",
        description: "minim enim",
      },
      {
        src: "/images/frontend/document_structure.png",
        alt: "document_structure",
        description: "minim enim",
      },
      {
        src: "/images/frontend/css.png",
        alt: "CSS",
        description: "minim enim",
      },
      {
        src: "/images/frontend/quizapp.png",
        alt: "building a quiz application",
        description: "minim enim",
      },
      {
        src: "/images/frontend/next.png",
        alt: "learning about next.js",
        description: "minim enim",
      },
      {
        src: "/images/frontend/framework.png",
        alt: "learning about frameworks and libraries",
        description: "minim enim",
      },
    ],
  },
  {
    id: "backendbook",
    title: "A Back-end Development Book for Beginners",
    description:
      "An e-commerce platform built with React and Node.js. It supports user authentication, a shopping cart, and a complete checkout system.",
    focuses: [],
    images: [
      {
        src: "/images/backend/github.png",
        alt: "GitHub basics",
        description: "minim enim",
      },
      {
        src: "/images/backend/principles.png",
        alt: "Database Principles",
        description: "minim enim",
      },
      {
        src: "/images/backend/design_principles.png",
        alt: "Database Design Principles",
        description: "minim enim",
      },
      {
        src: "/images/backend/databases.png",
        alt: "Database Basics",
        description: "minim enim",
      },
      {
        src: "/images/backend/containers.png",
        alt: "containers basics",
        description: "minim enim",
      },
      {
        src: "/images/backend/web_dev.png",
        alt: "introduction to web development",
        description: "minim enim",
      },
      {
        src: "/images/backend/base.png",
        alt: "BASE vs ACID",
        description: "minim enim",
      },
    ],
  },
];

export const projects: PortfolioProject[] = [
  {
    id: "mybusiness",
    title: "My Website Business Project",
    description:
      "A platform designed to sell high-quality, custom websites to businesses and individuals. The project combines modern technologies to deliver responsive, visually stunning, and SEO-optimized websites, tailored to meet client needs and drive online success.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Docker",
      "TailwindCSS",
      "Yup",
    ],
    features: [
      "Custom Website Packages: Offers tiered packages to meet diverse client needs, from small businesses to enterprises.",
      "Responsive Design: Guarantees all websites are mobile-friendly and fully optimized for different screen sizes.",
      "Containerized Deployment: Uses Docker to ensure scalable and consistent website hosting.",
      "Form Validation: Incorporates Yup to ensure secure and accurate client data collection during website setup.",
    ],
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
    title: "International Activities Club Official Website",
    description:
      "The official website for the International Activities Club, an after-school program in Irvine, CA, offering diverse activities such as sports (soccer, volleyball, basketball), performing arts, creative writing, and chess. The website serves as a hub for program information, schedules, and registration.",
    technologies: [
      "JavaScript",
      "Bootstrap",
      "Chart.js",
      "HTML",
      "CSS",
    ],
    features: [
      "Program Information: Provides detailed descriptions of all activities and programs offered by the club.",
      "Dynamic Schedule Display: Displays up-to-date schedules for activities using dynamic tables and interactive components.",
      "Registration System: Includes a user-friendly interface for parents to register their children for programs.",
      "Data Visualization: Uses Chart.js to present program participation statistics and trends visually.",
      "Responsive Design: Ensures the website functions seamlessly across devices, including desktops, tablets, and smartphones.",
      "Interactive Navigation: Intuitive menus and search functionality make it easy to find program details and schedules.",
    ],
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
      "A dynamic web-based quiz application that enables users to register, log in, take quizzes on various topics, and track their past quiz scores. Built with a focus on functionality and persistence, the application uses localStorage and sessionStorage to manage user data and quiz progress effectively.",
    technologies: [
      "JavaScript",
      "localStorage",
      "sessionStorage",
      "Cookies",
      "HTML",
      "CSS",
    ],
    features: [
      "User Registration & Login: Allows users to create an account by providing their first name, last name, email, and username. Registered users can securely log in to access their quizzes.",
      "Quiz Functionality: Users can select from a variety of quiz topics and take interactive quizzes designed to test their knowledge and skills.",
      "Score Tracking: Displays quiz scores upon completion, with a detailed history of past scores stored and sortable by percentage or date.",
      "Session Persistence: Utilizes sessionStorage to maintain quiz progress and localStorage to save user data and quiz history across sessions.",
      "Responsive Design: Ensures a seamless experience across devices, from desktops to smartphones.",
      "Secure Data Handling: Implements cookies for enhanced session management and data protection.",
    ],
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
      "An interactive Sudoku application designed for students at CodeNinjas. The application includes customizable difficulty levels, real-time validation, and user-friendly controls to enhance the learning experience and improve problem-solving skills.",
    features: [
      "Customizable difficulty levels: Easy, Medium, and Hard for all skill ranges.",
      "Real-time validation to alert users of incorrect entries.",
      "Interactive, user-friendly interface for seamless gameplay.",
      "Responsive design for use across devices, including desktops and tablets.",
      "Dynamic generation of Sudoku puzzles to ensure variety in gameplay.",
    ],
    images: [
      {
        src: "/images/sudoku/game.png",
        alt: "minim enim",
        description: "minim enim",
      },
    ],
    githubLink: "https://github.com/tmchuynh/sudoku",
  },
];

const marqueeDetails = [
  {
    name: "portfolio.pdf",
    body: "A portfolio is a collection of projects, achievements, and skills that demonstrate an individual's expertise and accomplishments.",
  },
  {
    name: "design-guide.pdf",
    body: "A design guide ensures consistency across projects by providing guidelines for visual elements, user interfaces, and brand identity.",
  },
  {
    name: "user-research.xlsx",
    body: "User research involves collecting insights about users' needs and behaviors to improve product design and usability.",
  },
  {
    name: "wireframes.svg",
    body: "Wireframes are visual guides that represent the skeletal framework of a website or application, focusing on layout and functionality.",
  },
  {
    name: "api-documentation.pdf",
    body: "API documentation provides instructions and examples for developers to integrate and use an API effectively in their applications.",
  },
  {
    name: "financial-report.xlsx",
    body: "Financial reports summarize the financial performance and position of an organization over a specific period.",
  },
  {
    name: "branding-logo.svg",
    body: "A branding logo is a visual symbol that represents a company's identity and values, used to establish brand recognition.",
  },
  {
    name: "encrypted-keys.gpg",
    body: "Encrypted keys provide secure methods for protecting sensitive data and authenticating access to digital resources.",
  },
  {
    name: "project-plan.txt",
    body: "A project plan outlines the objectives, timeline, and tasks required to successfully complete a project.",
  },
  {
    name: "presentation-slides.pptx",
    body: "Presentation slides communicate ideas visually and are used for sharing information, proposals, or achievements.",
  },
];


const animatedAlerts = [
  "Complete React Tutorial",
  "Work on Portfolio",
  "Finish API Project",
  "Design a Responsive Layout",
  "Debug Frontend Issues",
  "Optimize Site Performance",
  "Integrate Third-Party APIs",
  "Polish Accessibility Features",
  "Prepare Presentation for Project",
  "Add New Blog Section",
  "Deploy Website Updates",
  "Refactor JavaScript Codebase",
  "Write Documentation for Features",
  "Research UI Trends",
  "Plan Next Web Development Project",
  "Take a Break",
  "Submit Client Proposal",
  "Update Resume with New Projects",
  "Collaborate on Open Source Project",
  "Test Mobile Responsiveness",
  "Fix Styling Bugs in Footer",
  "Validate Forms for Accessibility",
];

export const features = [
  {
    Icon: BellIcon,
    name: "Projects",
    description: "Browse through my portfolio of completed projects, showcasing my skills in web development, design, and problem-solving.",
    href: "/projects",
    cta: "Learn more",
    className: "col-span-5",
    background: (
      <AnimatedList className="mx-auto max-w-md">
        {animatedAlerts.map( ( item, index ) => (
          <div
            key={index}
            className="-z-0 bg-secondary text-secondary-foreground opacity-50 shadow-lg mx-auto p-4 border rounded-lg w-10/12"
          >
            {item}
          </div>
        ) )}
      </AnimatedList>
    ),
  },
  {
    Icon: FaUniversalAccess,
    name: "Accessibility Declaration",
    description: "Learn about my commitment to creating an inclusive and accessible web experience for everyone, regardless of ability or background.",
    href: "/accessibility",
    cta: "Learn more",
    background: (
      <div className="pt-4">
        <ClientTweetCard id="1839807144016634063" className="w-10/12 mx-auto shadow-lg opacity-50 border" />
      </div>
    ),
    className: "col-span-4",
  },
  {
    Icon: FileTextIcon,
    name: "Experiences",
    description: "Explore my professional journey, including achievements, past roles, and key contributions to projects and teams.",
    href: "/info/experiences&achievements",
    cta: "Learn more",
    className: "col-span-4",
    background: (
      <Marquee
        pauseOnHover
        repeat={5}
        vertical
        className="[mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] flex mx-2 min-w-7xl opacity-50"
      >
        {marqueeDetails.map( ( f, idx ) => (
          <figure
            key={idx}
            className="relative border-secondary p-4 border rounded-xl cursor-pointer overflow-hidden"
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
    Icon: Share2Icon,
    name: "Technology Stacks",
    description: "Discover the tools, frameworks, and technologies I use to build modern, scalable, and efficient applications.",
    href: "/info/techStack",
    cta: "Learn more",
    className: "relative transform scale-25 col-span-5",
    background: <IconClouds />,
  },
  {
    Icon: CalendarIcon,
    name: "Resume",
    description: "Access my resume to get an in-depth overview of my professional experience, education, and technical skills.",
    href: "/info/resume",
    cta: "Learn more",
    className: "flex items-end col-span-5",
    background: (
      <div className="px-8 py-10">
        <Calendar
          mode="single"
          selected={new Date( 2022, 4, 11, 0, 0, 0 )}
          className="group-hover:scale-105 [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] border rounded-md w-fit origin-top transition-all duration-300 ease-out opacity-50"
        />
      </div>
    ),
  },
  {
    Icon: GlobeIcon,
    name: "Contact",
    description: "Get in touch with me for collaborations, job opportunities, or to learn more about my work.",
    href: "/contact",
    cta: "Learn more",
    className: "col-span-4",
    background: (
      <Globe className="max-w-4xl absolute left-1/2" />
    ),
  },
];



// --------------------------------------------------------------------

export const certifications = [
  {
    title: "Legacy Data Visualization Certification",
    subtitle: "FreeCodeCamp",
    date: "June 7, 2023",
  },
  {
    title: "Data Visualization Certification",
    subtitle: "FreeCodeCamp",
    date: "June 7, 2023",
  },
  {
    title: "Legacy Front End Certification",
    subtitle: "FreeCodeCamp",
    date: "June 7, 2023",
  },
  {
    title: "Front End Development Libraries Certification",
    subtitle: "FreeCodeCamp",
    date: "June 7, 2023",
  },
  {
    title: "Responsive Web Design Certification",
    subtitle: "FreeCodeCamp",
    date: "March 10, 2022",
  },
  {
    title: "Agile Development Practices",
    subtitle: "LinkedIn Learning",
    date: "June 8, 2023",
  },
  {
    title: "Designing for Developers",
    subtitle: "LinkedIn Learning",
    date: "June 8, 2023",
  },
  {
    title: "Level Up: SQL",
    subtitle: "LinkedIn Learning",
    date: "June 8, 2023",
  },
  {
    title: "Mapping for User Experience Projects",
    subtitle: "LinkedIn Learning",
    date: "June 8, 2023",
  },
  {
    title: "Spring Boot and React: Build Scalable and Dynamic Web Apps",
    subtitle: "LinkedIn Learning",
    date: "June 8, 2023",
  },
  {
    title: "UX Foundations: Generational Design",
    subtitle: "LinkedIn Learning",
    date: "June 8, 2023",
  },
  {
    title: "UX Foundations: Interaction Design",
    subtitle: "LinkedIn Learning",
    date: "June 8, 2023",
  },
  {
    title: "UX Research: Journey Mapping",
    subtitle: "LinkedIn Learning",
    date: "June 8, 2023",
  },
  {
    title: "Using MongoDB with Java",
    subtitle: "LinkedIn Learning",
    date: "June 8, 2023",
  },
  {
    title: "Using MongoDB with Node.js",
    subtitle: "LinkedIn Learning",
    date: "June 8, 2023",
  },
  {
    title: "Strategic Thinking (2017)",
    subtitle: "LinkedIn Learning",
    date: "June 20, 2022",
  },
  {
    title: "Using MongoDB with Python",
    subtitle: "LinkedIn Learning",
    date: "June 8, 2023",
  },
  {
    title: "How to Train Your Brain for Maximum Growth",
    subtitle: "LinkedIn Learning",
    date: "June 20, 2022",
  },
  {
    title: "Data Analytics for Students",
    subtitle: "LinkedIn Learning",
    date: "April 12, 2022",
  },
  {
    title: "Critical Thinking for Better Judgment and Decision-Making",
    subtitle: "LinkedIn Learning",
    date: "June 20, 2022",
  },
  {
    title: "Python for Data Science Essential Training Part 1",
    subtitle: "LinkedIn Learning",
    date: "April 12, 2022",
  },
  {
    title: "Learning React.js",
    subtitle: "LinkedIn Learning",
    date: "April 12, 2022",
  },
  {
    title: "Learning Data Analytics: 1 Foundations",
    subtitle: "LinkedIn Learning",
    date: "March 31, 2022",
  },
  {
    title: "Web Development Foundations: Full-Stack vs Front-End",
    subtitle: "LinkedIn Learning",
    date: "March 31, 2022",
  },
  {
    title: "Using Python for Automation (2019)",
    subtitle: "LinkedIn Learning",
    date: "March 31, 2022",
  },
  {
    title: "Succeeding in Web Development: Full Stack and Front End",
    subtitle: "LinkedIn Learning",
    date: "March 31, 2022",
  },
];

export const certificationImages = [
  {
    src: "/images/certifications/tina-huynh-codingdojocert.png",
    alt: "Coding Dojo Certification",
    description: "Coding Dojo Certification",
  },
];

export const credientials = [
  {
    title: "Full-Stack Web Development",
    subtitle: "Software Development Online MERN",
    date: "May 2023",
  },
];