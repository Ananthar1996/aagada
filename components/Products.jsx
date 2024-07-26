import Image from "next/image";

const products = [
  {
    id: 1,
    name: "URAD GOLA",
    href: "#",
    imageSrc: "/urad gola .png",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "MRP: 249",
    size: "1KG",
  },
  {
    id: 2,
    name: "URAD DAL",
    href: "#",
    imageSrc: "/urag dal.png",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "MRP: 259",
    size: "1KG",
  },
  {
    id: 3,
    name: "TOOR DAL",
    href: "#",
    imageSrc: "/toor dal.png",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "MRP: 319",
    size: "1KG",
  },
  {
    id: 4,
    name: "BACK EYED BEANS",
    href: "#",
    imageSrc: "/black.png",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "MRP: 179",
    size: "1KG",
  },
  {
    id: 5,
    name: "GREEN MOONG",
    href: "#",
    imageSrc: "/383 copy.png",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "MRP: 239",
    size: "1KG",
  },
  {
    id: 6,
    name: "TAMARIND",
    href: "#",
    imageSrc: "/tamarind 2.png",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "MRP: 75",
    size: "250 grms",
  },
];

export default function Products() {
  return (
    <section className="bg-[#F2F8EA] flex flex-col items-center justify-center p-4 sm:p-8 md:p-10">
      <h1 className="text-[#103535] text-xl sm:text-4xl lg:text-6xl pb-2">
        Our Products
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
        {products.map((product, index) => (
          <div
            key={product.id}
            className={`flex flex-row items-center ${
              index % 2 === 1 ? "flex-row-reverse" : ""
            } mb-4`}
          >
            <div className="flex-shrink-0 w-32 sm:w-48">
              <Image
                src={product.imageSrc}
                alt={product.imageAlt}
                width={200}
                height={200}
                layout="responsive"
                objectFit="contain"
              />
            </div>
            <div className="grid grid-cols-1 gap-2 -ml-6 sm:-ml-8">
              <div
                className={`w-[9rem] h-[3.5rem] sm:w-[12rem] sm:h-[6rem] bg-[#103535] ${
                  index % 2 === 0
                    ? "rounded-tl-[2.5rem] rounded-br-[2.5rem] sm:rounded-tl-[3.4rem] sm:rounded-br-[3.4rem]"
                    : "rounded-tr-[2.5rem] rounded-bl-[2.5rem] sm:rounded-tr-[3.4rem] sm:rounded-bl-[3.4rem]"
                } flex items-center justify-center`}
              >
                <div className="text-[#F2F8EA] text-left px-2 sm:px-4 text-[10px] sm:text-lg">
                  <h3 className="font-semibold">{product.name}</h3>
                  {/* <h6>{product.price}</h6> */}
                </div>
              </div>
              <div
                className={`w-[9rem] h-[2rem] sm:w-[12rem] sm:h-[4rem] bg-[#103535] ${
                  index % 2 === 0
                    ? "rounded-tr-[2.9rem] rounded-bl-[2.9rem] sm:rounded-tr-[2.9rem] sm:rounded-bl-[3.2rem]"
                    : "rounded-tl-[2.9rem] rounded-br-[2.9rem] sm:rounded-tl-[2.9rem] sm:rounded-br-[3.2rem]"
                } flex items-center justify-center text-[#F2F8EA] text-left px-2 sm:px-4 text-[10px] sm:text-sm`}
              >
                <h6>{product.size}</h6>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
