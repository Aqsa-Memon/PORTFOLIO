import Link from 'next/link';
import React from 'react';

function Header() {
  return (
    <div className='bg-purple-200'>
      <header className="text-black body-font">
        <div className="container mx-auto flex flex-wrap p-4 md:p-5 flex-col md:flex-row items-center justify-between">
          <h1 className="text-2xl sm:text-3xl font-semibold hover:text-purple-700 transition-colors duration-200">
            PORTFOLIO
          </h1>

          <nav className="mt-3 md:mt-0 flex flex-wrap items-center justify-center md:justify-start space-x-4 md:space-x-6">
            <Link className="text-sm sm:text-base hover:text-purple-700 transition-colors duration-200 underline" href='/'>
              HOME
            </Link>
            <Link className="text-sm sm:text-base hover:text-purple-700 transition-colors duration-200 underline" href='/about'>
              ABOUT
            </Link>
            <Link className="text-sm sm:text-base hover:text-purple-700 transition-colors duration-200 underline" href='/contact'>
              CONTACT
            </Link>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Header;
