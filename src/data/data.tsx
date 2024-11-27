import { NotebookPen, CheckCheck, BookCheck } from "lucide-react";

export const data = {
  navMain: [
    {
      title: "Home",
      url: "/",
      icon: NotebookPen,
    },
    {
      title: "About Me",
      url: "/",
      icon: NotebookPen,
    },
    {
      title: "Information",
      url: "/quiz",
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
      url: "/exams",
      icon: BookCheck,
      items: [
        {
          title: "My Business",
          url: "#",
        },
        {
          title: "IAC Website",
          url: "#",
        },
        {
          title: "Quiz Application",
          url: "#",
        },
        {
          title: "Sudoku",
          url: "#",
        },
        {
          title: "Front-End Development Book",
          url: "#",
        },
        {
          title: "Back-End Development Book",
          url: "#",
        },
      ],
    },
    {
      title: "Future Projects",
      url: "/roadmaps",
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