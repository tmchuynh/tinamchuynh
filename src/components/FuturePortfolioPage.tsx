import { PortfolioProject } from "@/data/types";
import { Bookmark, Check } from "lucide-react";
import { useTheme } from "next-themes";
import BlurFade from "./ui/blur-fade";
import ImageGrid from "./ui/image-grid";

const FutureProjectPage = (
  {
    futureProjects,
  }: {
    futureProjects: PortfolioProject;
  }
) => {
  const { theme } = useTheme();

  return (
    <div>
      {/* Project Title */}
      <h1 className="text-4xl font-bold text-center mb-4">{futureProjects.title}</h1>

      {/* Project Description */}
      <p className="text-lg mb-8">{futureProjects.description}</p>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Focuses of the Project */}
        {futureProjects.focuses ? (
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Project Focuses</h2>
            <div>
              {futureProjects.focuses.map( ( focus, index ) => (
                <BlurFade delay={0.25 + index} inView key={index} >
                  <ul className="inline-flex">
                    <Bookmark color={theme === "dark" ? "#4bd579" : "#395798"} className="mr-2" />
                    <li key={index} className="text-lg list-none mb-3">
                      <p>{focus.split( ":" )[0]}</p>
                      <p className="text-sm">{focus.split( ":" )[1]}</p>
                    </li>
                  </ul>
                </BlurFade>
              ) )}
            </div>
          </div>
        ) : ''}

        {/* Technologies Used */}
        {futureProjects.technologies ? (
          <>
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Technologies</h2>
              <div>
                {futureProjects.technologies.map( ( tech, index ) => (
                  <BlurFade delay={0.25 + index} inView key={index} >
                    <div className="inline-flex">
                      <Check color={theme === "dark" ? "#4bd579" : "#395798"} className="mr-2" />
                      <li key={index} className="text-lg list-none">{tech}</li>
                    </div>
                  </BlurFade>
                ) )}
              </div>
            </div>
          </>
        ) : ''}
      </div>

      {/* Timeline */}
      {futureProjects.timeline ? (
        <BlurFade delay={2.25} >
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Project Timeline</h2>
            <ul className="relative border-l-2 border-primary ml-5">
              {futureProjects.timeline.map( ( stage, index ) => (
                <BlurFade delay={3.25 + index} inView key={index} >
                  <li className="mb-14 ms-6">
                    <span className="absolute flex items-center shadow-lg shadow-primary justify-center w-6 h-6 mt-2 bg-primary rounded-full -start-3 ring-8 ring-ring">
                      <svg className="w-2.5 h-2.5 text-primary-foreground" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                      </svg>
                    </span>
                    <h3 className="flex text-lg items-center ml-3 pb-1 -m-2 text-foreground">{stage.split( ":" )[0]}</h3>
                    <h4 className="flex items-center ml-3 -m-2 font-light text-sm text-foreground">{stage.split( ":" )[1]}</h4>
                  </li>
                </BlurFade>
              ) )}
            </ul>
          </div>
        </BlurFade>
      ) : ''}


      {/* Inspiration */}
      <BlurFade delay={4} inView >
        {futureProjects.inspiration ?
          (
            <ImageGrid images={futureProjects.inspiration} title="Inspiration" />
          ) : ""}
      </BlurFade>

    </div>
  );
};

export default FutureProjectPage;
