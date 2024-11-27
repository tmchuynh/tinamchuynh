"use client";

import PortfolioPage from "@/components/PortfolioPage";
import { projects } from "@/data/data";
import { PortfolioProject } from "@/data/types";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const ProjectDetailPage = () => {
  const { projectId } = useParams();
  const [project, setProject] = useState<PortfolioProject>();

  useEffect( () => {
    projects.map( ( project ) => {
      if ( project.id === projectId ) {
        setProject( project );
      }
    } );

  }, [projectId] );

  if ( !project ) {
    return <div>Loading...</div>;
  }

  return <PortfolioPage project={project} />;
};

export default ProjectDetailPage;
