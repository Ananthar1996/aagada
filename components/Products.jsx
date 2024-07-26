import Image from "next/image";

const products = [
  {
    id: 1,
    name: "URAD GOLA",
    href: "#",
    imageSrc: "/urad gola .png",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "MRP: 249",
    size: "1KG",
  },
  {
    id: 2,
    name: "URAD DAL",
    href: "#",
    imageSrc: "/urag dal.png",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "MRP: 259",
    size: "1KG",
  },
  {
    id: 3,
    name: "TOOR DAL",
    href: "#",
    imageSrc: "/toor dal.png",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "MRP: 319",
    size: "1KG",
  },
  {
    id: 4,
    name: "BACK EYED BEANS",
    href: "#",
    imageSrc: "/black.png",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "MRP: 179",
    size: "1KG",
  },
  {
    id: 5,
    name: "GREEN MOONG",
    href: "#",
    imageSrc: "/383 copy.png",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "MRP: 239",
    size: "1KG",
  },
  {
    id: 6,
    name: "TAMARIND",
    href: "#",
    imageSrc: "/tamarind 2.png",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "MRP: 75",
    size: "250 grms",
  },
];

export default function Products() {
  return (
    <section className="bg-[#F2F8EA] flex flex-col items-center justify-center p-4 sm:p-8 md:p-10">
      <h1 className="text-[#103535] text-xl sm:text-4xl lg:text-6xl pb-4 sm:pb-8">
        Our Products
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2">
        {/* row 1 */}
        {/* product 1 */}
        <div className="flex flex-row mb-4 gap-2 sm:gap-4">
          <Image
            src="/uradgola.jpg"
            alt="products"
            width={150}
            height={100}
            className="w-[9rem] h-[6rem] sm:w-[14rem] sm:h-[10rem]"
          />
          <div className="grid grid-cols-1 gap-2">
            <div className="w-[7rem] h-[3.5rem] sm:w-[10rem] sm:h-[6rem] bg-[#103535] rounded-tl-[2.5rem] rounded-br-[2.5rem] sm:rounded-tl-[3.4rem] sm:rounded-br-[3.4rem] flex items-center justify-center">
              <div className="text-[#F2F8EA] text-left px-2 sm:px-4 text-[10px] sm:text-lg">
                <h3>URAD GOLA</h3>
                {/* <h6>MRP: 249</h6> */}
              </div>
            </div>
            <div className="w-[7rem] h-[2rem] sm:w-[10rem] sm:h-[4rem] bg-[#103535] rounded-tr-[2.9rem] rounded-bl-[2.9rem] sm:rounded-tr-[2.9rem] sm:rounded-bl-[3.2rem] flex items-center justify-center text-[#F2F8EA] text-left px-2 sm:px-4 text-[10px] sm:text-sm">
              <h6>1Kg</h6>
            </div>
          </div>
        </div>

        {/* Product 2 */}
        <div className="flex flex-row-reverse sm:flex-row-reverse mb-4 ">
          <Image
            src="/uragdal.jpg"
            alt="products"
            width={150}
            height={100}
            className="w-[9rem] h-[6rem] sm:w-[14rem] sm:h-[10rem]"
          />
          <div className="grid grid-cols-1 gap-2">
            <div className="w-[7rem] h-[3.5rem] sm:w-[10rem] sm:h-[6rem] bg-[#103535] rounded-tl-[2.5rem] rounded-br-[2.5rem] sm:rounded-tr-[3.4rem] sm:rounded-bl-[3.4rem] sm:rounded-tl-none sm:rounded-br-none flex items-center justify-center">
              <div className="text-[#F2F8EA] text-left px-2 sm:px-4 text-[10px] sm:text-lg">
                <h3>URAD DAL</h3>
                {/* <h6>MRP: 259</h6> */}
              </div>
            </div>
            <div className="w-[7rem] h-[2rem] sm:w-[10rem] sm:h-[4rem] bg-[#103535] rounded-tr-[2.9rem] rounded-bl-[2.9rem] sm:rounded-tl-[2.9rem] sm:rounded-br-[3.2rem] sm:rounded-tr-none sm:rounded-bl-none flex items-center justify-center text-[#F2F8EA] text-left px-2 sm:px-4 text-[10px] sm:text-sm">
              <h6>1Kg</h6>
            </div>
          </div>
        </div>
        {/* row1 end */}

        {/* row 2 */}
        {/* product 3 */}
        <div className="flex flex-row mb-4 gap-2 sm:gap-4">
          <Image
            src="/toordal.jpg"
            alt="products"
            width={150}
            height={100}
            className="w-[9rem] h-[6rem] sm:w-[14rem] sm:h-[10rem]"
          />
          <div className="grid grid-cols-1 gap-2">
            <div className="w-[7rem] h-[3.5rem] sm:w-[10rem] sm:h-[6rem] bg-[#103535] rounded-tl-[2.5rem] rounded-br-[2.5rem] sm:rounded-tl-[3.4rem] sm:rounded-br-[3.4rem] flex items-center justify-center">
              <div className="text-[#F2F8EA] text-left px-2 sm:px-4 text-[10px] sm:text-lg">
                <h3>TOOR DAL</h3>
                <h6>MRP: 319</h6>
              </div>
            </div>
            <div className="w-[7rem] h-[2rem] sm:w-[10rem] sm:h-[4rem] bg-[#103535] rounded-tr-[2.9rem] rounded-bl-[2.9rem] sm:rounded-tr-[2.9rem] sm:rounded-bl-[3.2rem] flex items-center justify-center text-[#F2F8EA] text-left px-2 sm:px-4 text-[10px] sm:text-sm">
              <h6>1Kg</h6>
            </div>
          </div>
        </div>

        {/* Product 4 */}
        <div className="flex flex-row-reverse sm:flex-row-reverse mb-4 ">
          <Image
            src="/black.jpg"
            alt="products"
            width={150}
            height={100}
            className="w-[9rem] h-[6rem] sm:w-[14rem] sm:h-[10rem]"
          />
          <div className="grid grid-cols-1 gap-2">
            <div className="w-[7rem] h-[3.5rem] sm:w-[10rem] sm:h-[6rem] bg-[#103535] rounded-tl-[2.5rem] rounded-br-[2.5rem] sm:rounded-tr-[3.4rem] sm:rounded-bl-[3.4rem] sm:rounded-tl-none sm:rounded-br-none flex items-center justify-center">
              <div className="text-[#F2F8EA] text-center px-2 sm:px-4 text-[8px] sm:text-sm">
                <h3>BACK EYED BEANS</h3>
                {/* <h6>MRP: 179</h6> */}
              </div>
            </div>
            <div className="w-[7rem] h-[2rem] sm:w-[10rem] sm:h-[4rem] bg-[#103535] rounded-tr-[2.9rem] rounded-bl-[2.9rem] sm:rounded-tl-[2.9rem] sm:rounded-br-[3.2rem] sm:rounded-tr-none sm:rounded-bl-none flex items-center justify-center text-[#F2F8EA] text-left px-2 sm:px-4 text-[10px] sm:text-sm">
              <h6>1Kg</h6>
            </div>
          </div>
        </div>
        {/* row2 end */}

        {/* row 3 */}
        {/* product 5 */}
        <div className="flex flex-row mb-4 gap-2 sm:gap-4">
          <Image
            src="/greenmoong.jpg"
            alt="products"
            width={150}
            height={100}
            className="w-[9rem] h-[6rem] sm:w-[14rem] sm:h-[10rem]"
          />
          <div className="grid grid-cols-1 gap-2">
            <div className="w-[7rem] h-[3.5rem] sm:w-[10rem] sm:h-[6rem] bg-[#103535] rounded-tl-[2.5rem] rounded-br-[2.5rem] sm:rounded-tl-[3.4rem] sm:rounded-br-[3.4rem] flex items-center justify-center">
              <div className="text-[#F2F8EA] text-left px-2 sm:px-4 text-[10px] sm:text-[16px]">
                <h3>GREEN MOONG</h3>
                {/* <h6>MRP: 239</h6> */}
              </div>
            </div>
            <div className="w-[7rem] h-[2rem] sm:w-[10rem] sm:h-[4rem] bg-[#103535] rounded-tr-[2.9rem] rounded-bl-[2.9rem] sm:rounded-tr-[2.9rem] sm:rounded-bl-[3.2rem] flex items-center justify-center text-[#F2F8EA] text-left px-2 sm:px-4 text-[10px] sm:text-sm">
              <h6>1KG</h6>
            </div>
          </div>
        </div>

        {/* Product 6 */}
        <div className="flex flex-row-reverse sm:flex-row-reverse mb-4 ">
          <Image
            src="/tamarind 2.png"
            alt="products"
            width={150}
            height={100}
            className="w-[9rem] h-[6rem] sm:w-[14rem] sm:h-[10rem]"
          />
          <div className="grid grid-cols-1 gap-2">
            <div className="w-[7rem] h-[3.5rem] sm:w-[10rem] sm:h-[6rem] bg-[#103535] rounded-tl-[2.5rem] rounded-br-[2.5rem] sm:rounded-tr-[3.4rem] sm:rounded-bl-[3.4rem] sm:rounded-tl-none sm:rounded-br-none flex items-center justify-center">
              <div className="text-[#F2F8EA] text-center px-2 sm:px-4 text-[8px] sm:text-sm">
                <h3>TAMARIND</h3>
                {/* <h6>MRP: 75</h6> */}
              </div>
            </div>
            <div className="w-[7rem] h-[2rem] sm:w-[10rem] sm:h-[4rem] bg-[#103535] rounded-tr-[2.9rem] rounded-bl-[2.9rem] sm:rounded-tl-[2.9rem] sm:rounded-br-[3.2rem] sm:rounded-tr-none sm:rounded-bl-none flex items-center justify-center text-[#F2F8EA] text-left px-2 sm:px-4 text-[10px] sm:text-sm">
              <h6>250 grms</h6>
            </div>
          </div>
        </div>
        {/* row3 end */}
      </div>
    </section>
  );
}
