"use client";

import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { DevToArticle, WritingPlatform } from "@/data/types";
import { CardTitle, CardDescription, CardFooter, Card, CardHeader, CardContent, CardActions } from "@/components/ui/card";
import Breadcrumb from "./ui/breadcrumb";
import { Badge } from "./ui/badge";
import BlurFade from "./ui/blur-fade";
import { formatDate } from "@/lib/utils";


const breadcrumbItems = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Writing",
    dropdownItems: [
      { label: "Front-End Development Book", href: "/book/frontendbook" },
      { label: "Back-End Development Book", href: "/book/backendbook" },
    ],
  },
  {
    label: "Dev.to",
  },
];

const PlatformPage = ( {
  platform,
}: {
  platform: WritingPlatform;
} ) => {
  const [articles, setArticles] = useState<DevToArticle[]>( [] );
  const [loading, setLoading] = useState<boolean>( true );
  const [error, setError] = useState<string | null>( null );

  function handleClick( link: string | undefined ) {
    if ( link ) {
      window.open( link, "_blank" );
    }
  }

  useEffect( () => {
    const fetchArticles = async () => {
      try {
        const res = await fetch( "/api/devto" );

        if ( !res.ok ) {
          throw new Error( "Failed to fetch articles" );
        }

        const data = await res.json();

        const formattedArticles = data.map( ( article: { published_at: string; } ) => ( {
          ...article,
          published_at: formatDate( article.published_at ),
        } ) );

        console.log( formattedArticles );
        setArticles( formattedArticles );
      } catch ( error ) {
        setError( "Error fetching articles" );
      } finally {
        setLoading( false );
      }
    };

    fetchArticles();
  }, [] );

  if ( loading ) {
    return <p>Loading articles...</p>;
  }

  if ( error ) {
    return <p>{error}</p>;
  }


  return (
    <div className="max-w-7xl mx-auto p-6">
      <Breadcrumb items={breadcrumbItems} />

      <h1 className="text-4xl font-bold text-center mb-4">{platform.title}</h1>
      <h2 className="text-2xl font-semibold mt-8 mb-4">{platform.description}</h2>

      <div className="flex justify-center pb-8">
        {platform.focuses.map( ( focus, index ) => (
          <Badge variant={"default"} size={"default"} key={index}>{focus}</Badge>
        ) )}
      </div>

      <div className="flex justify-center gap-3">
        {platform.links.map( ( link, index ) => (
          <Button
            variant={"tertiary"}
            key={index}
          >
            {link.label}
          </Button>
        ) )}
      </div>

      {articles.length === 0 ? (
        <p>No articles found.</p>
      ) :
        ( <BlurFade delay={0.25} inView className="flex flex-wrap justify-around">
          {articles.map( ( article, index ) => (
            <Card key={`${ article.id }_${ index }`} className="w-[22rem] my-4 relative">
              <CardHeader>
                <CardTitle>{article.title}</CardTitle>
                <div className="flex justify-between">
                  <span className="text-highlight text-xs">
                    Published: {article.published_at}
                  </span>
                  <span className="text-highlight text-xs">
                    Reading Time: {article.reading_time_minutes} Minutes
                  </span>
                </div>
              </CardHeader>
              <CardContent className="grid gap-4">
                <CardDescription>{article.description}</CardDescription>
              </CardContent>
              <CardActions>
                <Button
                  variant={"outline"}
                  size={"sm"}
                  onClick={() => handleClick( article.canonical_url )}
                >
                  Read More
                </Button>
              </CardActions>
              <CardFooter className="flex py-7 h-fit">
                <div className="flex flex-wrap">
                  {article.tag_list.slice( 0, 2 ).map( ( tag, tagIndex ) => (
                    <Badge key={tagIndex} variant={"highlight"} className="mb-1 ml-0">
                      #{tag}
                    </Badge>
                  ) )}
                </div>
              </CardFooter>
            </Card>
          ) )}
        </BlurFade> )}
    </div>
  );
};

export default PlatformPage;