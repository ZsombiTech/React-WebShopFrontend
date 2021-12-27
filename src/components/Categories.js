import horgaszbot from "../images/horgaszbit.jpg";
import csali from "../images/csali.jpg";
import horog from "../images/horog.jpg";
import szek from "../images/szek.jpeg";
import { Link } from "react-router-dom";

const callouts = [
  {
    description: "Horgászbotok",
    imageSrc: horgaszbot,
    imageAlt: "Horgaszbot",
    href: "#",
  },
  {
    description: "Csalik",
    imageSrc: csali,
    imageAlt: "Csali",
    href: "#",
  },
  {
    description: "Horgok",
    imageSrc: horog,
    imageAlt: "Horog",
    href: "#",
  },
  {
    description: "Egyebek",
    imageSrc: szek,
    imageAlt: "Szek",
    href: "#",
  },
];

export default function Categories() {
  return (
    <div className="bg-gray-100 my-16" id="coolkategoria">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto py-32 sm:py-32 lg:py-33 lg:max-w-none">
          <h2 className="text-2xl font-extrabold text-gray-900 text-center mb-12">
            Termékeink
          </h2>

          <div className="mt-10 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-4 lg:gap-x-6">
            {callouts.map((callout) => (
              <Link to="/productlist">
                <div key={callout.description} className="group relative">
                  <div className="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                    <img
                      src={callout.imageSrc}
                      alt={callout.imageAlt}
                      className="w-full h-full object-center object-cover"
                    />
                  </div>
                  <p className="text-center font-semibold text-gray-900 mt-20">
                    {callout.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
