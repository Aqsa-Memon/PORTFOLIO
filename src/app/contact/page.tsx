"use client";
import { FaMapMarkerAlt, FaPhone, FaFax, FaEnvelope, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Contact() {
  return (
         <div className="bg-red-200 p-10 min-h-screen flex flex-col items-center">
          <h2 className="text-4xl font-bold text-center text-black underline">Contact Me</h2> <br />

       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-5 rounded-lg shadow-lg text-center">
          <FaMapMarkerAlt className="text-3xl mx-auto text-red-500" />
          <h3 className="font-bold mt-2">Our Main Office</h3>
          <p>Office No. 15, Block B<br />City Center Mall
         Clifton, Karachi
         Pakistan</p>
        </div>
        <div className="bg-white p-5 rounded-lg shadow-lg text-center">
          <FaPhone className="text-3xl mx-auto text-red-500" />
          <h3 className="font-bold mt-2">Phone Number</h3>
          <p>(+92) 5678900<br />(+92) 4567891</p>
        </div>
        <div className="bg-white p-5 rounded-lg shadow-lg text-center">
          <FaFax className="text-3xl mx-auto text-red-500" />
          <h3 className="font-bold mt-2">Fax</h3>
          <p>+92-234567-8900</p>
        </div>
        <div className="bg-white p-5 rounded-lg shadow-lg text-center">
          <FaEnvelope className="text-3xl mx-auto text-red-500" />
          <h3 className="font-bold mt-2">Email</h3>
          <p>PORTFOLIO371@gmail.com</p>
        </div>
       </div>

       <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-gray-800 text-center">Get in Touch</h2>
        <form className="space-y-4">
          <input type="email" placeholder="Email" required className="w-full p-2 border-b-2 focus:outline-none" />
          <input type="text" placeholder="Name" required className="w-full p-2 border-b-2 focus:outline-none" />
          <textarea placeholder="Message" required className="w-full p-2 border-b-2 focus:outline-none" ></textarea>
          <button type="submit" className="w-full py-2 bg-red-400 text-white rounded-lg hover:bg-red-500">Submit</button>
        </form>
        <p className="text-sm mt-4 text-black text-center">
          We ensure reliability for every form and email important to us.
        </p>
        <div className="flex justify-center space-x-4 mt-4">
          <FaFacebook className="text-xl text-black hover:text-blue-700 cursor-pointer" />
          <FaInstagram className="text-xl text-black hover:text-red-600 cursor-pointer" />
          <FaTwitter className="text-xl text-black hover:text-blue-700 cursor-pointer" />
          <FaLinkedin className="text-xl text-black hover:text-blue-700 cursor-pointer" />
        </div>
      </div>
    </div>
  );
}
