"use client";

import { ImageProps } from "@/data/types";

const ImageGrid = ( {
  images
}: {
  images: ImageProps[];
}
) => {
  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-8">Project Images</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {images.map( ( image, index ) => (
          <div key={index} className="relative">
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
        ) )}
      </div>
    </div>
  );
};

export default ImageGrid;
