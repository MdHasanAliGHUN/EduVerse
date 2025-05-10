import React from "react";
import { MdDelete } from "react-icons/md";
import { NavLink } from "react-router"; 

const DashboardTable = ({ allCourses }) => {
  return (
    <div className="overflow-x-auto bg-white rounded-md shadow-md p-4">
      <table className="table-auto w-full border-collapse">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="p-3 border">Image</th>
            <th className="p-3 border">Category</th>
            <th className="p-3 border">Price</th>
            <th className="p-3 border text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {allCourses.map((course, index) => (
            <tr key={index} className="border-b hover:bg-gray-50">
              <td className="p-3">
                <img
                  className="w-10 h-10 rounded-full object-cover"
                  src={course.image.thumbnailUrl}
                  alt="Course Thumbnail"
                />
              </td>
              <td className="p-3 capitalize">{course.type}</td>
              <td className="p-3 text-green-600 font-medium">${course.pricing.discountedPrice}</td>

              <td className="p-3">
                <div className="flex items-center justify-end space-x-5">
                  <NavLink
                    to="/update-course"
                    className="text-blue-600 hover:underline font-medium"
                  >
                    Update
                  </NavLink>
                  <button className="text-red-600 hover:text-red-800 text-3xl cursor-pointer">
                    <MdDelete />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DashboardTable;
