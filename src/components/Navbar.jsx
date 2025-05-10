import React, { useContext, useState } from "react";
import { NavLink } from "react-router";
import { IoMdBook } from "react-icons/io";
import { RiMenu3Fill } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import { AuthContext } from "../context/AuthProvider";
import Swal from "sweetalert2";
const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const navMenu = [
    { name: "Home", path: "/" },
    { name: "Courses", path: "/courses" },
    { name: "Categories", path: "/categories" },
    { name: "About", path: "/about" },
  ];

  const handleSignOutUser = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will be signed out!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, sign out!",
    }).then((result) => {
      if (result.isConfirmed) {
        signOutUser()
          .then(() => {
            Swal.fire({
              title: "Signed Out!",
              text: "You have been successfully signed out.",
              icon: "success",
            });
          })
          .catch((error) => {
            Swal.fire({
              title: "Error!",
              text: "Something went wrong while signing out.",
              icon: "error",
            });
            console.error("Sign-out error:", error);
          });
      }
    });
  };

  const [showMobileMenu, setShowMobileMenu] = useState(false);
  return (
    <header className=" fixed top-0 left-0 z-50 w-full bg-white shadow-md py-4 px-6">
      <nav className="container max-w-7xl mx-auto flex items-center justify-between ">
        <NavLink to="/" className="flex items-center gap-1">
          <span className="bg-sky-700 hover:bg-sky-600 px-2 py-1 rounded-md">
            <IoMdBook className="text-2xl text-white" />
          </span>
          <h1 className="text-black font-bold ">EduVerse</h1>
        </NavLink>
        {/* Center div */}
        <ul className="md:flex items-center space-x-4 hidden">
          {navMenu.map((item, index) => (
            <li key={index}>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "  font-semibold border-b-2 transition-all duration-300 ease-in-out "
                    : "text-gray-700 transition-all duration-300 ease-in-out"
                }
                to={item.path}
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
        {/* Right div */}
        <div className="hidden md:flex">
          {user ? (
            <div className="flex items-center gap-2">
              <NavLink
                to="/dashboard"
                className="bg-sky-700 hover:bg-sky-600 px-6 py-2 rounded-md text-white flex items-center gap-2"
              >
                Dashboard
              </NavLink>

              <button
                onClick={handleSignOutUser}
                className="bg-sky-700 hover:bg-sky-600 px-6 py-2 rounded-md text-white flex items-center gap-2 cursor-pointer"
              >
                Sign Out
              </button>
            </div>
          ) : (
            <NavLink
              to="/sign-in"
              className="bg-sky-700 hover:bg-sky-600 px-6 py-2 rounded-md text-white flex items-center gap-2"
            >
              Sign In
            </NavLink>
          )}
        </div>

        {/* Munu bar */}
        <div className="md:hidden">
          {showMobileMenu ? (
            <RxCross2
              className="text-2xl font-bold text-black"
              onClick={() => setShowMobileMenu(!showMobileMenu)}
            />
          ) : (
            <RiMenu3Fill
              className="text-2xl font-bold text-black"
              onClick={() => setShowMobileMenu(!showMobileMenu)}
            />
          )}
        </div>
      </nav>
      {/* mobile menu */}
      <div className="md:hidden">
        {showMobileMenu && (
          <ul className="flex flex-col mt-5 space-y-4">
            {navMenu.map((item) => (
              <li key={item.path} className="hover:bg-gray-100 px-2 py-1">
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    isActive
                      ? "underline text-sky-700 font-semibold"
                      : "text-gray-700"
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
            <div className="w-full">
              {user ? (
                <div className="flex flex-col gap-4">
                  <NavLink
                    to="/dashboard"
                    className="w-full bg-sky-700 hover:bg-sky-600 px-6 py-2 rounded-md text-center text-white flex items-center justify-center gap-2"
                  >
                    Dashboard
                  </NavLink>

                  <button
                    onClick={handleSignOutUser}
                    className="w-full bg-sky-700 hover:bg-sky-600 px-6 py-2 rounded-md text-white flex items-center justify-center gap-2 cursor-pointer"
                  >
                    Log out
                  </button>
                </div>
              ) : (
                <NavLink
                  to="/sign-in"
                  className="bg-sky-700 hover:bg-sky-600 px-6 py-2 rounded-md w-full text-white flex justify-center items-center text-center"
                >
                  Sign In
                </NavLink>
              )}
            </div>
          </ul>
        )}
      </div>
    </header>
  );
};

export default Navbar;
