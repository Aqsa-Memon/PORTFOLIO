import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const About = () => {
  return (
    <div>
      <section id="about" className="py-16 bg-gradient-to-r from-black to-purple-400 h-screen">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-4xl font-bold text-center text-black underline">About Me</h2>
          <div className="mt-10 flex flex-col-reverse md:flex-row items-center md:items-start justify-between text-center md:text-left">
            
            {/* Text Section */}
            <div className="w-full md:pr-8 mt-12 md:mt-0 md:pl-8">
              <p className="text-lg text-white leading-relaxed">
                Hello! {`I'm`} <span className="font-semibold">Urooj Memon</span>, a dedicated web developer with a passion for creating sleek, modern, and responsive websites. With expertise in <span className="font-semibold">Next.js</span> and <span className="font-semibold">Tailwind CSS</span>, I strive to deliver user-centered experiences that not only look stunning but also function seamlessly across all devices. My journey in web development has equipped me with a strong foundation in <span className="font-semibold">TypeScript</span> and <span className="font-semibold">React</span>, along with backend knowledge in <span className="font-semibold">Node.js</span>.
                <br/><br/>
                When {`I’m`} not immersed in coding, {`you’ll`} find me indulging in my love for reading or exploring the latest web technologies.{`I’m`} continuously looking for opportunities to learn, grow, and take on exciting challenges to push my skills to the next level.
              </p>

              {/* Contact Button */}
              <Link 
                href="/contact" 
                className="mt-6 inline-block bg-purple-400 text-black py-2 px-6 rounded-lg shadow hover:bg-purple-600 transition duration-300"
              >
                Hire Me
              </Link>
            </div>

           
           <div className="relative group w-72 h-72 xl:w-96 xl:h-96 rounded-full overflow-hidden bg-gradient-to-r from-pink-500 to-red-500">
           <div className="w-full h-full rounded-full ">
           <Image 
           src="/mypic.png" 
           alt="Profile Picture" 
            className="object-cover object-center w-full h-full"  
           height={450}
           width={450}
           />
           </div>
           </div>




          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
