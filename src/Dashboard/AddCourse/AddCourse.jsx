import React, { useState } from "react";
import AddCourseType from "./AddCourseType";
import AddCourseLevel from "./AddCourseLevel";
import { useForm } from "react-hook-form";
const AddCourse = () => {
  const [learnings, setLearnings] = useState([""]);
  const [requirements, setRequirements] = useState([""]);
  const [audience, setAudience] = useState([""]);

  // Add new empty field
  const addField = (setter) => {
    setter((prev) => [...prev, ""]);
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className="mx-5">
      <div className="max-w-7xl container mx-auto px-8 py-10 bg-white shadow-lg rounded-xl my-30">
        <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">
          Add New Course
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Course Title */}
          <div>
            <label className="block text-sm font-semibold text-gray-700">
              Course Title
            </label>
            <input
              name="title"
              {...register("title", { required: true })}
              type="text"
              placeholder="Mastering Express.js for Full-Stack Development"
              className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          {/* Type & Level */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <AddCourseType register={register} />
            </div>
            <div>
              <AddCourseLevel register={register} />
            </div>
          </div>

          {/* Instructor, Duration */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700">
                Instructor
              </label>
              <input
                name="instructor"
                type="text"
                {...register("instructor", { required: true })}
                placeholder="Emily Zhang"
                className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700">
                Duration (hours)
              </label>
              <input
                name="number"
                type="durationHours"
                {...register("durationHours", { required: true })}
                placeholder="20"
                className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
          </div>

          {/* Short Description */}
          <div>
            <label className="block text-sm font-semibold text-gray-700">
              Short Description
            </label>
            <textarea
              rows="3"
              name="description"
              {...register("description", { required: true })}
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
              name="aboutCourse"
              {...register("aboutCourse", { required: true })}
              rows="4"
              placeholder="This course teaches you the fundamentals..."
              className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
            ></textarea>
          </div>

          {/* What You Will Learn */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              What You Will Learn
            </label>
            {learnings.map((item, index) => (
              <input
                name={`Learing-${index}`}
                {...register(`Learing-${index}`, { required: true })}
                key={index}
                type="text"
                placeholder="e.g. Creating RESTful APIs"
                className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none mb-2"
              />
            ))}
            <button
              type="button"
              onClick={() => addField(setLearnings)}
              className="text-sm text-blue-600 underline cursor-pointer"
            >
              + Add More
            </button>
          </div>

          {/* Requirements */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Requirements
            </label>
            {requirements.map((item, index) => (
              <input
                key={index}
                type="text"
                placeholder="e.g. Basic JavaScript knowledge"
                className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none mb-2"
              />
            ))}
            <button
              type="button"
              onClick={() => addField(setRequirements)}
              className="text-sm text-blue-600 underline cursor-pointer"
            >
              + Add More
            </button>
          </div>

          {/* Target Audience */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Target Audience
            </label>
            {audience.map((item, index) => (
              <input
                key={index}
                type="text"
                placeholder="e.g. Students learning backend"
                className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none mb-2"
              />
            ))}
            <button
              type="button"
              onClick={() => addField(setAudience)}
              className="text-sm text-blue-600 underline cursor-pointer"
            >
              + Add More
            </button>
          </div>

          {/* Features */}
          <div className="grid grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700">
                Lifetime Access
              </label>
              <select
                {...register("lifetimeAccess", { required: true })}
                className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
              >
                <option value={true}>Yes</option>
                <option value={false}>No</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700">
                Preview Available
              </label>
              <select 
              {...register("previewAvailable", { required: true })}
              className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none">
                <option value={true}>Yes</option>
                <option value={false}>No</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700">
                Popularity
              </label>
              <select 
               {...register("popularity", { required: true })}
              className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none">
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
                 {...register("regularPrice", { required: true })} 
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
                {...register("discountedPrice", { required: true })} 
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
                {...register("moneyBackGuaranteeDays", { required: true })} 
                type="number"
                placeholder="30"
                className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
          </div>

          {/* Thumbnail */}
          <div>
            <label className="block text-sm font-semibold text-gray-700">
              Thumbnail Image URL
            </label>
            <input
              {...register("thumbnailUrl", { required: true })} 
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

export default AddCourse;
