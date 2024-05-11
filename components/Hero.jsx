/**
 * v0 by Vercel.
 * @see https://v0.dev/t/ZyUXCbvxuws
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center py-2 md:py-16 lg:py-20 bg-[#DFEECB] rounded-b-lg shadow-bottom shadow-black-500/50">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="text-center md:text-left">
          <h2 className="text-4xl font-bold tracking-tight text-[#103535] sm:text-8xl md:text-10xl">
            BRINGING <br />
            <span className="text-[#30B255] inline">GOOD FOOD</span> <br />
            HOME
          </h2>
          {/* <div className="mt-10">
            <Link
              className="inline-flex items-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:bg-indigo-500 dark:hover:bg-indigo-600 dark:focus:ring-indigo-600"
              href="#"
            >
              Get Started
            </Link>
          </div> */}
        </div>
        <div className="flex justify-center items-center">
          <div className="w-1/1.7">
            <Image
              alt="Hero Image"
              className="mx-auto opacity-40"
              height={2000}
              src="/logo mark.png"
              style={{ aspectRatio: "2400/2000", objectFit: "contain" }}
              width={2400}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
