/**
 * v0 by Vercel.
 * @see https://v0.dev/t/Y1FNx55627Y
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link";

export default function Aboutus() {
  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
        <div className="container px-4 md:px-6">
          <div className="grid items-center gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  About us
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  We are a team of passionate ecommerce enthusiasts dedicated to
                  providing the best shopping experience for our customers.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                    href="#"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
            <img
              alt="About Us"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              height="310"
              src="/placeholder.svg"
              width="550"
            />
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="space-y-8">
            <div className="space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Our Story
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Our store was founded in 2022 with the goal of making online
                shopping more accessible and enjoyable for everyone. We started
                with a small selection of products and have since grown into a
                thriving business with a wide range of offerings.
              </p>
            </div>
            <div className="space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Our Values
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                At the heart of our business are the values of customer
                satisfaction, quality, and sustainability. We strive to provide
                exceptional service, high-quality products, and environmentally
                friendly solutions to our customers.
              </p>
            </div>
            {/* TEAM
            <div className="space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Meet Our Team
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Our team is made up of passionate individuals with diverse
                backgrounds and expertise. Together, we work tirelessly to
                deliver the best possible experience for our customers.
              </p>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                <div className="space-y-2 text-center">
                  <img
                    alt="Team Member"
                    className="mx-auto h-30 w-30 rounded-full object-cover"
                    height="120"
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "120/120",
                      objectFit: "cover",
                    }}
                    width="120"
                  />
                  <div className="space-y-1">
                    <h3 className="text-lg font-semibold">John Doe</h3>
                    <p className="text-gray-500 dark:text-gray-400">CEO</p>
                  </div>
                </div>
                <div className="space-y-2 text-center">
                  <img
                    alt="Team Member"
                    className="mx-auto h-30 w-30 rounded-full object-cover"
                    height="120"
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "120/120",
                      objectFit: "cover",
                    }}
                    width="120"
                  />
                  <div className="space-y-1">
                    <h3 className="text-lg font-semibold">Jane Smith</h3>
                    <p className="text-gray-500 dark:text-gray-400">COO</p>
                  </div>
                </div>
                <div className="space-y-2 text-center">
                  <img
                    alt="Team Member"
                    className="mx-auto h-30 w-30 rounded-full object-cover"
                    height="120"
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "120/120",
                      objectFit: "cover",
                    }}
                    width="120"
                  />
                  <div className="space-y-1">
                    <h3 className="text-lg font-semibold">Michael Johnson</h3>
                    <p className="text-gray-500 dark:text-gray-400">CTO</p>
                  </div>
                </div>
                <div className="space-y-2 text-center">
                  <img
                    alt="Team Member"
                    className="mx-auto h-30 w-30 rounded-full object-cover"
                    height="120"
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "120/120",
                      objectFit: "cover",
                    }}
                    width="120"
                  />
                  <div className="space-y-1">
                    <h3 className="text-lg font-semibold">Emily Davis</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Head of Marketing
                    </p>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
}
