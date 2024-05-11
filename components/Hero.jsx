/**
 * v0 by Vercel.
 * @see https://v0.dev/t/ZyUXCbvxuws
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center py-5 md:py-16 lg:py-20 bg-green-700">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="text-center md:text-left">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            Aagada Foods
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white dark:text-gray-400">
            Discover our permium farm to table products.
          </p>
          {/* <div className="mt-10">
            <Link
              className="inline-flex items-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:bg-indigo-500 dark:hover:bg-indigo-600 dark:focus:ring-indigo-600"
              href="#"
            >
              Get Started
            </Link>
          </div> */}
        </div>
        <div>
          <Image
            alt="Hero Image"
            className="rounded-lg shadow-lg"
            height={600}
            src="/c.png"
            style={{
              aspectRatio: "800/600",
              objectFit: "cover",
            }}
            width={800}
          />
        </div>
      </div>
    </section>
  );
}
