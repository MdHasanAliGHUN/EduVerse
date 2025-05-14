import React from "react";
import { NavLink } from "react-router"; // ✅ react-router-dom ঠিক করলাম
import Banner3 from "../../assets/Banner3.jpg";

const Banner = () => {
  return (
    <div className="bg-gray-500/5 py-30">
      <div className="container max-w-7xl mx-auto px-6 flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        {/* Left Text Content */}
        <div className="max-w-xl space-y-5 text-center md:text-left">
          <h1 className="sm:text-2xl md:text-2xl lg:text-3xl font-bold leading-snug">
            আপনার ক্যারিয়ার উন্নত করুন আমাদের অনলাইন কোর্স দিয়ে,
          </h1>
          <p className="text-gray-600">
            Enjoy the best online courses led by expert instructors and enriched
            with an engaging and fulfilling learning experience. Boost your
            skills, unlock new opportunities, and join thousands of satisfied
            students today!
          </p>
          <div className="flex items-center justify-center md:justify-start gap-4 mt-10">
            <NavLink
              className="w-40 text-center bg-sky-700 px-5 py-2 rounded-md text-white hover:bg-sky-600"
              to="/courses"
            >
              View All Courses
            </NavLink>
            <NavLink
              className="w-40 text-center bg-white px-5 py-2 rounded-md text-black border border-gray-300 hover:bg-gray-100"
              to="/courses"
            >
              Contact Us
            </NavLink>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl h-auto object-contain"
            src={Banner3}
            alt="Banner"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
