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

export function ImageCarousel( {
  images
}: {
  images: ImageProps[];
} ) {
  return (
    <BlurFade delay={0.95}  >
      <Carousel className="w-full max-w-5xl">
        <CarouselContent>
          {images.map( ( image, index ) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <Image src={image.src} alt={image.alt} width={1900} height={1800} />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ) )}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </BlurFade>

  );
}
