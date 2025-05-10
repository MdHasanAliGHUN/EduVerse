import React, { useContext } from "react";
import { MdFilterListAlt } from "react-icons/md";
import { CoursesContext } from "../../../context/CoursesProvider";
const CategoryFilter = () => {
  const { setFilterBySelectedCategorie, uniqueTypes } =
    useContext(CoursesContext);

  const handleCourseFilterByCategorie = (e) => {
    setFilterBySelectedCategorie(e.target.value);
  };

  return (
    <div className="bg-gray-100 p-4 min-h-40 rounded-md">
      <>
        <h1 className="font-bold text-black text-2xl mb-4 flex items-center">
          <span>
            <MdFilterListAlt className="text-3xl text-indigo-600" />
          </span>{" "}
          Filters
        </h1>
        <p className="text-base text-black mb-1">Category</p>
      </>

      <div>
        <select
          onChange={handleCourseFilterByCategorie}
          className="w-full p-2 border border-gray-300 rounded-md"
        >
          <option value="">All</option>
          {uniqueTypes.map((course, index) => (
            <option key={index} value={course.type}>
              {course.type}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default CategoryFilter;
