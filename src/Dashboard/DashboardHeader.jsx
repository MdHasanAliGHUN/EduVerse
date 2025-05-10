import React from "react";
import { NavLink } from "react-router";

const DashboardHeader = ({allCourses}) => {
    const courseLength = allCourses.length;
  return (
    <div className="bg-indigo-400 p-6 flex items-center justify-between">
      <div className="bg-white text-black font-bold p-5">Total Course {courseLength}</div>
      <div>
        <NavLink
          to="/add-course"
          className="inline-block bg-sky-800 text-white px-4 py-2 rounded-md hover:bg-sky-700 transition duration-300 shadow"
        >
          Add Course
        </NavLink>
      </div>
    </div>
  );
};

export default DashboardHeader;
