/**
 * v0 by Vercel.
 * @see https://v0.dev/t/oXfWiRR3qQS
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
  return (
    <header className="flex mt-4 sm:pt-4 px-4 sm:px-10 bg-[#F2F8EA]">
      <div className="mr-auto">
        <div className="w-20 sm:w-44 md:w-60 lg:w-90">
          <Image
            src="/horizontal.png"
            alt="logo"
            layout="responsive"
            width={100}
            height={20}
          />
        </div>
      </div>
      {/* Add any additional content or navigation items */}
    </header>
  );
}
