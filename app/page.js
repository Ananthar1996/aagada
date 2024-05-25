import Head from "next/head";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import Aboutus from "@/components/Aboutus";
import NavBar from "@/components/Navbar";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat&family=Syne:wght@400;700&display=swap"
          rel="stylesheet"
        />

        <title>Agada Foods</title>
      </Head>
      <div className="bg-[#DFEECB] font-montserrat">
        <div className="mx-auto max-w-5xl pt-4 sm:pt-8 md:pt-12 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 sm:gap-6 space-y-4">
            {/* <NavBar /> */}
            <div className="rounded-2xl shadow-lg overflow-hidden border border-[#103535]">
              <Hero />
            </div>
            <div className="rounded-2xl  shadow-lg border border-[#103535]">
              <Products />
            </div>
            <div className="rounded-2xl shadow-lg border border-[#103535]">
              <Aboutus />
            </div>
            <div className="rounded-2xl  shadow-lg border border-[#103535]">
              <Contact />
            </div>
            <div className="rounded-2xl  shadow-lg bg-[#103535]">
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
