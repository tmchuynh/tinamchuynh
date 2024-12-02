import BlurFade from "@/components/ui/blur-fade";
import { BookProject } from "@/data/types";
import { Bookmark } from "lucide-react";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { ImageCarousel } from "./ImageCarousel";


const BookPage = (
  {
    book,
  }: {
    book: BookProject;
  }
) => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState( false );

  useEffect( () => {
    setMounted( true );
  }, [] );

  return (
    <div>
      {/* Project Title */}
      <BlurFade delay={0.25}  >
        <h1 className="text-4xl font-bold text-center mb-4">{book.title}</h1>
      </BlurFade>

      {/* Project Description */}
      <BlurFade delay={0.35}  >
        <p className="text-lg mb-8">{book.description}</p>
      </BlurFade>

      <BlurFade delay={0.45}  >
        {book.focuses.length > 0 ? (
          <div className="flex">
            {/* Focuses of the Project */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mt-8 mb-4">Project Focuses</h2>
              <div>
                {book.focuses.map( ( focus, index ) => (
                  <BlurFade delay={0.55 + index} key={index} >
                    <ul className="inline-flex">
                      <Bookmark color={theme === "dark" ? "#4bd579" : "#395798"} className="mr-2" />
                      <li key={index} className="text-lg list-none">{focus}</li>
                    </ul>
                  </BlurFade>
                ) )}
              </div>
            </div>
          </div>
        ) : ''}
      </BlurFade>

      <div>
        <h2 className="text-2xl font-semibold mt-8 mb-4">Sneak Peek</h2>
        <ImageCarousel images={book.images} />
      </div>

    </div>
  );
};

export default BookPage;
