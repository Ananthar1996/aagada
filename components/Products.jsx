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
    imageSrc: "/urad gola.png",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "MRP: 220",
    color: "Black",
    size: "1KG",
  },
  {
    id: 2,
    name: "URAD DAL",
    href: "#",
    imageSrc: "/urad gola.png",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "MRP: 225",
    color: "Black",
    size: "1KG",
  },
  {
    id: 3,
    name: "TOOR DAL",
    href: "#",
    imageSrc: "/toor dal.png",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "MRP: 279",
    color: "Black",
    size: "1KG",
  },
  {
    id: 4,
    name: "BACK EYED BEANS",
    href: "#",
    imageSrc: "/black eyed beans-2.png",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "MRP: 160",
    color: "Black",
    size: "1KG",
  },
  {
    id: 5,
    name: "GREEN MOONG",
    href: "#",
    imageSrc: "/moong dal.png",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "MRP: 210",
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
    size: "1KG",
  },
  // More products...
];

export default function Products() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Customers also purchased
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
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
                  <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">
                  {product.price}
                </p>
                <p className="text-sm font-medium text-gray-900">
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
