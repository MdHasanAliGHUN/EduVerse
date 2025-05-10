import React, { useContext, useState } from "react";
import SectionTitle from "../../components/SectionTitle";
import { CoursesContext } from "../../context/CoursesProvider";
import CourseCard from "../Courses/Courses/CourseCard";

const PopularCourses = () => {
  const { allCourses } = useContext(CoursesContext);

  const popularCourses = allCourses.filter(
    (course) => course.popularity === true
  );
  const [limitedPopularCourses, setLimitedPopularCourses] = useState(3);

  return (
    <div className="container max-w-7xl mx-auto pt-16 px-6">
      <section>
        <SectionTitle
          title="Popular Courses"
          description="Explore our most sought-after courses designed to boost your skills and career."
        />
      </section>
      {/* -------------Popular section------------- */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pb-15">
        {popularCourses
          .slice(0, limitedPopularCourses)
          .map((singleCourse, index) => (
            <CourseCard key={index} singleCourse={singleCourse} />
          ))}
      </div>
    </div>
  );
};

export default PopularCourses;
