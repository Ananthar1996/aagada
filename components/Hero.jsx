/**
 * v0 by Vercel.
 * @see https://v0.dev/t/ZyUXCbvxuws
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Image from "next/image";
import NavBar from "./Navbar";

export default function Hero() {
  return (
    <section className="py-2 md:py-10 lg:py-12 bg-[#F2F8EA] rounded-lg shadow-bottom shadow-black-500/50">
      <div className=" px-4 sm:px-6">
        <NavBar />
      </div>
      <div className="flex flex-col items-center justify-start">
        <div className="container px-4 grid grid-cols-1 md:grid-cols-2 gap-2 items-center">
          <div className="pt-4 sm:pt-6 text-left md:text-left">
            <h2 className="font-syne text-xl sm:text-5xl tracking-tight text-[#103535]">
              BRINGING <br />
              <span className="text-[#30B255]">GOOD FOOD</span> <br />
              HOME
            </h2>
          </div>
          <div className="flex justify-center items-center">
            <div className="sm:w-1/1 w-1/1.8">
              <Image
                alt="Hero Image"
                className="mx-auto opacity-40"
                height={2400}
                src="/logo mark.png"
                style={{ aspectRatio: "2800/2400", objectFit: "contain" }}
                width={2800}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
