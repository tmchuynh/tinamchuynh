"use client";

import BlurFade from "@/components/ui/blur-fade";
import { Button } from "@/components/ui/button";
import { PortfolioProject } from "@/data/types";
import { Check, StarHalf } from "lucide-react";
import { useTheme } from "next-themes";
import { ImageCarousel } from "./ImageCarousel";
import HyperText from "./ui/hyper-text";

const PortfolioPage = ( {
  project,
}: {
  project: PortfolioProject;
} ) => {
  const { theme } = useTheme();

  function handleClick( link: string | undefined ) {
    window.open( link, "_blank" );
  }

  return (
    <div>
      {/* Project Title */}
      <BlurFade delay={0.25}  >
        <HyperText
          className="text-4xl font-bold text-center mb-4"
          text={`${ project.title }`}
        />
      </BlurFade>

      {/* Project Description */}
      <BlurFade delay={0.35}  >
        <p className="text-lg mb-8">{project.description}</p>
      </BlurFade>

      {/* Project Links */}
      <BlurFade delay={0.45} >
        <div className="flex space-x-6 mb-8 justify-center">
          {project.liveLink ? (
            <Button
              variant={theme === "dark" ? "default" : "secondary"}
              onClick={() => ( handleClick( project.liveLink ) )}
              rel="noopener noreferrer"
              className="px-6 py-2 transition duration-300"
            >
              Visit Site
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
      </BlurFade>

      {project.features || project.technologies ? (
        <div className="grid md:grid-cols-2 gap-8">
          {/* Features of the Project */}
          {project.features ? (
            <div>
              <h2 className="text-2xl font-semibold mb-4">Features</h2>
              <div className="text-lg flex flex-col mb-8">
                {project.features.map( ( feature, index ) => (
                  <BlurFade delay={0.25 + index} inView key={feature}>
                    <ul className="inline-flex" >
                      <StarHalf aria-hidden="true" className="h-6 w-6 text-tertiary mt-3" />
                      <li key={index} className="text-lg list-none mb-2">
                        <p><strong>{feature.split( ":" )[0]}</strong></p>
                        <p className="text-sm">{feature.split( ":" )[1]}</p>
                      </li>
                    </ul>
                  </BlurFade>
                ) )}
              </div>
            </div>
          ) : ''}

          {/* Technologies used in the Project */}
          {project.technologies ? (
            <div>
              <h2 className="text-2xl font-semibold mb-4">Technologies Used</h2>
              <div className="mb-8 flex flex-col">
                {project.technologies.map( ( tech, index ) => (
                  <BlurFade delay={0.25 + index} inView key={tech}>
                    <ul className="inline-flex">
                      <Check className="mr-2 h-6 w-6 text-tertiary" aria-hidden="true" />
                      <li key={index} className="text-lg list-none">{tech}</li>
                    </ul>
                  </BlurFade>
                ) )}
              </div>
            </div>
          ) : ''}
        </div>
      ) : ''}

      <BlurFade delay={0.5}  >
        {project.images ? (
          <>
            <h2 className="text-2xl font-semibold mt-8 mb-4">Project Images</h2>
            <ImageCarousel images={project.images} />
          </>
        ) : ''}
      </BlurFade>

    </div>
  );
};

export default PortfolioPage;
