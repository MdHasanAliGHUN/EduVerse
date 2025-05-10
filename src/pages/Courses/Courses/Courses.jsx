import React, { useContext, useState } from "react";
import { CoursesContext } from "../../../context/CoursesProvider";
import CourseCard from "./CourseCard";

const Courses = () => {
  const {
    allCourses,
    filterBySelectedLevel,
    filterByPrice,
    filterBySelectedCategorie,
  } = useContext(CoursesContext);

  const [limitedCourses, setLimitedCourses] = useState(6);

  const increaseCourseLimit = () => {
    setLimitedCourses((previous) => previous + 3);
  };

  // Filter by Level
  const filteredByLevel = filterBySelectedLevel
    ? allCourses.filter(
        (course) =>
          course.courseLevel?.toLowerCase() ===
          filterBySelectedLevel.toLowerCase()
      )
    : allCourses;

  // Filter by Category
  const filteredByType = filterBySelectedCategorie
    ? allCourses.filter(
        (course) =>
          course.type?.toLowerCase() === filterBySelectedCategorie.toLowerCase()
      )
    : allCourses;

  // Combine Level + Type filter
  const filteredCourses = filteredByLevel.filter((course) =>
    filteredByType.includes(course)
  );

  // Apply Price Sorting
  const sortedCourses = [...filteredCourses]; // avoid mutating original

  if (filterByPrice === "lowTowHigh") {
    sortedCourses.sort((a, b) => {
      a.pricing.discountedPrice - b.pricing.discountedPrice;
    });
  } else if (filterByPrice === "highToLow") {
    sortedCourses.sort(
      (a, b) => b.pricing.discountedPrice - a.pricing.discountedPrice
    );
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {sortedCourses.slice(0, limitedCourses).map((singleCourse, index) => (
          <CourseCard key={index} singleCourse={singleCourse} />
        ))}
      </div>

      {limitedCourses < sortedCourses.length && (
        <div className="flex justify-center my-7">
          <button
            onClick={increaseCourseLimit}
            className="bg-sky-700 text-xs italic py-2 px-6 rounded-full text-white cursor-pointer hover:bg-sky-600 hover:underline flex items-center gap-2"
          >
            View More
          </button>
        </div>
      )}
    </>
  );
};

export default Courses;
