import React, { useContext } from "react";
import { CoursesContext } from "../../../context/CoursesProvider";

const LevelFilter = () => {
  const { setFilterBySelectedLevel, uniqueLevels } = useContext(CoursesContext);

  const handleCourseFilterByLevel = (e) => {
    setFilterBySelectedLevel(e.target.value);
  };

  return (
    <div className="bg-gray-100 p-4 mt-5 min-h-40 rounded-md">
      <p className="text-base text-black mb-1">Level</p>
      <select
        className="w-full p-2 border border-gray-300 rounded-md"
        onChange={handleCourseFilterByLevel}
      >
        <option value="">All</option>
        {uniqueLevels.map((item, index) => (
          <option key={index} value={item.level.toLowerCase()}>
            {item.level}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LevelFilter;
