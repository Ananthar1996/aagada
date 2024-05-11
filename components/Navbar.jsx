/**
 * v0 by Vercel.
 * @see https://v0.dev/t/oXfWiRR3qQS
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
  return (
    <header className="flex items-center h-16 sm:pt-4 px-4 shrink-0 sm:px-10 bg-[#DFEECB]">
      <div className="relative w-20 sm:w-44 md:w-60 lg:w-90">
        <Image
          src="/horizontal dark.png"
          alt="logo"
          layout="responsive"
          width={100}
          height={20}
        />
      </div>
    </header>
  );
}
