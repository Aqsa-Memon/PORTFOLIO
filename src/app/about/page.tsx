import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const About = () => {
  return (
    <div>
      <section
        id="about"
        className="py-12 md:py-16 bg-gradient-to-r from-black to-purple-400 min-h-screen flex items-center"
      >
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-black underline  animate-bounce animate-fadeIn">
            About Me
          </h2>

          <div className="mt-10 flex flex-col-reverse md:flex-row items-center md:items-start justify-between text-center md:text-left">
            {/* Text Section */}
            <div className="w-full md:w-1/1 md:pr-8 mt-8 md:mt-0 md:pl-8 animate-slideIn">
              <p className="text-base sm:text-lg md:text-xl text-white leading-relaxed">
                Hello! {`I’m`} Urooj Memon, a web developer and UI/UX designer with a passion for creating beautiful and functional websites. My journey in tech has equipped me with a strong foundation in modern frameworks like <span className="font-semibold">Next.js</span> and <span className="font-semibold">Tailwind CSS</span>. I believe in the power of thoughtful design to enhance user experiences, and {`I’m`} always eager to tackle new challenges. Let’s collaborate to build something amazing together!
              </p>

              {/* Contact Button */}
              <Link
                href="/contact"
                className="mt-6 inline-block bg-purple-400 text-black py-2 px-6 rounded-lg shadow-lg transform hover:scale-105 hover:bg-purple-600 transition duration-300 ease-in-out"
              >
                Hire Me
              </Link>
            </div>

            {/* Image Section */}
            <div className="w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 xl:w-72 xl:h-72 rounded-full overflow-hidden bg-gradient-to-r from-pink-500 to-red-500 mb-6 md:mb-0 animate-pulse">
              <Image
                src="/mypic.png"
                alt="Profile Picture"
                className="object-cover object-center w-full h-full transform hover:scale-105 transition duration-300 ease-in-out"
                height={450}
                width={450}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
