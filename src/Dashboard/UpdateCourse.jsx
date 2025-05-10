import React from "react";
import AddCourseType from "./AddCourse/AddCourseType";
import AddCourseLevel from "./AddCourse/AddCourseLevel";

const UpdateCourse = () => {
  return (
    <div className="mx-5">
      <div className="max-w-7xl container mx-auto px-8 py-10 bg-white shadow-lg rounded-xl  my-30">
        <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">
          Update Course
        </h2>

        <form className="space-y-6">
          {/* Course Title */}
          <div>
            <label className="block text-sm font-semibold text-gray-700">
              Course Title
            </label>
            <input
              type="text"
              placeholder="Mastering Express.js for Full-Stack Development"
              className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          {/* Type & Level */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <AddCourseType />
            </div>
            <div>
              <AddCourseLevel />
            </div>
          </div>

          {/* Instructor, Duration, Reviews */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700">
                Instructor
              </label>
              <input
                type="text"
                placeholder="Emily Zhang"
                className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700">
                Duration (hours)
              </label>
              <input
                type="number"
                placeholder="20"
                className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-semibold text-gray-700">
              Short Description
            </label>
            <textarea
              rows="3"
              placeholder="Learn how to build scalable backend applications using Express.js and integrate them with MongoDB."
              className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
            ></textarea>
          </div>

          {/* About Course */}
          <div>
            <label className="block text-sm font-semibold text-gray-700">
              About Course
            </label>
            <textarea
              rows="4"
              placeholder="This course teaches you the fundamentals..."
              className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
            ></textarea>
          </div>

          {/* What You Will Learn */}
          <div>
            <label className="block text-sm font-semibold text-gray-700">
              What You Will Learn (comma separated)
            </label>
            <input
              type="text"
              placeholder="Setting up Express.js servers, Creating RESTful APIs, ..."
              className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          {/* Requirements */}
          <div>
            <label className="block text-sm font-semibold text-gray-700">
              Requirements (comma separated)
            </label>
            <input
              type="text"
              placeholder="Basic JavaScript knowledge, Familiarity with databases"
              className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          {/* Target Audience */}
          <div>
            <label className="block text-sm font-semibold text-gray-700">
              Target Audience (comma separated)
            </label>
            <input
              type="text"
              placeholder="Developers interested in backend development, ..."
              className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          {/* Features */}
          <div className="grid grid-cols-3  gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700">
                Lifetime Access
              </label>
              <select className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none">
                <option value={true}>Yes</option>
                <option value={false}>No</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700">
                Preview Available
              </label>
              <select className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none">
                <option value={true}>Yes</option>
                <option value={false}>No</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700">
                Popularity
              </label>
              <select className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none">
                <option value={true}>Yes</option>
                <option value={false}>No</option>
              </select>
            </div>
          </div>

          {/* Pricing */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700">
                Regular Price ($)
              </label>
              <input
                type="number"
                placeholder="109.99"
                className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700">
                Discounted Price ($)
              </label>
              <input
                type="number"
                placeholder="94.99"
                className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700">
                Money-back Guarantee (Days)
              </label>
              <input
                type="number"
                placeholder="30"
                className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
          </div>

          {/* Thumbnail URL */}
          <div>
            <label className="block text-sm font-semibold text-gray-700">
              Thumbnail Image URL
            </label>
            <input
              type="text"
              placeholder="https://i.ibb.co.com/Fk1f2Xc9/download-2.png"
              className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          {/* Submit Button */}
          <div className="text-center pt-4">
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition duration-300"
            >
              Add Course
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateCourse;
