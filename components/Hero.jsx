import Image from "next/image";

export default function Hero() {
  return (
    <div className="bg-white rounded-lg">
      <div className="mx-auto max-w-7xl py-1 sm:px-6 sm:py-32 lg:px-8">
        <div className="relative isolate overflow-hidden bg-green-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0 rounded-lg">
          <svg
            viewBox="0 0 1024 1024"
            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
            aria-hidden="true"
          >
            <circle
              cx={512}
              cy={512}
              r={512}
              fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
              fillOpacity="0.7"
            />
            <defs>
              <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                <stop stopColor="#7775D6" />
                <stop offset={1} stopColor="#E935C1" />
              </radialGradient>
            </defs>
          </svg>
          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Agada Foods
              <br />
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Welcome to Aagada your premier online destination for high-quality
              lentils sourced from the finest farms around the world. As
              passionate advocates for healthy and sustainable living, we are
              dedicated to providing you with a diverse selection of lentils
              that are nutrient-rich, flavorful, and perfect for a wide range of
              culinary applications.
            </p>
            {/* <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
              <a
                href="#"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Get started
              </a>
              <a
                href="#"
                className="text-sm font-semibold leading-6 text-white"
              >
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div> */}
          </div>
          {/* <div className="relative mt-16 h-80 lg:mt-8">
            <Image
              className="absolute left-0 top-0 w-[34rem] max-w-none rounded-md"
              src="/moong dal.png"
              alt="App screenshot"
              width={500}
              height={500}
            />
          </div> */}
        </div>
      </div>
    </div>
  );
}
