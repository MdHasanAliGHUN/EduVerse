import React, { useContext } from "react";
import SectionTitle from "../../components/SectionTitle";
import CategoriesCard from "./CategoriesCard";
import { CoursesContext } from "../../context/CoursesProvider";

const Categories = () => {
  const { allCourses, uniqueCategories } = useContext(CoursesContext);

  return (
    <section className="container max-w-7xl mx-auto py-4 px-6 mt-10">
      <SectionTitle
        title="Course Categories"
        description="Find courses based on your preferred category. We offer high-quality courses created by expert instructors in various subjects."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 pb-12">
        {uniqueCategories.map((categoryItem, index) => {
          const courseCount = allCourses.filter(
            (course) =>
              course.type.toLowerCase() === categoryItem.category.toLowerCase()
          ).length;

          return (
            <CategoriesCard
              key={index}
              categoryItem={categoryItem}
              count={courseCount}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Categories;
