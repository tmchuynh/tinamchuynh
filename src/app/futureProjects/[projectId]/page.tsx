"use client";

import FutureProjectPage from "@/components/FuturePortfolioPage";
import { futureProjects } from "@/data/data";
import { PortfolioProject } from "@/data/types";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const FutureProjectDetailPage = () => {
  const { projectId } = useParams();
  const [project, setProject] = useState<PortfolioProject>();

  useEffect( () => {
    futureProjects.map( ( project ) => {
      if ( project.id === projectId ) {
        setProject( project );
      }
    } );

  }, [projectId] );

  if ( !project ) {
    return <div>Loading...</div>;
  }

  return <FutureProjectPage futureProjects={project} />;
};

export default FutureProjectDetailPage;
