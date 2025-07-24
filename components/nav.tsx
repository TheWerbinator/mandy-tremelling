"use client";

import Link from "next/link";
import Image from "next/image";
import mandy_logo from "../public/logo.webp";
import { useState } from "react";

const ButtonGroup = ({
  handleSetMenu,
}: {
  handleSetMenu: (hideState: string) => void;
}) => {
  return (
    <>
      <Link
        href='/novels'
        className='font-medium flex items-center text-xl transition-colors hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black md:dark:hover:text-white md:dark:hover:bg-black md:dark:text-black lg:dark:text-white py-2 px-4 rounded-md'
        prefetch={false}
        onClick={() => handleSetMenu("hidden")}
      >
        Novels
      </Link>
      <Link
        href='/posts'
        className='font-medium flex items-center text-xl transition-colors hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black md:dark:hover:text-white md:dark:hover:bg-black dark:text-black lg:dark:text-white py-2 px-4 rounded-md'
        prefetch={false}
        onClick={() => handleSetMenu("hidden")}
      >
        Blog
      </Link>
      <Link
        href='/contact'
        className='font-medium flex items-center text-xl transition-colors hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black md:dark:hover:text-white md:dark:hover:bg-black md:dark:text-black lg:dark:text-white py-2 px-4 rounded-md'
        prefetch={false}
        onClick={() => handleSetMenu("hidden")}
      >
        Contact
      </Link>
    </>
  );
};

export default function Nav() {
  const [hideMenu, setHideMenu] = useState("hidden");

  const handleSetMenu = (newKeywords: string) => {
    setHideMenu(newKeywords);
  };
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
            <div id='desktop-nav' className='flex gap-4 items-center'>
              <div className='flex gap-2'>
                <ButtonGroup handleSetMenu={handleSetMenu} />
              </div>
            </div>
            <div id='mobile-nav' className={`relative ${hideMenu}`}>
              <div id='menuToggle' className='text-sm relative top-2 right-2'>
                <input type='checkbox' id='menuCheckbox' />

                <span className='bg-black dark:bg-white'></span>
                <span className='bg-black dark:bg-white'></span>
                <span className='bg-black dark:bg-white'></span>

                <div
                  id='menu'
                  className='absolute flex flex-col md:flex-row gap-2 top-[3rem] right-2 justify-evenly bg-white p-1 rounded-lg w-fit opacity-0'
                >
                  <ButtonGroup handleSetMenu={handleSetMenu} />
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </nav>
  );
}
