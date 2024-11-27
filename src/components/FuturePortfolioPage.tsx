import { PortfolioProject } from "@/data/types";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const FutureProjectPage = (
  {
    futureProjects,
  }: {
    futureProjects: PortfolioProject;
  }
) => {
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
      {/* Project Title */}
      <h1 className="text-4xl font-bold text-center mb-4">{futureProjects.title}</h1>

      {/* Project Description */}
      <p className="text-lg mb-8">{futureProjects.description}</p>

      {/* Focuses of the Project */}
      {futureProjects.focuses ? (
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Project Focuses</h2>
          <ul className="list-disc pl-6">
            {futureProjects.focuses.map( ( focus, index ) => (
              <li key={index} className="text-lg">{focus}</li>
            ) )}
          </ul>
        </div>
      ) : ''}

      {/* Technologies Used */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Technologies Used</h2>
        <ul className="list-disc pl-6">
          {futureProjects.technologies.map( ( tech, index ) => (
            <li key={index} className="text-lg">{tech}</li>
          ) )}
        </ul>
      </div>

      {/* Timeline */}
      <div className="mb-8">
        {futureProjects.timeline ? (
          <>
            <h2 className="text-2xl font-semibold mb-4">Project Timeline</h2>
            <ol className="relative border-l-2 border-primary ml-5">
              {futureProjects.timeline.map( ( stage, index ) => (
                <li className="mb-14 ms-6" key={index}>
                  <span className="absolute flex items-center shadow-lg shadow-primary justify-center w-6 h-6 mt-2 bg-primary rounded-full -start-3 ring-8 ring-ring">
                    <svg className="w-2.5 h-2.5 text-primary-foreground" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                    </svg>
                  </span>
                  <h3 className="flex text-xl items-center ml-3 pb-1 -m-2 font-semibold text-foreground">{stage}</h3>
                  <h4 className="flex items-center ml-3 -m-2 text-md font-light text-foreground">{stage}</h4>
                </li>
              ) )}
            </ol>
          </>
        ) : ''}
      </div>

      {/* Inspiration */}
      <div className="mb-8">
        {futureProjects.inspiration ?
          (
            <>
              <h2 className="text-2xl font-semibold mb-4">Project Inspiration</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {futureProjects.inspiration.map( ( imgSrc, index ) => (
                  <div key={index} className="relative">
                    <img
                      src={imgSrc}
                      alt={`Inspiration ${ index + 1 }`}
                      className="w-full h-full object-cover rounded-lg shadow-lg"
                    />
                  </div>
                ) )}
              </div></>
          ) : ""}
      </div>

      {/* Project Links */}
      <div className="flex space-x-6 mb-8 justify-center">
        {futureProjects.liveLink ? (
          <Button
            variant={theme === "dark" ? "default" : "secondary"}
            onClick={() => ( handleClick( futureProjects.liveLink ) )}
            rel="noopener noreferrer"
            className="px-6 py-2transition duration-300"
          >
            View Project
          </Button>
        ) : ( '' )}
        {futureProjects.githubLink ? (
          <Button
            variant={theme === "dark" ? "outline" : "default"}
            onClick={() => ( handleClick( futureProjects.liveLink ) )}
            rel="noopener noreferrer"
            className="px-6 py-2transition duration-300"
          >
            View on GitHub
          </Button>
        ) : ( '' )}
      </div>


    </div>
  );
};

export default FutureProjectPage;
