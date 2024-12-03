import {
  Presentation,
  NotebookText,
  Cat,
  CodeXml,
  DatabaseZap,
  FileTextIcon,
  CalendarIcon,
  BellIcon,
  Share2Icon,
  House,
  Info,
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
        },
        {
          title: "Accessibility Declaration",
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
          url: "/projects/mybusiness",
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
          title: "More on GitHub",
          url: "https://github.com/tmchuynh?tab=repositories",
        },
      ],
    },
    {
      title: "Future Projects",
      icon: BookMarked,
      items: [
        {
          title: "Book Collection",
          url: "/futureProjects/bookCollection",
        },
        {
          title: "Event Planner",
          url: "/futureProjects/eventPlanner",
        },
        {
          title: "Habit Tracker",
          url: "/futureProjects/habitTracker",
        },
        {
          title: "Health and Wellness Tracker",
          url: "/futureProjects/health&wellness",
        },
        {
          title: "Job Market Data App",
          url: "/futureProjects/jobMarketData",
        },
        {
          title: "Life Management Platform",
          url: "/futureProjects/lifeManagementPlatform",
        },
        {
          title: "Online Learning Platform",
          url: "/futureProjects/onlineLearning",
        },
        {
          title: "Personal Finance",
          url: "/futureProjects/personalFinance",
        },
        {
          title: "Pet Adoption Service",
          url: "/futureProjects/petAdoptionService",
        },
        {
          title: "Storytelling Platform",
          url: "/futureProjects/storytellingPlatform",
        },
        {
          title: "Automatic Travel Itinerary Planner",
          url: "/futureProjects/automaticTravelItinerary",
        },
      ]
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
        <FaWindows className="inline-flex mr-1" /> + M
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
    description: "Open Keyboard Shortcuts Menu",
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
    id: "lifeManagementPlatform",
    title: "Life Management Platform",
    description:
      "An all-in-one platform that combines calendar management, habit tracking, journaling, reminders, and mood tracking to help users organize their lives and improve personal well-being. This app is designed to foster productivity, mindfulness, and self-awareness.",
    focuses: [
      "Integrated Calendar and Reminder System: Provide users with a seamless calendar to plan events, set reminders, and manage daily schedules.",
      "Habit Tracker with Analytics: Allow users to set goals, track habits, and visualize their progress with detailed analytics and streaks.",
      "Personalized Journaling Features: Offer guided prompts, customizable entries, and a secure space for users to document their thoughts and experiences.",
      "Mood Tracking and Insights: Enable users to log their mood daily, identify patterns, and connect mood trends with habits and journal entries.",
      "Cross-Device Synchronization: Ensure that data is synced across devices so users can access their information anytime, anywhere.",
    ],
    technologies: [
      "React Native",
      "Node.js",
      "MongoDB",
      "Chart.js",
      "TailwindCSS",
      "Google Calendar API",
    ],
    timeline: [
      "Feature Planning and Wireframing: Define core functionalities, create wireframes for calendar, habit tracking, journaling, and mood tracking features.",
      "Backend Development: Implement authentication, data storage, and integration with third-party APIs such as Google Calendar.",
      "Frontend Development: Build user-facing components for each feature, ensuring smooth navigation and responsiveness.",
      "Testing and Integration: Test cross-platform functionality, refine data synchronization, and ensure smooth API communication.",
      "Deployment and User Feedback: Deploy the app to app stores, gather user feedback, and iterate on features for future updates.",
    ],
  }
  ,
  {
    id: "personalFinance",
    title: "Personal Finance",
    description:
      "A web application to help users manage their personal finances, track spending, and set budget goals.",
    focuses: [
      "Data Visualization with Interactive Charts: Provide users with dynamic and visually appealing charts to analyze spending habits, budget trends, and financial performance over time.",
      "Secure User Authentication and Role Management: Implement robust user authentication and authorization to protect sensitive financial data and allow role-based access.",
      "Access to Educational Financial Resources: Offer users curated resources, articles, and tutorials to improve financial literacy and empower informed decision-making.",
      "Integration with Financial APIs for Real-Time Data: Enable users to connect bank accounts or third-party services for real-time financial updates and automated data tracking.",
      "Mobile-First Responsive Design for Accessibility: Ensure the platform is fully functional and visually optimized for mobile, tablet, and desktop users.",
    ],
    technologies: ["Next.js", "Node.js", "MongoDB", "D3.js", "Bootstrap"],
    timeline: [
      "Conduct Research on Financial Analysis Trends and Tools: Explore market trends, user needs, and gaps in existing financial solutions.",
      "Compare Existing Financial Solutions and Resources Available: Analyze popular tools to identify must-have features and additional value propositions.",
      "Design Wireframes and Prototypes for User-Friendly Interfaces: Develop visual blueprints and prototypes focusing on intuitive navigation and design.",
      "Develop Frontend and Backend with Integration of Financial APIs: Build the platform's frontend and backend components, integrating real-time financial data APIs for live updates.",
      "Implement Robust Testing and Optimize for Deployment: Conduct comprehensive testing for security, performance, and usability, followed by optimization for deployment.",
    ],
  },
  {
    id: "health&wellness",
    title: "Health and Wellness Tracker",
    description:
      "A web-based tracker that allows users to log workouts, track nutrition, and monitor mental health progress.",
    focuses: [
      "Comprehensive Workout and Nutrition Logging: Allow users to track exercises, meal plans, and caloric intake with an intuitive interface.",
      "Integration with Wearable Device APIs: Sync data from popular wearable devices (e.g., Fitbit, Garmin, Apple Watch) to enhance tracking accuracy.",
      "Goal Setting and Progress Tracking: Enable users to set personalized fitness goals and monitor their achievements over time.",
      "User Analytics and Insights: Provide detailed analytics on user performance, trends, and recommendations for improved health outcomes.",
    ],
    technologies: ["Vue.js", "Express", "Firebase", "Chart.js", "Vuetify"],
    timeline: [
      "Market Research and Planning: Analyze competitors, identify key features, and outline project scope and target audience.",
      "UI/UX Design: Create wireframes and interactive prototypes to ensure an engaging and user-friendly experience.",
      "Frontend and Backend Implementation: Develop core features, integrate APIs, and establish real-time syncing between frontend and backend.",
      "Testing with User Feedback: Conduct usability testing, gather feedback, and refine features to improve the app's performance and user satisfaction.",
    ],
  },
  {
    id: "onlineLearning",
    title: "Online Learning Platform",
    description:
      "A platform where users can enroll in courses, complete interactive lessons, and earn certifications.",
    focuses: [
      "User Progress Tracking: Allow students to monitor their learning progress, completion rates, and achievements through intuitive dashboards and analytics.",
      "Interactive Lesson Features: Create engaging lessons with interactive content, quizzes, and multimedia elements to enhance learning experiences.",
      "Secure Payment Integration: Enable users to pay for courses safely and seamlessly using trusted payment gateways and secure transactions.",
      "Admin and Instructor Dashboards: Provide administrators and instructors with tools to manage courses, monitor student performance, and track revenue or enrollment metrics.",
    ],
    technologies: ["React", "Django", "PostgreSQL", "GraphQL", "Material-UI"],
    timeline: [
      "Curriculum Planning: Define course structures, lesson content, and assessment criteria to form the foundation of the platform.",
      "Frontend Prototyping: Design and develop wireframes and prototypes for user-facing interfaces, focusing on usability and visual appeal.",
      "Backend Development: Implement APIs, database models, and backend functionality to manage users, courses, and payments effectively.",
      "Integration and Certification Features: Add features for issuing certificates upon course completion and integrating third-party tools like analytics or video hosting platforms.",
    ],
  },
  {
    id: "automaticTravelItinerary",
    title: "Automatic Travel Itinerary Planner",
    description:
      "A platform that automatically generates personalized travel itineraries for users based on preferences, budgets, and real-time data, including flights, accommodations, and activities.",
    focuses: [
      "AI-Powered Itinerary Generation: Automatically generate detailed travel plans based on user preferences, such as interests, budget, and travel dates.",
      "Interactive Map Features: Provide users with an interactive map to visualize destinations, routes, and nearby attractions.",
      "Integration with Travel APIs: Fetch real-time data on flights, hotels, and local activities from APIs like Skyscanner, Amadeus, and Yelp.",
      "Budget Management and Recommendations: Offer cost-effective recommendations for travel options and provide a breakdown of estimated expenses.",
      "Social Sharing and Collaboration: Allow users to share itineraries with travel companions and collaborate on trip planning in real-time.",
    ],
    technologies: ["Next.js", "Node.js", "MongoDB", "OpenAI API", "Mapbox", "TailwindCSS"],
    timeline: [
      "Research and API Selection: Analyze travel APIs to identify suitable integrations for flights, accommodations, and activities.",
      "AI Model Integration: Use AI models to analyze user preferences and generate optimized travel plans.",
      "UI/UX Design: Develop wireframes and prototypes focusing on simplicity and intuitive user interaction.",
      "Frontend and Backend Development: Build components for AI-powered itinerary creation, interactive maps, and budget tracking.",
      "Integration and Testing: Ensure smooth integration of APIs and test functionality across devices for a seamless user experience.",
    ],
    inspiration: [
      {
        src: "/images/automaticTravelItinerary/auto-fill.png",
        alt: "Auto-fill itinerary example",
        description: "An example of how the platform automatically generates an itinerary based on user preferences.",
      },
      {
        src: "/images/automaticTravelItinerary/locations.png",
        alt: "Location selection interface",
        description: "A screenshot showing the location selection feature, allowing users to pick destinations for their travel plan.",
      },
      {
        src: "/images/automaticTravelItinerary/map-photos.png",
        alt: "Interactive map with photos",
        description: "A map interface displaying destination points and corresponding photos to help users visualize their trip.",
      },
      {
        src: "/images/automaticTravelItinerary/auto-fill.png",
        alt: "Auto-generated itinerary",
        description: "A detailed view of an itinerary automatically created by the platform, including activities and schedules.",
      },
      {
        src: "/images/automaticTravelItinerary/multiple-destinations.png",
        alt: "Multiple destinations planning",
        description: "An example showcasing the ability to plan trips with multiple destinations and optimized travel routes.",
      },
      {
        src: "/images/automaticTravelItinerary/travel-checklist.png",
        alt: "Travel checklist feature",
        description: "A feature that provides users with a customizable travel checklist to ensure a well-prepared journey.",
      },
      {
        src: "/images/automaticTravelItinerary/suggestions.png",
        alt: "Personalized travel suggestions",
        description: "An example of personalized suggestions for activities, restaurants, and attractions based on user preferences.",
      },
      {
        src: "/images/automaticTravelItinerary/budget.png",
        alt: "Budget management interface",
        description: "A feature displaying a budget breakdown and cost estimates for planned trips, helping users stay within budget.",
      },
      {
        src: "/images/automaticTravelItinerary/Itinerary-Timeline.png",
        alt: "Itinerary timeline view",
        description: "A visual timeline of the itinerary, including scheduled activities and travel times for better organization.",
      },
    ]
  },
  {
    id: "jobMarketData",
    title: "Job Market Data App",
    description:
      "A data-driven web application that provides insights into job market trends, including salary analysis, in-demand skills, and regional job availability.",
    focuses: [
      "Data Visualization: Present job market trends, salary distributions, and in-demand skills through clear, interactive graphs and charts.",
      "API Integration with Job Boards: Connect to job board APIs (e.g., Indeed, LinkedIn) to fetch real-time job listings, salaries, and industry data.",
      "Interactive Filtering and Sorting: Allow users to filter and sort data by location, job type, industry, or salary range for a personalized experience.",
      "Responsive Design: Ensure a seamless experience across devices, optimizing the UI for both mobile and desktop users.",
    ],
    technologies: ["React", "D3.js", "Node.js", "MongoDB", "Chart.js"],
    timeline: [
      "Data Source Research: Identify reliable APIs and data sources for job listings, salaries, and skills trends, ensuring comprehensive coverage.",
      "Frontend and Backend Setup: Establish the core application framework, build backend routes for API communication, and set up the database schema.",
      "Visualization Implementation: Develop interactive graphs and dashboards for users to explore job market data visually.",
      "Deployment and User Testing: Deploy the application to a hosting platform and gather feedback from users to improve functionality and usability.",
    ],
    inspiration: [
      {
        src: "/images/jobMarketData/earnings-by-education.png",
        alt: "Chart showing earnings by education level",
        description: "A data visualization comparing average earnings based on different levels of education to highlight trends in salary growth.",
      },
      {
        src: "/images/jobMarketData/growing_occupations.png",
        alt: "Bar chart of fastest-growing occupations",
        description: "A bar chart showcasing the occupations with the highest projected growth rates over the next decade.",
      },
      {
        src: "/images/jobMarketData/projected-annual-rate-of-change.png",
        alt: "Projected annual rate of change in occupations",
        description: "A graph illustrating the projected annual rate of change for various industries and job roles, providing insights into emerging trends.",
      },
    ],
  },
  {
    id: "petAdoptionService",
    title: "Pet Adoption Service",
    description:
      "A platform connecting potential pet owners with local shelters, featuring detailed pet profiles and adoption processes.",
    focuses: [
      "User Profiles and Pet Matching: Create personalized user profiles to match potential adopters with pets based on preferences like breed, size, and lifestyle.",
      "Integration with Shelter APIs: Connect with shelter APIs to provide real-time updates on available pets, adoption status, and shelter information.",
      "Application Tracking: Enable users to submit and track their adoption applications, including updates on the review process and next steps.",
      "Donation and Volunteer Features: Allow users to make secure donations and sign up for volunteer opportunities directly through the platform.",
    ],
    technologies: ["Vue.js", "Firebase", "Node.js", "TailwindCSS", "Stripe"],
    timeline: [
      "API Integration Research: Identify and analyze APIs from shelters and pet databases to fetch real-time pet data and adoption statuses.",
      "Frontend Prototyping: Design wireframes and interactive prototypes focusing on user experience and functionality.",
      "Backend Development: Build robust server-side logic for user authentication, data management, and API integration.",
      "Testing and Deployment: Conduct usability testing, ensure cross-browser compatibility, and deploy the platform to a cloud hosting service.",
    ],
  },
  {
    id: "eventPlanner",
    title: "Event Planner Platform",
    description:
      "A web application that helps users plan, organize, and manage events, complete with RSVP tracking and vendor recommendations.",
    focuses: [
      "Dynamic Event Scheduling: Provide users with tools to create, modify, and organize event schedules with real-time updates and reminders.",
      "User and Vendor Dashboards: Develop separate dashboards for event organizers and vendors, offering features like task management, event progress tracking, and service listings.",
      "Integration with Calendar APIs: Sync events seamlessly with external calendar services (e.g., Google Calendar, Outlook) for better coordination and accessibility.",
      "Payment and Budget Tracking: Enable secure payment processing for event services and offer tools to manage budgets, track expenses, and generate financial summaries.",
    ],
    technologies: ["Next.js", "Node.js", "PostgreSQL", "Material-UI", "Stripe"],
    timeline: [
      "Feature Planning: Identify and outline key features like event scheduling, dashboards, and payment tracking, ensuring alignment with user needs.",
      "UI/UX Design: Develop wireframes and high-fidelity mockups focusing on user-friendly navigation and modern aesthetics.",
      "Backend and API Integration: Build the backend to support user and vendor functionalities, integrate calendar APIs, and implement payment gateways.",
      "Testing and Launch: Conduct rigorous testing for usability, performance, and security before deploying the platform to production.",
    ],
  },
  {
    id: "storytellingPlatform",
    title: "Storytelling Platform",
    description:
      "A platform for writers to create, share, and publish stories, featuring collaborative writing and reader feedback systems.",
    focuses: [
      "Collaborative Writing Tools: Enable multiple users to collaborate on stories in real-time, with features like version control, comments, and suggestions.",
      "Rich Text Editing and Formatting: Incorporate a robust text editor for formatting text, adding multimedia, and customizing the appearance of stories.",
      "Reader Feedback and Analytics: Provide tools for readers to leave comments, rate stories, and analyze readership trends with detailed metrics.",
      "Story Sharing and Social Features: Allow users to share stories on social media, follow favorite authors, and participate in community discussions.",
    ],
    technologies: ["React", "Django", "SQLite", "Quill.js", "TailwindCSS"],
    timeline: [
      "Content Strategy and Planning: Define the core features of the platform, including writing tools, social interaction, and analytics, while researching user needs.",
      "Rich Text Editor Integration: Implement a robust text editor (Quill.js) with formatting options, multimedia embedding, and real-time collaboration capabilities.",
      "Frontend and Backend Development: Build user-friendly interfaces for writing, sharing, and reading stories while implementing robust backend logic for authentication, data management, and analytics.",
      "Community Testing and Deployment: Test the platform with a small user base to gather feedback, refine features, and ensure a seamless launch.",
    ],
  },
  {
    id: "habitTracker",
    title: "Habit Tracker",
    description:
      "A habit tracking app to help users build and maintain habits through goal-setting, reminders, and progress tracking.",
    focuses: [
      "Goal Tracking and Streaks: Allow users to set personalized goals, monitor their daily habits, and maintain streaks to encourage consistency.",
      "User-Friendly Notifications: Provide customizable reminders and motivational alerts to help users stay on track with their habits.",
      "Data Visualization for Progress: Display user progress with interactive charts and graphs to show achievements, trends, and areas for improvement.",
      "Cross-Device Syncing: Ensure seamless syncing of data across multiple devices, allowing users to access their progress anytime, anywhere.",
    ],
    technologies: ["Angular", "Firebase", "Chart.js", "Bootstrap", "Node.js"],
    timeline: [
      "Feature Planning and Prototyping: Identify core features like habit tracking, notifications, and data visualization, and create wireframes and prototypes.",
      "Frontend Development: Develop intuitive user interfaces for habit management, progress tracking, and reminders using Angular and Bootstrap.",
      "Progress Tracking Integration: Implement backend logic to handle data storage and integrate Chart.js for visualizing progress and trends.",
      "Testing and User Feedback: Conduct usability testing, gather feedback from users, refine features, and prepare for deployment.",
    ],
    inspiration: [
      {
        src: "/images/habitTracker/charts.png",
        alt: "Habit tracking progress charts",
        description: "Data visualization showing progress charts for tracked habits, including streaks and completion rates.",
      },
      {
        src: "/images/habitTracker/week-view.png",
        alt: "Weekly habit overview",
        description: "A week-view layout displaying daily habit completion status for a quick glance at progress and consistency.",
      },
      {
        src: "/images/habitTracker/widgets.png",
        alt: "Habit tracker widgets",
        description: "Interactive widgets for tracking habits, setting goals, and viewing real-time progress directly on the dashboard.",
      },
    ],
  },
  {
    id: "bookCollection",
    title: "Book Collection",
    description:
      "A platform where users can catalog their book collections, write reviews, and share recommendations with a community.",
    focuses: [
      "Book Cataloging and Search: Allow users to organize their book collections with advanced search and filtering options for easy navigation.",
      "Review and Rating System: Enable users to rate and review books, providing detailed feedback for other readers.",
      "Community Interaction and Recommendations: Foster a community where users can share book recommendations, create reading lists, and follow favorite reviewers.",
      "Mobile-Friendly Design: Ensure the platform is fully optimized for mobile devices, providing a seamless experience on any screen size.",
    ],
    technologies: ["React", "Express", "MongoDB", "Material-UI", "TailwindCSS"],
    timeline: [
      "Feature Planning and Wireframing: Identify core features like cataloging, reviews, and recommendations. Create wireframes and mockups for key screens.",
      "Backend and Database Development: Develop API endpoints for managing book data, user accounts, reviews, and recommendations. Design a robust database schema to store information securely.",
      "Frontend Design and Integration: Build an intuitive frontend interface using React, integrating Material-UI components and backend APIs for seamless functionality.",
      "Testing and Community Launch: Test all features rigorously for usability and performance. Gather feedback from initial users and refine the platform before launching to a broader audience.",
    ],
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
        src: "/images/frontend/abbr.png",
        alt: "Abbreviations and glossary page",
        description: "A glossary of common abbreviations and terms used in frontend development, providing quick references for learners.",
      },
      {
        src: "/images/frontend/table_of_contents-1.png",
        alt: "Table of Contents for frontend topics",
        description: "An organized table of contents outlining key frontend development topics and sections.",
      },
      {
        src: "/images/frontend/table_of_contents.png",
        alt: "Table of Contents for frontend topics",
        description: "An organized table of contents outlining key frontend development topics and sections.",
      },
      {
        src: "/images/frontend/accessibility.png",
        alt: "Accessibility guidelines and best practices",
        description: "Information about accessibility in web development, focusing on inclusive design principles and standards.",
      },
      {
        src: "/images/frontend/document_structure.png",
        alt: "HTML document structure explained",
        description: "A guide to structuring HTML documents correctly, including semantic elements and hierarchical organization.",
      },
      {
        src: "/images/frontend/css.png",
        alt: "Introduction to CSS",
        description: "An overview of CSS, including styling basics, responsive design, and advanced techniques for modern web layouts.",
      },
      {
        src: "/images/frontend/quizapp.png",
        alt: "Building a quiz application in frontend development",
        description: "A practical project for building a quiz application using frontend technologies like HTML, CSS, and JavaScript.",
      },
      {
        src: "/images/frontend/framework.png",
        alt: "Understanding frameworks and libraries in frontend development",
        description: "An exploration of frameworks and libraries such as React, Angular, and Vue.js, with comparisons and use cases.",
      },
      {
        src: "/images/frontend/next.png",
        alt: "Learning Next.js for frontend development",
        description: "An introduction to Next.js, a popular React-based framework for building fast and scalable web applications.",
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
        src: "/images/backend/web_dev.png",
        alt: "Introduction to backend web development",
        description: "An introduction to backend web development, covering essential tools and technologies for server-side programming.",
      },
      {
        src: "/images/backend/github.png",
        alt: "GitHub basics for version control",
        description: "A guide to understanding GitHub basics, including repositories, commits, and collaborative version control.",
      },
      {
        src: "/images/backend/design_principles.png",
        alt: "Database design principles",
        description: "Key principles of database design, focusing on schema creation, relationships, and optimization techniques.",
      },
      {
        src: "/images/backend/databases.png",
        alt: "Introduction to databases",
        description: "An introduction to databases, including relational and non-relational systems and their use cases.",
      },
      {
        src: "/images/backend/principles.png",
        alt: "Database principles overview",
        description: "An overview of fundamental database principles, such as data organization, normalization, and indexing.",
      },
      {
        src: "/images/backend/base.png",
        alt: "BASE vs ACID principles in databases",
        description: "A comparison of BASE and ACID principles in database management, explaining their differences and applications.",
      },
      {
        src: "/images/backend/containers.png",
        alt: "Containers and Docker basics",
        description: "Basics of containers and Docker, highlighting their role in creating scalable and portable development environments.",
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
        alt: "Contact form for inquiries and support",
        description: "A user-friendly contact form for clients to submit inquiries, request support, or connect with the business team.",
      },
      {
        src: "/images/business/elevate_business.png",
        alt: "Elevate your business banner",
        description: "A banner showcasing the value proposition of elevating businesses through modern web solutions and digital transformation.",
      },
      {
        src: "/images/business/our_values.png",
        alt: "Our values section",
        description: "An overview of the business's core values, including commitment to quality, customer satisfaction, and innovation.",
      },
      {
        src: "/images/business/payment_plans.png",
        alt: "Flexible payment plans section",
        description: "Details about the flexible payment plans available for clients to affordably invest in custom web solutions.",
      },
      {
        src: "/images/business/personalized_web_design.png",
        alt: "Personalized web design services",
        description: "A feature highlighting the availability of tailored web design services to meet unique client needs and branding.",
      },
      {
        src: "/images/business/portfolio_website.png",
        alt: "Portfolio website design services",
        description: "Showcase of portfolio website options designed to highlight client projects, skills, and achievements.",
      },
      {
        src: "/images/business/professional_website.png",
        alt: "Professional website design services",
        description: "Information on creating professional-grade websites tailored for businesses, organizations, or personal brands.",
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
        alt: "Classes overview page of the International Activities Club",
        description: "A detailed overview of the classes and activities offered by the International Activities Club, including descriptions and schedules.",
      },
      {
        src: "/images/iac/introduction.png",
        alt: "Introduction page of the International Activities Club",
        description: "The introduction page welcoming visitors to the International Activities Club, highlighting its mission and core values.",
      },
      {
        src: "/images/iac/main_page.png",
        alt: "Main landing page of the International Activities Club website",
        description: "The main page showcasing key features of the International Activities Club, including navigation to various sections of the website.",
      },
      {
        src: "/images/iac/overview.png",
        alt: "Overview section of the International Activities Club",
        description: "An overview page summarizing the club's offerings, target audience, and highlights of the programs available.",
      },
      {
        src: "/images/iac/staff_page.png",
        alt: "Staff page of the International Activities Club website",
        description: "A page dedicated to introducing the club's staff members, including photos and short bios for each team member.",
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
        alt: "User registration screen in the Quiz App",
        description: "A screenshot showing the registration form where users can create an account by entering their personal details.",
      },
      {
        src: "/images/quizapp/taking_quiz.png",
        alt: "Quiz-taking interface in the Quiz App",
        description: "The main quiz interface where users answer questions on a selected topic with interactive options.",
      },
      {
        src: "/images/quizapp/quiz_selection.png",
        alt: "Quiz selection screen in the Quiz App",
        description: "A screenshot displaying the selection menu for various quiz topics, allowing users to choose their desired category.",
      },
      {
        src: "/images/quizapp/quiz_history.png",
        alt: "Quiz history screen in the Quiz App",
        description: "The history section showing a user's past quizzes, including scores and completion dates.",
      },
      {
        src: "/images/quizapp/level_selection.png",
        alt: "Difficulty level selection in the Quiz App",
        description: "A screen that allows users to choose the difficulty level of their quiz, such as Easy, Medium, or Hard.",
      },
      {
        src: "/images/quizapp/leaderboard_selection.png",
        alt: "Leaderboard selection screen in the Quiz App",
        description: "A menu where users can choose which leaderboard to view, sorted by scores or categories.",
      },
      {
        src: "/images/quizapp/leaderboard.png",
        alt: "Quiz leaderboard in the Quiz App",
        description: "The leaderboard showcasing the top-performing users along with their scores and rankings.",
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
  "Build an Interactive Dashboard for Client",
  "Design a Responsive Layout",
  "Optimize Site Performance",
  "Integrate Third-Party APIs",
  "Polish Accessibility Features",
  "Prepare Presentation for Project",
  "Add New Blogs",
  "Improve Lighthouse Performance Scores for Client",
  "Refactor JavaScript Codebase",
  "Write Documentation for Features",
  "Research UI Trends",
  "Plan Next Web Development Project",
  "Take a Break",
  "Submit Client Proposal",
  "Update Resume with New Projects",
  "Collaborate on Open Source Project",
  "Plan a New Feature Rollout for Client",
  "Test Mobile Responsiveness",
  "Learn Advanced TypeScript",
  "Create Unit Tests",
  "Analyze Website Analytics for Performance Insights",
  "Review Pull Requests for Team Project",
  "Host a Code Review Session for Mentee Project",
  "Experiment with New Design Frameworks",
  "Read a Web Development Book",
  "Implement Dark Mode Toggle Feature",
  "Set Up a DevOps Workflow",
  "Optimize Images for Faster Loading",
  "Set Up Continuous Integration Pipeline",
  "Study Emerging JavaScript Trends",
  "Write a Case Study for a Completed Project",
  "Develop Custom Hooks in React",
  "Redesign Portfolio Homepage",
  "Experiment with AI Tools for Development",
  "Prepare for Tech Interview",
  "Sketch Wireframes for Client",
  "Host a Knowledge Sharing Session",
  "Review and Merge Pending Pull Requests",
  "Debug Frontend Issues",
  "Update Website SEO Strategies for Client",
  "Validate Forms for Accessibility",
  "Learn More Backend Optimization Techniques",
  "Finish API Project",
  "Attend a Web Development Webinar",
  "Deploy Website Updates for Client",
  "Start Learning a New Framework",
];

export const features = [
  {
    Icon: BellIcon,
    name: "Projects",
    description: "Explore my portfolio to see my web development, design, and problem-solving skills in action.",
    href: "/projects",
    cta: "Learn more",
    background: (
      <AnimatedList className="mx-auto">
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
  },
  {
    Icon: FileTextIcon,
    name: "Experiences",
    description: "Explore my professional journey, including achievements, past roles, and key contributions to projects and teams.",
    href: "/info/experiences&achievements",
    cta: "Learn more",
    background: (
      <Marquee
        repeat={5}
        vertical
        className="[mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] flex mx-2 min-w-6xl opacity-50"
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
    background: (
      <div>
        <IconClouds />
      </div>
    ),
  },
  {
    Icon: CalendarIcon,
    name: "Resume",
    description: "View my resume for a detailed summary of my experience, education, and technical skills.",
    href: "/info/resume",
    cta: "Learn more",
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