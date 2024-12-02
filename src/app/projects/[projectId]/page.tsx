"use client";

import PortfolioPage from "@/components/PortfolioPage";
import Breadcrumb from "@/components/ui/breadcrumb";
import { projects } from "@/data/data";
import { BreadcrumbInfo, PortfolioProject } from "@/data/types";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const ProjectDetailPage = () => {
  const { projectId } = useParams();
  const [project, setProject] = useState<PortfolioProject | null>( null );
  const [breadcrumbItems, setBreadcrumbItems] = useState<BreadcrumbInfo[]>( [
    { label: "Home", href: "/" },
    { label: "Projects" },
  ] );

  useEffect( () => {
    const selectedProject = projects.find( ( proj ) => proj.id === projectId );

    if ( selectedProject ) {
      setProject( selectedProject );


      setBreadcrumbItems( ( prev ) => [
        ...prev,
        {
          label: selectedProject.title,
        },
      ] );
    }

    const dropdownItems = projects
      .filter( ( proj ) => proj.id !== projectId )
      .map( ( proj ) => ( {
        label: proj.title,
        href: `/projects/${ proj.id }`,
      } ) );


    if ( dropdownItems.length > 0 ) {
      setBreadcrumbItems( ( prev ) => [
        ...prev.slice( 0, 1 ),
        {
          label: "Projects",
          dropdownItems,
        },
        prev[2],
      ] );
    }
  }, [projectId] );

  if ( !project ) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-7xl mx-auto p-6">
      <Breadcrumb items={breadcrumbItems} />
      <PortfolioPage project={project} />
    </div>
  );
};

export default ProjectDetailPage;
