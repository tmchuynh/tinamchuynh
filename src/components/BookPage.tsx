import BlurFade from "@/components/ui/blur-fade";
import { BookProject } from "@/data/types";
import { RiFocus2Line } from "react-icons/ri";
import { ImageCarousel } from "./ImageCarousel";


const BookPage = (
  {
    book,
  }: {
    book: BookProject;
  }
) => {

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
                      <RiFocus2Line className="mr-2 h-6 w-6 text-tertiary" aria-hidden="true" />
                      <li key={index} className="text-lg list-none">
                        <p><strong>{focus.split( ":" )[0]}</strong></p>
                        <p className="text-sm">{focus.split( ":" )[1]}</p>
                      </li>
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
