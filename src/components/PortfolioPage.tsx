"use client";

import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import ImageGrid from "./ui/image-grid";
import { PortfolioProject } from "@/data/types";
import { Check, StarHalf } from "lucide-react";
const PortfolioPage = ( {
  project,
}: {
  project: PortfolioProject;
} ) => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState( false );

  // Ensure the theme is accessed after the component is mounted
  useEffect( () => {
    setMounted( true );
  }, [] );

  function handleClick( link: string | undefined ) {
    window.open( link, "_blank" );
  }
  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Project Title */}
      <h1 className="text-4xl font-bold text-center mb-4">{project.title}</h1>

      {/* Project Description */}
      <p className="text-lg mb-8">{project.description}</p>
      {/* Project Links */}
      <div className="flex space-x-6 mb-8 justify-center">
        {project.liveLink ? (
          <Button
            variant={theme === "dark" ? "default" : "secondary"}
            onClick={() => ( handleClick( project.liveLink ) )}
            rel="noopener noreferrer"
            className="px-6 py-2transition duration-300"
          >
            View Project
          </Button>
        ) : ( '' )}
        {project.githubLink ? (
          <Button
            variant={theme === "dark" ? "outline" : "default"}
            onClick={() => ( handleClick( project.liveLink ) )}
            rel="noopener noreferrer"
            className="px-6 py-2transition duration-300"
          >
            View on GitHub
          </Button>
        ) : ( '' )}
      </div>


      {/* Technologies Used */}
      <h2 className="text-2xl font-semibold mb-4">Technologies Used</h2>
      <ul className="list-disc pl-6 mb-8 flex flex-col">
        {project.technologies.map( ( tech, index ) => (
          <div className="inline-flex">
            <Check color={theme === "dark" ? "#4bd579" : "#395798"} className="mr-2" />
            <li key={index} className="text-lg list-none">{tech}</li>
          </div>
        ) )}
      </ul>

      {/* Optional Section: Project Features or Additional Details */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">Project Features</h2>
        <p className="text-lg flex flex-col pl-6 mb-8">
          {project.features.map( ( feature, index ) => (
            <div className="inline-flex">
              <StarHalf color={theme === "dark" ? "#4bd579" : "#395798"} />
              <li key={index} className="text-lg list-none">{feature}</li>
            </div>
          ) )}
        </p>
      </div>

      {/* Project Images - Dynamic Grid Layout */}
      <ImageGrid images={project.images} />

    </div>
  );
};

export default PortfolioPage;
