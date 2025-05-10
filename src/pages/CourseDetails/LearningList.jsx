import React from "react";
import { IoCheckmarkSharp } from "react-icons/io5";
const LearningList = ({ whatYouWillLearn }) => {
  return (
    <div className="space-y-3">
      {whatYouWillLearn.map((learnItem, index) => (
        <div key={index} className="flex items-center gap-1">
          <IoCheckmarkSharp />
          <p className="text-gray-700 font-light">{learnItem}</p>
        </div>
      ))}
    </div>
  );
};

export default LearningList;
