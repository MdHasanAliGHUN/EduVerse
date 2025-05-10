import React from "react";
import aboutImg from "../../assets/Banner2.jpg";

const About = () => {
  return (
    <div className="container max-w-7xl mx-auto px-6 py-12 mt-20 space-y-20">
      {/* Section 1: Hero */}
      <div className="flex flex-col lg:flex-row items-center gap-10">
        <div className="flex-1">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">About Us</h2>
          <p className="text-gray-600 text-lg">
            We’re passionate about building high-quality, scalable web
            experiences. Our team is dedicated to helping you succeed in your learning journey.
          </p>
        </div>
        <div className="flex-1">
          <img
            src={aboutImg}
            alt="About illustration"
            className="w-full rounded-xl shadow-md"
          />
        </div>
      </div>

      {/* Section 2: Mission & Vision */}
      <div className="bg-gray-100 rounded-xl p-10 text-center">
        <h3 className="text-3xl font-semibold mb-4 text-gray-800">Our Mission & Vision</h3>
        <p className="text-gray-700 text-lg max-w-3xl mx-auto">
          Our mission is to empower students and developers with real-world skills in web development. 
          We envision a world where anyone, regardless of background, can build impactful tech solutions.
        </p>
      </div>

      {/* Section 3: Why Choose Us */}
      <div className="text-center">
        <h3 className="text-3xl font-semibold mb-8 text-gray-800">Why Choose Us</h3>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-white shadow-md rounded-lg">
            <h4 className="text-xl font-bold mb-2">Expert Instructors</h4>
            <p className="text-gray-600">Learn from experienced developers who’ve worked on real-world projects.</p>
          </div>
          <div className="p-6 bg-white shadow-md rounded-lg">
            <h4 className="text-xl font-bold mb-2">Hands-On Projects</h4>
            <p className="text-gray-600">Build real applications to strengthen your portfolio and confidence.</p>
          </div>
          <div className="p-6 bg-white shadow-md rounded-lg">
            <h4 className="text-xl font-bold mb-2">Community Support</h4>
            <p className="text-gray-600">Join a supportive community of learners and developers.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
