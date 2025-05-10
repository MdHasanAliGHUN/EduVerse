import React, { useContext } from "react";
import SectionTitle from "../../components/SectionTitle";
import { CoursesContext } from "../../context/CoursesProvider";

const CourseGroupByCategoryHeader = ({ filteredCoursesByCateroy }) => {
  const courseCount = filteredCoursesByCateroy.length;
  const type = courseCount > 0 ? filteredCoursesByCateroy[0].type : "Course";

  const { uniqueLevels, setFilterBySelectedLevel2 } =
    useContext(CoursesContext);

  const handleCourseFilterByLevel2 = (e) => {
    setFilterBySelectedLevel2(e.target.value);
  };

  return (
    <div>
      <SectionTitle
        title="Explore Courses by Category"
        description="Discover our collection of high-quality courses, grouped by your selected category. Learn from expert instructors and boost your skills."
      />

      <div className="bg-blue-900 py-10 my-5 rounded-md px-4 grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
        <div className="md:col-span-4">
          {courseCount > 0 ? (
            <h1 className="text-2xl font-bold mb-3 leading-snug text-gray-300">
              <span className="capitalize text-white">
                {courseCount} {type}
              </span>{" "}
              Courses
              <br />
              <span className="text-md normal-case">
                waiting for you — learn one and take your skills to the next
                level
              </span>
            </h1>
          ) : (
            <h1 className="text-xl text-white font-semibold">
              No courses found for this category.
            </h1>
          )}
        </div>
        <div className="md:col-span-1">
          <select
            className="w-full p-2 border border-gray-300 rounded-md"
            onChange={handleCourseFilterByLevel2}
          >
            <option value="">All</option>
            {uniqueLevels.map((item, index) => (
              <option key={index} value={item.level.toLowerCase()}>
                {item.level}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default CourseGroupByCategoryHeader;
