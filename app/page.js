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
      </Head>
      <div className="bg-[#F2F8EA] font-montserrat">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 sm:gap-6 space-y-4">
            <NavBar />
            <div className="rounded-lg shadow-lg">
              <Hero />
            </div>
            <div className="rounded-lg shadow-lg">
              <Products />
            </div>
            <div className="rounded-lg shadow-lg">
              <Aboutus />
            </div>
            <div className="rounded-lg shadow-lg">
              <Contact />
            </div>
            <div className="rounded-lg shadow-lg">
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
