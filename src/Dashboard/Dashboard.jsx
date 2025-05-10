import React, { useContext } from "react";
import DashboardHeader from "./DashboardHeader";
import { CoursesContext } from "../context/CoursesProvider";
import DashboardTable from "./DashboardTable";

const Dashboard = () => {

  const { allCourses } = useContext(CoursesContext);

  return (
    <div className="max-w-7xl container mx-auto px-6 py-10 mt-10">
      <DashboardHeader allCourses={allCourses}/>
      <div>
        <DashboardTable allCourses={allCourses}/>
      </div>
    </div>
  );
};

export default Dashboard;
