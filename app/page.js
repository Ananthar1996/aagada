import Hero from "@/components/Hero";
import Products from "@/components/Products";
import Aboutus from "@/components/Aboutus";
import NavBar from "@/components/Navbar";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <NavBar />
      <Hero />
      <Products />
      <Aboutus />
      <Contact />
      <Footer />
    </div>
  );
}
