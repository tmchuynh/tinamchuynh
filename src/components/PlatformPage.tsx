"use client";

import { Button } from "@/components/ui/button";
import { Card, CardActions, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { DevToArticle, WritingPlatform } from "@/data/types";
import { formatDate } from "@/lib/utils";
import { useEffect, useState } from "react";
import { Badge } from "./ui/badge";
import BlurFade from "./ui/blur-fade";
import Breadcrumb from "./ui/breadcrumb";
import HyperText from "./ui/hyper-text";


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
        setError( error as string );
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

      <BlurFade delay={0.25}  >
        <HyperText
          className="text-4xl font-bold text-center mb-4"
          text={`${ platform.title }`}
        />
      </BlurFade>

      <BlurFade delay={0.35}  >
        <p className="text-lg mb-8">{platform.description}</p>
      </BlurFade>

      <BlurFade delay={0.45} >
        <div className="flex justify-center pb-8">
          {platform.focuses.map( ( focus, index ) => (
            <Badge variant={"default"} size={"default"} key={index}>{focus}</Badge>
          ) )}
        </div>
      </BlurFade>

      <BlurFade delay={0.5}  >
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
      </BlurFade>

      <BlurFade delay={0.6}  >
        {articles.length === 0 ? (
          <p>No articles found.</p>
        ) :
          ( <div className="flex flex-wrap justify-around gap-3">
            {articles.map( ( article, index ) => (
              <BlurFade delay={0.2 + index * 0.2}  >
                <Card key={`${ article.id }_${ index }`} className="w-[22rem] my-4 relative h-full">
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
              </BlurFade>
            ) )}
          </div> )}
      </BlurFade>
    </div>
  );
};

export default PlatformPage;