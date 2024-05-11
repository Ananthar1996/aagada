import Hero from "@/components/Hero";
import Products from "@/components/Products";
import Aboutus from "@/components/Aboutus";
import NavBar from "@/components/Navbar";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="bg-[#DFEECB]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-8">
          <NavBar />

          <div className="rounded-lg shadow-lg p-6">
            <Hero />
          </div>
          <div className="rounded-lg shadow-lg p-6">
            <Products />
          </div>
          <div className="rounded-lg shadow-lg p-6">
            <Aboutus />
          </div>
          <div className="rounded-lg shadow-lg p-6">
            <Contact />
          </div>
          <div className="rounded-lg shadow-lg">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
