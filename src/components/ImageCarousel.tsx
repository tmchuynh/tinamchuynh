import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ImageProps } from "@/data/types";
import Image from "next/image";
import BlurFade from "./ui/blur-fade";
import { cn } from "@/lib/utils";

export function ImageCarousel( {
  images,
  className,
}: {
  images: ImageProps[];
  className?: string;
} ) {
  return (
    <BlurFade delay={0.95}>
      {/* Corrected className syntax */}
      <Carousel className={cn( "w-full max-w-5xl", className )}>
        <CarouselContent>
          {images.map( ( image, index ) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={1900}
                      height={1800}
                    />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ) )}
        </CarouselContent>
        {/* Ensure proper functionality for the carousel buttons */}
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </BlurFade>
  );
}
