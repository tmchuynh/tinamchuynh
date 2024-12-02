"use client";

import BlurFade from "@/components/ui/blur-fade";
import { Button } from "@/components/ui/button";
import ImageGrid from "@/components/ui/image-grid";
import { PortfolioProject } from "@/data/types";
import { Check, StarHalf } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

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
    <div>
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
          <div className="mb-8 flex flex-col">
            {project.technologies.map( ( tech, index ) => (
              <BlurFade delay={0.25 + index} inView key={tech}>
                <ul className="inline-flex">
                  <Check color={theme === "dark" ? "#4bd579" : "#395798"} className="mr-2" />
                  <li key={index} className="text-lg list-none">{tech}</li>
                </ul>
              </BlurFade>
            ) )}
          </div>
        </>
      ) : ''}

      <div>
        {project.features ? (
          <>
            <h2 className="text-2xl font-semibold mb-4">Features</h2>
            <div className="text-lg flex flex-col mb-8">
              {project.features.map( ( feature, index ) => (
                <BlurFade delay={0.25 + index} inView key={feature}>
                  <ul className="inline-flex" >
                    <StarHalf color={theme === "dark" ? "#4bd579" : "#395798"} />
                    <li key={index} className="text-lg list-none">{feature}</li>
                  </ul>
                </BlurFade>
              ) )}
            </div>
          </>
        ) : ''}
      </div>

      <ImageGrid images={project.images} title="Images" />

    </div>
  );
};

export default PortfolioPage;
