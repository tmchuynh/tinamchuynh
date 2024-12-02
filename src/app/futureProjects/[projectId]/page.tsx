"use client";

import FutureProjectPage from "@/components/FuturePortfolioPage";
import Breadcrumb from "@/components/ui/breadcrumb";
import { futureProjects } from "@/data/data";
import { BreadcrumbInfo, PortfolioProject } from "@/data/types";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const FutureProjectDetailPage = () => {
  const { projectId } = useParams();
  const [project, setProject] = useState<PortfolioProject | null>( null );
  const [breadcrumbItems, setBreadcrumbItems] = useState<BreadcrumbInfo[]>( [
    { label: "Home", href: "/" },
    { label: "Projects" },
  ] );

  useEffect( () => {
    const selectedProject = futureProjects.find( ( proj ) => proj.id === projectId );

    if ( selectedProject ) {
      setProject( selectedProject );

      setBreadcrumbItems( ( prev ) => [
        ...prev,
        {
          label: selectedProject.title,
        },
      ] );
    }

    const dropdownItems = futureProjects
      .filter( ( proj ) => proj.id !== projectId )
      .map( ( proj ) => ( {
        label: proj.title,
        href: `/futureProjects/${ proj.id }`,
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
    return <div>Project loading...</div>;
  }

  return (
    <div className="max-w-7xl mx-auto p-6">
      <Breadcrumb items={breadcrumbItems} />
      <FutureProjectPage futureProjects={project} />
    </div>
  );
};

export default FutureProjectDetailPage;
