import React from "react";
import { FaSadTear } from "react-icons/fa";
import { NavLink } from "react-router";
import reactCookingAnimation from "../../assets/cooking.json";
import Lottie from "lottie-react";

const CategoriesCard = ({ categoryItem, count }) => {
  const { category, icon } = categoryItem;

  return (
    <div className="p-7 border rounded-lg flex flex-col items-start gap-4 text-lg hover:scale-105 transition-transform duration-300">
      <div>
        <div className="text-3xl text-indigo-600">{icon}</div>
        <div className="font-semibold text-xl text-gray-800 my-2">
          {category}
        </div>
        <div>
          {count > 0 ? (
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-2">
                <p className="bg-indigo-700 size-8 p-1 text-xs flex items-center justify-center text-white font-bold rounded-full italic">
                  {count}
                </p>
                <span className="text-xs italic">Courses Are Available</span>
              </div>
              {/* Button */}
              <div className="w-full flex justify-center">
                <NavLink
                  to={`/courses/category/${category.toLowerCase()}`}
                  className="bg-indigo-700 w-full hover:bg-indigo-800 transition-all duration-200 py-2 px-4 rounded-md text-white text-xs font-medium shadow-md text-center"
                >
                  View Course
                </NavLink>
              </div>
            </div>
          ) : (
            <div >
              <div className="flex items-center gap-2 text-red-500">
                <FaSadTear className="text-xl" />
                <p className="text-xs">Course is cooking.</p>
              </div>
              <Lottie
                  animationData={reactCookingAnimation}
                  loop={true}
                  className="w-full h-16"
                />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CategoriesCard;
