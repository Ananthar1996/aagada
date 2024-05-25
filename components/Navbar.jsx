/**
 * v0 by Vercel.
 * @see https://v0.dev/t/oXfWiRR3qQS
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
  return (
    <header className="bg-[#F2F8EA] flex">
      <div className="flex-none">
        <div className="w-[7rem] sm:w-[20rem] md:w-48 lg:w-60">
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
