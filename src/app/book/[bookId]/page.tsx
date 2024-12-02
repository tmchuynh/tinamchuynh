"use client";

import BookPage from "@/components/BookPage";
import Breadcrumb from "@/components/ui/breadcrumb";
import { bookProjects } from "@/data/data";
import { BookProject, BreadcrumbInfo } from "@/data/types";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const BookProjectPage = () => {
  const { bookId } = useParams();
  const [project, setProject] = useState<BookProject | null>( null );
  const [breadcrumbItems, setBreadcrumbItems] = useState<BreadcrumbInfo[]>( [
    { label: "Home", href: "/" },
    { label: "Projects" },
  ] );

  console.log( bookId );

  useEffect( () => {
    const selectedProject = bookProjects.find( ( proj ) => proj.id === bookId );
    if ( selectedProject ) {
      setProject( selectedProject );

      setBreadcrumbItems( ( prev ) => [
        ...prev,
        {
          label: selectedProject.title,
        },
      ] );
    }

    const dropdownItems = bookProjects
      .filter( ( proj ) => proj.id !== bookId )
      .map( ( proj ) => ( {
        label: proj.title,
        href: `/book/${ proj.id }`,
      } ) )
      .concat(
        { label: "Dev.to", href: "/writings/devto" },
      );


    if ( dropdownItems.length > 0 ) {
      setBreadcrumbItems( ( prev ) => [
        ...prev.slice( 0, 1 ),
        {
          label: "Writing",
          dropdownItems,
        },
        prev[2],
      ] );
    }
  }, [bookId] );

  if ( !project ) {
    return <div>Project not found or loading...</div>;
  }

  return (
    <div className="max-w-7xl mx-auto p-6">
      <Breadcrumb items={breadcrumbItems} />
      <BookPage book={project} />
    </div>
  );
};

export default BookProjectPage;
