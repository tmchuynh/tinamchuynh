"use client";

import { Button } from "@/components/ui/button";
import { Github, Linkedin } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ContactPage = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState( false );

  useEffect( () => {
    setMounted( true );
  }, [] );

  const handleClick = ( url: string ) => {
    window.open( url, "_blank" );
  };

  if ( !mounted ) {
    return null;
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-6">Contact</h1>

      <p className="text-lg mb-4">
        If you have any questions or would like to get in touch, feel free to
        reach out through the following methods:
      </p>

      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <span className="font-semibold">Email:</span>
          <Button
            variant={"link"}
            onClick={() => handleClick( "mailto:tinamchuynh@gmail.com" )}
          >
            tinamchuynh@gmail.com
          </Button>
        </div>

        <div className="flex items-center gap-2">
          <span className="font-semibold">Phone:</span>
          <Button
            variant={"link"}
            onClick={() => handleClick( "tel:+17148582418" )}
          >
            +1 714 858 2418
          </Button>
        </div>

        <div className="flex flex-col gap-2">
          <span className="font-semibold">Social Media:</span>
          <div className="flex gap-4">
            <Button
              variant={theme === "dark" ? "outline" : "tertiary"}
              size={"lg"}
              onClick={() => {
                handleClick( "https://www.linkedin.com/in/tinamchuynh/" );
              }}
            >
              <Linkedin role="img" />
            </Button>
            <Button
              variant={theme === "dark" ? "outline" : "tertiary"}
              size={"lg"} onClick={() => handleClick( "https://github.com/tmchuynh" )}>
              <Github role="img" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
