"use client";

import { PortfolioProject } from "@/data/types";
import { Check, StarHalf } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import ImageGrid from "@/components/ui/image-grid";
import BlurFade from "@/components/ui/blur-fade";
import Breadcrumb from "./ui/breadcrumb";

const breadcrumbItems = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Projects",
    dropdownItems: [
      { label: "My Business", href: "/projects/mybussiness" },
      { label: "IAC Website", href: "/projects/iacwebsite" },
      { label: "Quiz Application", href: "/projects/quizapplication" },
      { label: "Sudoku", href: "/projects/sudoku" },
      { label: "Front-End Development Book", href: "/projects/frontendbook" },
      { label: "Back-End Development Book", href: "/projects/backendbook" },
    ],
  },
  {
    label: "Details",
  },
];

const PortfolioPage = ( {
  project,
}: {
  project: PortfolioProject;
} ) => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState( false );

  useEffect( () => {
    setMounted( true );
  }, [] );

  function handleClick( link: string | undefined ) {
    window.open( link, "_blank" );
  }

  return (
    <div className="max-w-7xl mx-auto p-6">
      <Breadcrumb items={breadcrumbItems} />
      <h1 className="text-4xl font-bold text-center mb-4">{project.title}</h1>

      <p className="text-lg mb-8">{project.description}</p>

      {/* Project Links */}
      <div className="flex space-x-6 mb-8 justify-center">
        {project.liveLink ? (
          <Button
            variant={theme === "dark" ? "default" : "secondary"}
            onClick={() => ( handleClick( project.liveLink ) )}
            rel="noopener noreferrer"
            className="px-6 py-2 transition duration-300"
          >
            View Project
          </Button>
        ) : ( '' )}
        {project.githubLink ? (
          <Button
            variant={theme === "dark" ? "outline" : "default"}
            onClick={() => ( handleClick( project.liveLink ) )}
            rel="noopener noreferrer"
            className="px-6 py-2 transition duration-300"
          >
            View on GitHub
          </Button>
        ) : ( '' )}
      </div>

      {project.technologies ? (
        <>
          <h2 className="text-2xl font-semibold mb-4">Technologies Used</h2>
          <BlurFade delay={0.25} inView>
            <ul className="list-disc pl-6 mb-8 flex flex-col">
              {project.technologies.map( ( tech, index ) => (
                <div className="inline-flex" key={tech}>
                  <Check color={theme === "dark" ? "#4bd579" : "#395798"} className="mr-2" />
                  <li key={index} className="text-lg list-none">{tech}</li>
                </div>
              ) )}
            </ul>
          </BlurFade>
        </>
      ) : ''}

      <div>
        {project.features ? (
          <>
            <h2 className="text-2xl font-semibold mb-4">Project Features</h2>
            <BlurFade delay={0.25} inView>
              <div className="text-lg flex flex-col pl-6 mb-8">
                {project.features.map( ( feature, index ) => (
                  <div className="inline-flex" key={feature}>
                    <StarHalf color={theme === "dark" ? "#4bd579" : "#395798"} />
                    <li key={index} className="text-lg list-none">{feature}</li>
                  </div>
                ) )}
              </div>
            </BlurFade>
          </>
        ) : ''}
      </div>

      <ImageGrid images={project.images} />

    </div>
  );
};

export default PortfolioPage;
