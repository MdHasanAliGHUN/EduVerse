import { useContext } from "react";
import { CoursesContext } from "../../context/CoursesProvider";

const AddCourseLevel = ({ register }) => {
  const { uniqueTypes } = useContext(CoursesContext);
  return (
    <div>
      <select
        {...register("type", { required: true })}
        className="w-full p-2 border border-gray-300 rounded-md"
      >
        <option value="">Select Type</option>
        {uniqueTypes.map((type, index) => (
          <option key={index} value={type.type}>
            {type.type}
          </option>
        ))}
      </select>
    </div>
  );
};

export default AddCourseLevel;
