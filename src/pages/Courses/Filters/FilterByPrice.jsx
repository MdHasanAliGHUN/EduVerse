import React, { useContext } from "react";
import { CoursesContext } from "../../../context/CoursesProvider";

const FilterByPrice = () => {
    const {setFilterByPrice} = useContext(CoursesContext)
  const handleFilterByPrice = (e) => {
    setFilterByPrice(e.target.value);
  };
  return (
    <div className="bg-gray-100 p-4 mt-5 min-h-40 rounded-md">
      <p className="text-base text-black mb-1">Price</p>
      <select
        className="w-full p-2 border border-gray-300 rounded-md"
        onChange={handleFilterByPrice}
      >
        <option value="">DEFAULT</option>
        <option value="lowToHigh">Low to High</option>
        <option value="highToLow">High to Low</option>
      </select>
    </div>
  );
};

export default FilterByPrice;
