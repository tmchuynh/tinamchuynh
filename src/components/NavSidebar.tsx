"use client";

import * as React from "react";
import {
  BookCheck,
  Brain,
  ChartNoAxesCombined,
  CheckCheck,
  Command,
  FolderClock,
  GraduationCap,
  LibraryBig,
  Medal,
  NotebookPen,
  Rocket,
  Swords,
  Table2,
  TrendingUp,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { NavMain } from "@/components/ui/NavMain";
import { NavFooter } from "@/components/ui/NavFooter";

const data = {
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

export function NavSidebar( { ...props }: React.ComponentProps<typeof Sidebar> ) {

  return (
    <Sidebar variant="inset" {...props} className="rounded-e-3xl shadow-md border hover:shadow-md">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-semibold">Tina Huynh</span>
                <span className="truncate text-xs">Full Stack Web Developer</span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain title="General" items={data.navMain} />
        <NavMain title="Past & Future Work" items={data.information} />
      </SidebarContent>
      <SidebarFooter>
        <NavFooter />
      </SidebarFooter>
    </Sidebar>
  );
}
