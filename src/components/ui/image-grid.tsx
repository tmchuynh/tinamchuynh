"use client";

import { ImageProps } from "@/data/types";
import BlurFade from "./blur-fade";
import Image from "next/image";
import { DialogContent, DialogTrigger, DialogPortal } from "@radix-ui/react-dialog";
import { Dialog, DialogTitle, DialogClose } from "./dialog";

const ImageGrid = ( { images }: { images: ImageProps[]; } ) => {
  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-8">Project Images</h1>
      <div>
        <BlurFade delay={0.25} inView className="flex flex-wrap gap-5">
          {images.map( ( image, index ) => (
            <Dialog key={index}>
              {/* Dialog Trigger and Hover Effect */}
              <DialogTrigger asChild>
                <div className="relative group h-[20rem] w-[20rem]">
                  {/* Image */}
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={1000}
                    height={1000}
                    className="h-full w-full object-cover text-foreground rounded-lg shadow-lg"
                  />

                  {/* Overlay and Button */}
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out flex justify-center items-center rounded-lg">
                    <button className="text-white px-4 py-2 bg-primary hover:bg-secondary rounded-md ">
                      View Full Image
                    </button>
                  </div>
                </div>
              </DialogTrigger>

              {/* Dialog Portal for Centering Dialog */}
              <DialogPortal>
                <DialogContent className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
                  <DialogClose className="absolute top-4 right-4 text-white font-bold">X</DialogClose>
                  <DialogTitle className="sr-only">{image.alt}</DialogTitle>
                  <div className="ml-auto md-10 md:mr-44 w-7/12">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={3000}
                      height={3000}
                      className="h-full w-full object-contain text-foreground rounded-lg shadow-lg"
                    />
                  </div>
                </DialogContent>
              </DialogPortal>
            </Dialog>
          ) )}
        </BlurFade>
      </div>
    </div>
  );
};

export default ImageGrid;
