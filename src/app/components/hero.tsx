"use client";
import Image from 'next/image';
import React from 'react';
import Typewriter from 'typewriter-effect';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from 'next/link';
import { RiNpmjsFill } from 'react-icons/ri';

const Hero = () => {
  return (
    <div className="relative h-screen flex items-center justify-center bg-gradient-to-r from-black to-purple-400 overflow-hidden">
      {/* Animated background circles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full bg-purple-500 opacity-20 animate-pulse"></div>
        <div className="absolute top-0 right-1/3 w-80 h-80 rounded-full bg-pink-500 opacity-25 animate-bounce delay-200"></div>
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 rounded-full bg-indigo-500 opacity-20 animate-pulse delay-500"></div>
      </div>

      <section className="relative z-10 text-white body-font">
        <div className="container mx-auto flex flex-col-reverse md:flex-row px-4 py-5 items-center">
          
          <div className="w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 xl:w-96 xl:h-96 rounded-full overflow-hidden mb-8 md:mb-0 relative transition-transform duration-300 transform hover:scale-105">
            <div className="absolute inset-0 rounded-full border-4 border-purple-300 shadow-lg hover:shadow-2xl transition-shadow duration-300"></div>
            <Image
              className="object-cover object-center rounded-full"
              alt="hero"
              src="/mypic.png"
              height={500}
              width={500}
              layout="responsive"
              priority
            />
          </div>

          <div className="lg:flex-grow md:w-1/2 lg:pl-12 md:pl-8 flex flex-col md:items-start md:text-left items-center text-center ">
            <h1 className="title-font text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 font-medium text-gray-900 ">
              Hello, {`I'm`} <br /> <span className="text-white">UROOJ MEMON</span>
              <br className="hidden lg:inline-block" /><br />
              <Typewriter
                options={{
                  strings: ['Web Developer', 'UI/UX Designer', 'Front-End Developer'],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
            <div className="w-24 sm:w-32 h-1 bg-black mb-4"></div>
            <p className="mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base md:text-lg lg:text-xl">
              {`I’m`} a web developer and designer dedicated to turning ideas into interactive, visually captivating, and fully responsive websites. My mission is to blend creativity with technical precision, building experiences that resonate, inspire, and stand out in a digital world. Let's work together to bring your vision into reality, one pixel at a time.
            </p>
            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
              <button className="inline-flex text-black bg-purple-300 border-0 py-2 px-4 sm:px-6 focus:outline-none hover:bg-purple-600 rounded text-base sm:text-lg transform transition-transform duration-300 hover:scale-105">
                Hire Me
              </button>
              <div className="flex gap-4 justify-center">
                <Link href="" className="text-white hover:text-black cursor-pointer text-lg sm:text-xl md:text-2xl transition-colors duration-300">
                  <FaGithub />
                </Link>
                <Link href="" className="text-gray-200 hover:text-blue-600 cursor-pointer text-lg sm:text-xl md:text-2xl transition-colors duration-300">
                  <FaLinkedin />
                </Link>
                <Link href="" className="text-gray-200 hover:text-red-600 cursor-pointer text-lg sm:text-xl md:text-2xl transition-colors duration-300">
                  <RiNpmjsFill />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
