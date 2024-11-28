"use client";

import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { WritingPlatform } from "@/data/types";
import { CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Card, CardHeader, CardContent } from "@mui/material";


const breadcrumbItems = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Projects",
    dropdownItems: [
      { label: "My Business", href: "/projects/mybussiness" },
      { label: "IAC Website", href: "/projects/iacwebsite" },
      { label: "Quiz Application", href: "/projects/quizapplication" },
      { label: "Sudoku", href: "/projects/sudoku" },
      { label: "Front-End Development Book", href: "/projects/frontendbook" },
      { label: "Back-End Development Book", href: "/projects/backendbook" },
    ],
  },
  {
    label: "Details",
  },
];


const PlatformPage = ( {
  platform,
}: {
  platform: WritingPlatform[];
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
    <div className="max-w-7xl mx-auto p-6 grid grid-cols-2 md:grid-cols-4 gap-3">
      {/* Only render after mounting */}
      {mounted &&
        platform.map( ( platformItem, index ) => (
          <Card key={index} className="w-[380px] mx-5">
            <CardHeader>
              <CardTitle>{platformItem.title}</CardTitle>
              <CardDescription>{platformItem.brief}</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              {platformItem.description}
            </CardContent>
            <CardFooter>
              {platformItem.links.map( ( link, linkIndex ) => {
                return (
                  <Button
                    key={linkIndex}
                    variant={theme === "dark" ? "outline" : "default"}
                    onClick={() => handleClick( link.url )}
                  >
                    {link.label}
                  </Button>
                );
              } )}
            </CardFooter>
          </Card>
        ) )}
    </div>
  );
};

export default PlatformPage;