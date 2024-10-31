import Link from 'next/link';
import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { RiNpmjsFill } from 'react-icons/ri';

function Footer() {
  return (
    <div className='bg-purple-300'>
      <footer className="text-black-400 body-font">
        <div className="container px-5 py-6 md:py-8 mx-auto flex flex-col sm:flex-row items-center justify-between">
          
          <a className="flex title-font font-medium items-center justify-center sm:justify-start text-white">
            <span className="ml-3 text-lg sm:text-xl">PORTFOLIO</span>
          </a>
          
          <p className="text-xs sm:text-sm text-white mt-4 sm:mt-0 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 text-center sm:text-left">
            © 2024 PORTFOLIO — <a className="text-white ml-1">@uroojmemon</a>
          </p>
          
          <div className="flex gap-4 sm:gap-6 mt-4 sm:mt-0 justify-center sm:justify-start">
            <Link href="" className="text-black-500 hover:text-gray-700 transition-colors duration-200 text-lg sm:text-xl">
              <FaGithub />
            </Link>
            <Link href="" className="text-black-500 hover:text-blue-600 transition-colors duration-200 text-lg sm:text-xl">
              <FaLinkedin />
            </Link>
            <Link href="" className="text-black-500 hover:text-red-600 transition-colors duration-200 text-lg sm:text-xl">
              <RiNpmjsFill />
            </Link>
          </div>
          
        </div>
      </footer>
    </div>
  );
}

export default Footer;
