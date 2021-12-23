import bot from "../images/bot.webp";
const products = [
  {
    id: 1,
    name: "Horgaszbot 1",
    href: "#",
    imageSrc: bot,
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    newprice: "$25",
    color: "Black",
  },
  {
    id: 2,
    name: "Horgaszbot 2",
    href: "#",
    imageSrc: bot,
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    newprice: "$25",
    color: "Black",
  },
  {
    id: 3,
    name: "Horgaszbot 3",
    href: "#",
    imageSrc: bot,
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    newprice: "$25",
    color: "Black",
  },
  {
    id: 4,
    name: "Horgaszbot 4",
    href: "#",
    imageSrc: bot,
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    newprice: "$25",
    color: "Black",
  },
  {
    id: 5,
    name: "Horgaszbot 5",
    href: "#",
    imageSrc: bot,
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    newprice: "$25",
    color: "Black",
  },
  {
    id: 6,
    name: "Horgaszbot 6",
    href: "#",
    imageSrc: bot,
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    newprice: "$25",
    color: "Black",
  },
];

export default function Products() {
  return (
    <div className="bg-white mt-9" id="coolproduct">
      <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 text-center mb-19">
        Akciók
      </h2>

      <div className="ml-5 flex-col mt-6 flex lg:flex-row lg:ml-13 ">
        {products.map((product) => (
          <div key={product.id} className="group relative mr-13 sm:flex-col">
            <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
              <img
                src={product.imageSrc}
                alt={product.imageAlt}
                className="w-full h-full object-center object-cover lg:w-full lg:h-full"
              />
            </div>
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-sm text-gray-700">
                  <a href={product.href}>
                    <span aria-hidden="true" className="absolute inset-0" />
                    {product.name}
                  </a>
                </h3>
                <div className="flex">
                  <p className="text-sm font-medium text-gray-900 line-through mr-18">
                    {product.price}
                  </p>
                  <p className="text-sm font-medium text-red-600 ">
                    {product.newprice}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
