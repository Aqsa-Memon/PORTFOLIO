"use client";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from 'react-icons/fa';

export default function Contact() {
  return (
    <div className="bg-gradient-to-r from-black to-purple-400 py-10 px-4 min-h-screen flex flex-col items-center animate-fadeIn">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-black underline mb-8 animate-bounce">
        Contact Me
      </h2>
      <div className="bg-white p-6 sm:p-8 md:p-10 rounded-lg shadow-lg w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl animate-fadeIn">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-gray-800 text-center">Get in Touch</h2>
        <form className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            required
            className="w-full p-2 sm:p-3 border-b-2 border-gray-300 focus:outline-none focus:border-purple-500 transition duration-300 text-sm sm:text-base md:text-lg hover:bg-gray-100"
          />
          <input
            type="text"
            placeholder="Name"
            required
            className="w-full p-2 sm:p-3 border-b-2 border-gray-300 focus:outline-none focus:border-purple-500 transition duration-300 text-sm sm:text-base md:text-lg hover:bg-gray-100"
          />
          <textarea
            placeholder="Message"
            required
            className="w-full p-2 sm:p-3 border-b-2 border-gray-300 focus:outline-none focus:border-purple-500 transition duration-300 text-sm sm:text-base md:text-lg hover:bg-gray-100"
          ></textarea>
          <button
            type="submit"
            className="w-full py-2 sm:py-3 bg-purple-400 text-white rounded-lg hover:bg-purple-500 transition duration-300 transform hover:scale-105 text-sm sm:text-base md:text-lg"
          >
            Submit
          </button>
        </form>
        <p className="text-xs sm:text-sm md:text-base mt-4 text-black text-center">
          We ensure reliability for every form and email important to us.
        </p>
        <div className="flex justify-center space-x-4 mt-4">
          <FaFacebook className="text-lg sm:text-xl md:text-2xl text-black hover:text-blue-700 cursor-pointer transition duration-300 transform hover:scale-110" />
          <FaInstagram className="text-lg sm:text-xl md:text-2xl text-black hover:text-red-600 cursor-pointer transition duration-300 transform hover:scale-110" />
          <FaTwitter className="text-lg sm:text-xl md:text-2xl text-black hover:text-blue-700 cursor-pointer transition duration-300 transform hover:scale-110" />
          <FaLinkedin className="text-lg sm:text-xl md:text-2xl text-black hover:text-blue-700 cursor-pointer transition duration-300 transform hover:scale-110" />
        </div>
      </div>
    </div>
  );
}
