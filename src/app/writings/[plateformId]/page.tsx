"use client";

import PlatformPage from "@/components/PlatformPage";
import { writingPlatforms } from "@/data/data";
import { WritingPlatform } from "@/data/types";
import { usePathname } from 'next/navigation';
import { useEffect, useState } from "react";

const WritingPlatformDetailPage = () => {
  const pathname = usePathname();
  const projectId = pathname.split( "/" )[2];
  const [project, setProject] = useState<WritingPlatform | null>( null );

  useEffect( () => {
    const foundProject = writingPlatforms.find( ( platform ) => platform.id === projectId );
    setProject( foundProject || null );
  }, [projectId] );

  if ( !project ) {
    return <div>Loading...</div>;
  }

  return <PlatformPage platform={project} />;
};

export default WritingPlatformDetailPage;
