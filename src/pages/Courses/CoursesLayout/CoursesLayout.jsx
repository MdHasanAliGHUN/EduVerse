import React from "react";
import Courses from "../Courses/Courses";
import CategoryFilter from "../Filters/CategoryFilter";
import LevelFilter from "../Filters/LevelFilter";
import CoursesHeader from "../Courses/CoursesHeader";
import FilterByPrice from "../Filters/FilterByPrice";

const CoursesLayout = () => {
  return (
    <section className="container max-w-7xl mx-auto pt-16 px-6">
      <CoursesHeader />
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="w-full lg:w-1/5">
          <CategoryFilter />
          <LevelFilter />
          <FilterByPrice />
        </div>
        <div className="w-full lg:w-4/5">
          <Courses />
        </div>
      </div>
    </section>
  );
};

export default CoursesLayout;
