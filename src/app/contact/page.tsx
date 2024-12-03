"use client";

import Breadcrumb from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useTheme } from "next-themes";
import { MdEmail } from "react-icons/md";
import { useEffect, useState } from "react";

const breadcrumbItems = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Contact",
  },
];

const ContactPage = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState( false );

  useEffect( () => {
    setMounted( true );
  }, [] );

  const handleClick = ( url: string ) => {
    window.open( url, "_blank" );
  };

  const showItems = () => {
    const modal = document.querySelector( "#contact-modal" );
    modal?.classList.toggle( "hidden" );
  };

  if ( !mounted ) {
    return null;
  }

  return (
    <div className="max-w-7xl mx-auto p-6">
      <Breadcrumb items={breadcrumbItems} />
      <h1 className="text-4xl font-bold text-center mb-6">
        Get In Touch
      </h1>

      <div className="flex flex-col gap-8">

        <div className="border shadow-xl w-1/2 mx-auto rounded-2xl overflow-clip bg-highlight">
          <div>
            <Image
              height={300}
              width={300}
              className="p-4 clip-path-circle-30"
              alt=""
              src={"/images/iac/about_classes.png"}
            />
          </div>
          <div className="bg-tertiary h-[4em] relative">
            <Button
              variant={"link"}
              onClick={() => showItems()}
              className="text-2xl font-bold pt-8 pl-7 uppercase text-tertiary-foreground underline hover:no-underline">
              Contact Me
            </Button>
          </div>
        </div>


        <div className="border shadow-xl w-1/2 mx-auto rounded-2xl overflow-clip bg-foreground text-background flex items-center">
          <div className="flex justify-center items-center w-fit h-fit bg-primary rounded-full my-3 ml-14 mr-7 p-3">
            <MdEmail className="h-10 w-10" />
          </div>
          <div className="py-9">
            <h2 className="text-2xl font-semibold">Email</h2>
            <h3 className="text-lg">email placeholder</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
