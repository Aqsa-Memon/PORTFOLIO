"use client";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaFax,
  FaEnvelope,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from 'react-icons/fa';

export default function Contact() {
  return (
    <div className="bg-gradient-to-r from-black to-purple-400 py-10 px-4 min-h-screen flex flex-col items-center">
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-black underline mb-8">Contact Me</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-12 w-full max-w-6xl">
        {/* Contact Info Cards */}
        <div className="bg-white p-5 rounded-lg shadow-lg text-center flex flex-col items-center">
          <FaMapMarkerAlt className="text-3xl text-black-500 hover:text-purple-500" />
          <h3 className="font-bold mt-2">Our Main Office</h3>
          <p className="text-sm sm:text-base">
            Office No. 15, Block B<br />City Center Mall<br />Clifton, Karachi<br />Pakistan
          </p>
        </div>
        <div className="bg-white p-5 rounded-lg shadow-lg text-center flex flex-col items-center">
          <FaPhone className="text-3xl text-black-500 hover:text-purple-500" />
          <h3 className="font-bold mt-2">Phone Number</h3>
          <p className="text-sm sm:text-base">(+92) 5678900<br />(+92) 4567891</p>
        </div>
        <div className="bg-white p-5 rounded-lg shadow-lg text-center flex flex-col items-center">
          <FaFax className="text-3xl text-black-500 hover:text-purple-500" />
          <h3 className="font-bold mt-2">Fax</h3>
          <p className="text-sm sm:text-base">+92-234567-8900</p>
        </div>
        <div className="bg-white p-5 rounded-lg shadow-lg text-center flex flex-col items-center">
          <FaEnvelope className="text-3xl text-black-500 hover:text-purple-500" />
          <h3 className="font-bold mt-2">Email</h3>
          <p className="text-sm sm:text-base">PORTFOLIO371@gmail.com</p>
        </div>
      </div>

      {/* Contact Form */}
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-4 text-gray-800 text-center">Get in Touch</h2>
        <form className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            required
            className="w-full p-2 border-b-2 border-gray-300 focus:outline-none focus:border-purple-500 transition duration-300"
          />
          <input
            type="text"
            placeholder="Name"
            required
            className="w-full p-2 border-b-2 border-gray-300 focus:outline-none focus:border-purple-500 transition duration-300"
          />
          <textarea
            placeholder="Message"
            required
            className="w-full p-2 border-b-2 border-gray-300 focus:outline-none focus:border-purple-500 transition duration-300"
          ></textarea>
          <button
            type="submit"
            className="w-full py-2 bg-purple-400 text-white rounded-lg hover:bg-purple-500 transition duration-300"
          >
            Submit
          </button>
        </form>
        <p className="text-sm mt-4 text-black text-center">
          We ensure reliability for every form and email important to us.
        </p>
        <div className="flex justify-center space-x-4 mt-4">
          <FaFacebook className="text-xl text-black hover:text-blue-700 cursor-pointer transition duration-300" />
          <FaInstagram className="text-xl text-black hover:text-red-600 cursor-pointer transition duration-300" />
          <FaTwitter className="text-xl text-black hover:text-blue-700 cursor-pointer transition duration-300" />
          <FaLinkedin className="text-xl text-black hover:text-blue-700 cursor-pointer transition duration-300" />
        </div>
      </div>
    </div>
  );
}
