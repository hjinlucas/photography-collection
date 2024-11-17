"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex w-full overflow-hidden pt-10 pb-1">
      <nav className="w-full">
        <div className="container mx-auto flex flex-wrap items-center md:flex-no-wrap">
          <div className="mr-4 md:mr-8">
            <Link href="/">
              <span className="text-2xl font-signika font-bold">LUCAS JIN</span>
            </Link>
          </div>
          <div className="ml-auto md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="tap-highlight-transparent text-black dark:text-white w-5 h-5 relative focus:outline-none"
            >
              {/* ... (hamburger icon) */}
            </button>
          </div>
          <div
            className={`w-full transition-all ease-out duration-500 md:transition-none md:w-auto md:flex-grow md:flex md:items-center ${
              isOpen ? "h-32" : "h-0"
            }`}
          >
            <ul className="flex flex-col duration-300 ease-out md:space-x-5 sm:transition-none mt-5 md:flex-row md:items-center md:ml-auto md:mt-0 md:pt-0 md:border-0">
              <li className="group transition duration-300">
                <Link href="/">
                  <span className="font-signika text-2xl tap-highlight-transparent">
                    COLLECTION
                    <span className="hidden md:block h-0.5 bg-black dark:bg-white"></span>
                  </span>
                </Link>
              </li>
              {/* ... (other menu items) */}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
