import React from "react";
import { LuAlarmClock } from "react-icons/lu";
import { NavLink } from "react-router";

const CourseGroupByCategoryCard = ({ course }) => {
  const {
    id,
    image,
    courseTitle,
    instructor,
    durationHours,
    type,
    pricing,
    courseLevel,
  } = course;

  return (
    <section>
      <div className="shadow-md group overflow-hidden rounded-md relative flex flex-col h-full">
        <img
          className="w-full h-44 hover:cursor-pointer transition duration-300 transform group-hover:scale-105"
          src={image?.thumbnailUrl}
          alt={courseTitle}
        />
        <p className="absolute top-2 right-2 bg-sky-700 text-white text-xs px-3 py-2 rounded-md shadow-md z-10">
          {courseLevel}
        </p>

        <div className="p-4 space-y-2 py-8 flex-1 flex flex-col justify-between">
          <h1 className="text-black font-bold">{courseTitle}</h1>
          <p className="text-gray-700 text-xs">{instructor?.name}</p>

          <div className="flex items-center justify-between">
            <p className="flex items-center gap-2 font-bold">
              <LuAlarmClock />
              {durationHours} Hours
            </p>
            <p className="text-xs text-gray-800 font-bold uppercase">{type}</p>
          </div>
          <div className="space-x-1">
            <strong>${pricing?.discountedPrice}</strong>
            <del className="text-xs">${pricing?.regularPrice}</del>
          </div>
          <div className="w-full mt-10">
            <NavLink
               to={`/course-details/${id}`}
              className="bg-sky-700 hover:bg-sky-600 px-6 py-2 rounded-md w-full text-white flex justify-center items-center text-center"
            >
              View All Details
            </NavLink>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default CourseGroupByCategoryCard;
