/**
 * v0 by Vercel.
 * @see https://v0.dev/t/xYHqD5MkVkT
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link";
import Image from "next/image";
import mandy_logo from "../public/logo-300x300.webp";

export default function Nav() {
  return (
    <nav className='py-8 border-b border-border flex justify-between fixed inset-x-0 top-0 z-50 bg-white dark:bg-black text-black dark:text-white shadow-sm'>
      <div className='w-full max-w-7xl mx-auto px-4'>
        <div className='flex justify-between h-14 items-center'>
          <Link href='/' className='flex items-center' prefetch={false}>
            <Image
              className='max-w-[6rem] w-full'
              src={mandy_logo}
              alt="Mandy's logo with the cursive 'M', fountain pen, and dragon"
              width={200}
              height={200}
            />
          </Link>
          <nav className='hidden md:flex gap-4'>
            <Link
              href='/novels'
              className='font-medium flex items-center text-xl transition-colors hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black py-2 px-4 rounded-md'
              prefetch={false}
            >
              Novels
            </Link>
            <Link
              href='/posts'
              className='font-medium flex items-center text-xl transition-colors hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black py-2 px-4 rounded-md'
              prefetch={false}
            >
              Blog
            </Link>
            <Link
              href='/contact'
              className='font-medium flex items-center text-xl transition-colors hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black py-2 px-4 rounded-md'
              prefetch={false}
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </nav>
  );
}
