import Image from "next/image";

/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
const products = [
  {
    id: 1,
    name: "URAD GOLA",
    href: "#",
    imageSrc: "/uradgola.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "MRP: 249",
    color: "Black",
    size: "1KG",
  },
  {
    id: 2,
    name: "URAD DAL",
    href: "#",
    imageSrc: "/uragdal.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "MRP: 259",
    color: "Black",
    size: "1KG",
  },
  {
    id: 3,
    name: "TOOR DAL",
    href: "#",
    imageSrc: "/toordal.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "MRP: 319",
    color: "Black",
    size: "1KG",
  },
  {
    id: 4,
    name: "BACK EYED BEANS",
    href: "#",
    imageSrc: "/black.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "MRP: 179",
    color: "Black",
    size: "1KG",
  },
  {
    id: 5,
    name: "GREEN MOONG",
    href: "#",
    imageSrc: "/greenmoong.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "MRP: 239",
    color: "Black",
    size: "1KG",
  },
  {
    id: 6,
    name: "TAMARIND",
    href: "#",
    imageSrc: "/tamarind 2.png",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "MRP: 75",
    color: "Black",
    size: "250 grms",
  },
  // More products...
];

export default function Products() {
  return (
    <div className="bg-[#DFEECB] rounded-lg">
      <div className="mx-auto max-w-2xl px-4 py-5 sm:px-6 sm:py-12 lg:max-w-7xl lg:px-8">
        <h2 className="font-syne text-2xl font-bold tracking-tight  text-[#103535]">
          Our Products
        </h2>
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none lg:h-80">
                <Image
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  layout="responsive"
                  width={500}
                  height={500}
                  objectFit="contain"
                  className="h-full w-full object-center"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm  text-[#103535]">
                    <a href={product.href}>
                      <span
                        aria-hidden="true"
                        className="font-montserrat absolute inset-0"
                      />
                      <strong>{product.name}</strong>
                    </a>
                  </h3>
                </div>
                <p className="font-montserrat text-sm font-medium text-gray-900">
                  {product.price}
                </p>
                <p className="font-montserrat text-sm font-medium text-gray-900">
                  {product.size}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
