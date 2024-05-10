/**
 * v0 by Vercel.
 * @see https://v0.dev/t/Y1FNx55627Y
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link";

export default function Aboutus() {
  return (
    <>
      <section className="w-full py-12 bg-gray-100 dark:bg-gray-800">
        <div className="container px-4">
          <div className="flex flex-col items-center gap-6">
            <img
              alt="About Us"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
              height="310"
              src="/placeholder.svg"
              width="550"
            />
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2 text-center">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  About us
                </h1>
                <p className="text-gray-500 dark:text-gray-400">
                  We are a team of passionate ecommerce enthusiasts dedicated to
                  providing the best shopping experience for our customers.
                </p>
                <div className="flex justify-center">
                  <Link
                    className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                    href="#"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12">
        <div className="container px-4">
          <div className="space-y-8">
            <div className="space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Our Story
              </h2>
              <p className="text-gray-500 dark:text-gray-400">
                Our store was founded in 2022 with the goal of making online
                shopping more accessible and enjoyable for everyone. We started
                with a small selection of products and have since grown into a
                thriving business with a wide range of offerings.
              </p>
            </div>
            <div className="space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Our Values
              </h2>
              <p className="text-gray-500 dark:text-gray-400">
                At the heart of our business are the values of customer
                satisfaction, quality, and sustainability. We strive to provide
                exceptional service, high-quality products, and environmentally
                friendly solutions to our customers.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
