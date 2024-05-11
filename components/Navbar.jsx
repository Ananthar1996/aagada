/**
 * v0 by Vercel.
 * @see https://v0.dev/t/oXfWiRR3qQS
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
  return (
    <header className="flex items-center justify-center h-16 px-4 shrink-0 md:px-6 bg-green-700">
      <Link className="flex items-center justify-center" href="#">
        <Image src="/logo mark white.png" alt="logo" width={30} height={20} />
      </Link>
    </header>
  );
}
