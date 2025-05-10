import React, { useContext } from "react";
import { CoursesContext } from "../../context/CoursesProvider";
import { useParams } from "react-router";
import CourseGroupByCategoryCard from "./CourseGroupByCategoryCard";
import CourseGroupByCategoryHeader from "./CourseGroupByCategoryHeader";

const CourseGroupByCategory = () => {
  const { allCourses, filterBySelectedLevel2 } = useContext(CoursesContext);
  const { categoryName } = useParams();

  const filteredCoursesByCateroy = allCourses
  .filter(
    (course) =>
      course.type?.toLowerCase() === categoryName?.toLowerCase()
  )
  .filter((course) =>
    filterBySelectedLevel2
      ? course.courseLevel?.toLowerCase() === filterBySelectedLevel2?.toLowerCase()
      : true
  );
  
  
  return (
    <section className="container max-w-7xl mx-auto py-4 mt-24 px-6">
      <div>
        {/* Pass the filteredCoursesByCateroy length to the header */}
        <CourseGroupByCategoryHeader
          filteredCoursesByCateroy={filteredCoursesByCateroy}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredCoursesByCateroy.map((course, index) => (
          <CourseGroupByCategoryCard key={index} course={course} />
        ))}
      </div>
    </section>
  );
};

export default CourseGroupByCategory;
