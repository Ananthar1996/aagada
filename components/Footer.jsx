import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className="bg-green-950 p-6 md:py-12 max-w-7xl rounded-t-lg sm:w-[85vh]">
        <div className="container  flex flex-col items-center gap-8 text-sm ">
          <div className="flex flex-col items-center gap-2">
            <Link className="flex items-center sm:items-start" href="#">
              <Image
                src="/horizontal.png"
                alt="logo"
                width={100}
                height={500}
              />
            </Link>
            <div className="text-start">
              <p className="font-montserrat text-white text-[0.5rem] sm:text-base -ml-12 sm:-ml-5">
                {" "}
                Company details: <br />
                AGADA FOODS PVT LTD <br />
                NO.59, LAVANYA TOWERS, 4th MAIN ROAD,
                <br />
                18th CROSS, MALLESHWARAM,
                <br />
                BBMP NORTH, BENGALURU, KARNATAKA - 560055
                <br />
                FSSAI no: 11223999000834
              </p>
            </div>
            <div className="font-montserrat text-gray-500 text-[0.5rem] sm:text-base">
              © 2023 AgadaFoods Private Limited All rights reserved.
            </div>
          </div>
          {/* <nav className="flex gap-4 sm:gap-6">
            <Link
              className="text-xs hover:underline underline-offset-4"
              href="#"
            >
              Terms of Service
            </Link>
            <Link
              className="text-xs hover:underline underline-offset-4"
              href="#"
            >
              Privacy
            </Link>
            <Link
              className="text-xs hover:underline underline-offset-4"
              href="#"
            >
              Contact
            </Link>
          </nav> */}
        </div>
      </footer>
    </>
  );
}
