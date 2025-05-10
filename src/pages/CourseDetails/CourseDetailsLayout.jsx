import React, { useContext } from "react";
import { useParams } from "react-router";
import { CoursesContext } from "../../context/CoursesProvider";
import { CiStar } from "react-icons/ci";
import CourseDetailsCard from "./CourseDetailsCard";
import CourseDesription from "./CourseDesription";

const CourseDetailsLayout = () => {
  const { id } = useParams();
  const { allCourses } = useContext(CoursesContext);

  // Use .find() to get the single course
  const courseDetails = allCourses.find((course) => course.id === id);

  if (!courseDetails) {
    return <div>Loading...</div>; // or any fallback message
  }

  const {
    courseTitle,
    courseLevel,
    durationHours,
    instructor,
    description,
    navigation,
  } = courseDetails;

  return (
    <div>
      <div className="px-5 bg-indigo-800 py-20">
        <div className=" container max-w-7xl mx-auto px-6 py-10 mt-10">
          <h1 className="text-white font-bold text-2xl md:text-3xl lg:text-4xl mb-4">
            {courseTitle}
          </h1>

          <div className="flex items-center space-x-2">
            <div>
              <span className="bg-gray-300 font-semibold  py-2 px-3 text-xs rounded-md text-black w-auto uppercase">
                {courseLevel}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <CiStar className="bg-yellow-400 rounded-full text-2xl" />{" "}
              <span className="text-white">4.5</span>
            </div>
            <div className="text-white font-semibold text-xs italic">
               <span>{durationHours} Hours</span>
            </div>
          </div>
          <h3 className="font-semibold text-white my-5 uppercase">
            Instructor Name :{" "}
            <span className=" italic capitalize font-bold text-base">
              {instructor}
            </span>
          </h3>
          <p className="text-white italic">{description}</p>
        </div>
      </div>

      <div className="px-5 grid grid-cols-1 md:grid-cols-6  container max-w-7xl mx-auto py-7 my-7">
        <div className="col-span-1 md:col-span-4">
          <div>
            <CourseDesription courseDetails={courseDetails}/>
          </div>
        </div>
        <div className="col-span-1 md:col-span-2 flex justify-center mt-5 md:mt-0">
          <CourseDetailsCard courseDetails={courseDetails} />
        </div>
      </div>
    </div>
  );
};

export default CourseDetailsLayout;
