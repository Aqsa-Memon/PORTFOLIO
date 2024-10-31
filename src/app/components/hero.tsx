"use client";
import Image from 'next/image';
import React from 'react';
import Typewriter from 'typewriter-effect';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from 'react-icons/fa';
import Link from 'next/link';
import { RiNpmjsFill } from 'react-icons/ri';

const Hero = () => {
  return (
    <div className='bg-gradient-to-r from-black to-purple-400 h-screen flex items-center justify-center'>
      <section className="text-white body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
 
        <div className="w-72 h-72 xl:w-96 xl:h-96 rounded-full overflow-hidden ">
         <Image
         className="object-cover object-center rounded"
         alt="hero"
         src="/mypic.png"
          height={500}
         width={500}
         />
        </div> 

          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Hello, {`I'm`} <br /> <span className='text-white'>UROOJ MEMON</span>
              <br className="hidden lg:inline-block" />
              <Typewriter
                options={{
                  strings: ['Web Developer', 'UI/UX Designer','Front-End Developer'],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
            <div className='w-[150px] h-[2px] bg-black mb-4'></div>
            <p className="mb-8 leading-relaxed">
              {`I’m`} a web developer and designer dedicated to turning ideas into interactive, visually captivating, and fully responsive websites. My mission is to blend creativity with technical precision, building experiences that resonate, inspire, and stand out in a digital world. Lets work together to bring your vision into reality, one pixel at a time.
            </p>
            <div className="flex flex-col items-center space-y-4">
              <button className="inline-flex text-black bg-purple-300 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded text-lg">
                Hire Me
              </button>
              <div className="flex gap-6 justify-center">
                <Link href={""} className="text-black-500 hover:text-black cursor-pointer text-lg md:text-xl lg:text-2xl">
                  <FaGithub />
                </Link>
                <Link href={""} className="text-black-600 hover:text-blue-600 cursor-pointer text-lg md:text-xl lg:text-2xl">
                  <FaLinkedin />
                </Link>
                <Link href={""} className="text-black-500 hover:text-red-600 cursor-pointer text-lg md:text-xl lg:text-2xl">
                  <RiNpmjsFill />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Hero;