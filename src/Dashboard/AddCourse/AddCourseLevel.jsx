import React, { useContext } from "react";
import { CoursesContext } from "../../context/CoursesProvider";

const AddCourseLevel = ({ register }) => {
  const { uniqueLevels } = useContext(CoursesContext);
  return (
    <div>
      <select
        {...register("level", { required: true })}
        className="w-full p-2 border border-gray-300 rounded-md"
      >
        <option value="">Select Level</option>
        {uniqueLevels.map((level, index) => (
          <option key={index} value={level.level}>
            {level.level}
          </option>
        ))}
      </select>
    </div>
  );
};

export default AddCourseLevel;
