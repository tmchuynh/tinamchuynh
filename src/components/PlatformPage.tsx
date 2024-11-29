"use client";

import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { WritingPlatform } from "@/data/types";
import { CardTitle, CardDescription, CardFooter, Card, CardHeader, CardContent, CardActions } from "@/components/ui/card";
import Breadcrumb from "./ui/breadcrumb";
import { Badge } from "./ui/badge";
import BlurFade from "./ui/blur-fade";


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
  platform: WritingPlatform;
} ) => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState( false );

  useEffect( () => {
    setMounted( true );
  }, [] );

  function handleClick( link: string | undefined ) {
    if ( link ) {
      window.open( link, "_blank" );
    }
  }

  return (
    <div className="max-w-7xl mx-auto p-6">
      <Breadcrumb items={breadcrumbItems} />

      <h1 className="text-4xl font-bold text-center mb-4">{platform.title}</h1>
      <h2 className="text-2xl font-semibold mt-8 mb-4">{platform.description}</h2>

      <div className="flex justify-center pb-8">
        {platform.focuses.map( ( focus, index ) => (
          <Badge variant={"secondary"} className="mx-2" key={index}>{focus}</Badge>
        ) )}
      </div>

      <BlurFade delay={0.25} inView className="flex flex-wrap justify-around">
        {platform.articles.map( ( article, index ) => (
          <Card key={`${ article.title }_${ index }`} className="w-[22rem] my-4 relative">
            <CardHeader>
              <CardTitle>{article.title}</CardTitle>
              <span className="text-gray-500 text-xs">
                Published: {article.date}
              </span>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="flex justify-around">
                {article.display &&
                  article.display.map( ( icon, imgIndex ) => (
                    <icon.icon key={imgIndex} className="w-10 h-10 text-primary" />
                  ) )}
              </div>
              <CardDescription>{article.description}</CardDescription>
            </CardContent>
            <CardActions>
              <Button
                variant={"outline"}
                size={"sm"}
                onClick={() => handleClick( article.link.url )}
              >
                {article.link.label}
              </Button>
            </CardActions>
            <CardFooter className="flex py-7 h-fit">
              <div className="flex gap-3 flex-wrap">
                {article.tags.map( ( tag, tagIndex ) => (
                  <Badge key={tagIndex} variant={"outline"}>
                    #{tag}
                  </Badge>
                ) )}
              </div>
            </CardFooter>
          </Card>
        ) )}
      </BlurFade>
    </div>
  );
};

export default PlatformPage;