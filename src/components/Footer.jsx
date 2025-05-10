import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h2 className="text-2xl font-bold text-blue-400">Shikho</h2>
          <p className="mt-2 text-sm">
            Start your learning journey with us. Anytime, anywhere, learn new
            skills.
          </p>
          <div className="flex space-x-4 mt-4">
            <FaFacebookF className="cursor-pointer hover:text-blue-500" />
            <FaTwitter className="cursor-pointer hover:text-blue-400" />
            <FaInstagram className="cursor-pointer hover:text-pink-500" />
            <FaYoutube className="cursor-pointer hover:text-red-500" />
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1 text-sm">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">All Courses</a>
            </li>
            <li>
              <a href="#">Categories</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">Categories</h3>
          <ul className="space-y-1 text-sm">
            <li>
              <a href="#">Web Development</a>
            </li>
            <li>
              <a href="#">Mobile App Development</a>
            </li>
            <li>
              <a href="#">Data Science</a>
            </li>
            <li>
              <a href="#">Programming Languages</a>
            </li>
            <li>
              <a href="#">Graphic Design</a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">Contact</h3>
          <div className="flex items-center space-x-2 text-sm">
            <MdEmail />
            <span>contact@shikho-online.com</span>
          </div>
          <div className="flex items-center space-x-2 text-sm mt-2">
            <MdPhone />
            <span>+880 1234-567890</span>
          </div>
        </div>
      </div>
      <div className="text-center text-sm mt-10 border-t border-gray-700 pt-4">
        © 2025 Shikho Online-Journey. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
