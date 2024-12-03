import BlurFade from "@/components/ui/blur-fade";
import { BookProject } from "@/data/types";
import { RiFocus2Line } from "react-icons/ri";
import { ImageCarousel } from "./ImageCarousel";
import HyperText from "./ui/hyper-text";


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
        <HyperText
          className="text-4xl font-bold text-center mb-4"
          text={`${ book.title }`}
        />
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
              <h2 className="text-2xl font-semibold mt-8 mb-4">Book Focuses</h2>
              <div>
                {book.focuses.map( ( focus, index ) => (
                  <BlurFade delay={0.1 + index * 0.5} key={index} >
                    <ul className="">
                      <li key={index} className="text-lg list-none mb-1 inline-flex">
                        <RiFocus2Line className="mr-2 h-6 w-6 text-tertiary mt-1" aria-hidden="true" />
                        <div>
                          <p><strong>{focus.split( ":" )[0]}</strong></p>
                          <p className="text-sm">{focus.split( ":" )[1]}</p>
                        </div>
                      </li>
                    </ul>
                  </BlurFade>
                ) )}
              </div>
            </div>
          </div>
        ) : ''}
      </BlurFade>

      <BlurFade delay={0.5}  >
        <div>
          <h2 className="text-2xl font-semibold mt-8 mb-4">Sneak Peek</h2>
          <ImageCarousel images={book.images} />
        </div>
      </BlurFade>

    </div>
  );
};

export default BookPage;
