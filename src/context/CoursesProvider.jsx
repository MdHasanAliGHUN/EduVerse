import React, { createContext, useEffect, useState } from "react";
import { FaLaptopCode, FaServer } from "react-icons/fa";
import {
  SiJavascript,
  SiReact,
  SiExpress,
  SiMongodb,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
} from "react-icons/si";

const uniqueCategories = [
  { category: "JavaScript", icon: <SiJavascript /> },
  { category: "React", icon: <SiReact /> },
  { category: "Frontend", icon: <FaLaptopCode /> },
  { category: "Express.js", icon: <SiExpress /> },
  { category: "MongoDB", icon: <SiMongodb /> },
  { category: "Next.js", icon: <SiTypescript /> },
  { category: "Tailwind CSS", icon: <SiTailwindcss /> },
  { category: "Node.js", icon: <SiNodedotjs /> },
  { category: "Full-Stack", icon: <FaLaptopCode /> },
  { category: "Backend", icon: <FaServer /> },
];

const uniqueTypes = [
  { type: "JavaScript" },
  { type: "React" },
  { type: "Frontend" },
  { type: "Express.js" },
  { type: "MongoDB" },
  { type: "TypeScript" },
  { type: "Next.js" },
  { type: "Tailwind CSS" },
  { type: "Node.js" },
  { type: "full-stack" },
  { type: "Backend" },
];

const uniqueLevels = [
  { level: "Beginner" },
  { level: "Intermediate" },
  { level: "Advanced" },
  { level: "Beginner to Advanced" },
];

export const CoursesContext = createContext(null);

const CoursesProvider = ({ children }) => {
  const [allCourses, setAllCourses] = useState([]);
  const [filterBySelectedLevel, setFilterBySelectedLevel] = useState("");
  const [filterBySelectedCategorie, setFilterBySelectedCategorie] =
    useState("");
  const [filterBySelectedLevel2, setFilterBySelectedLevel2] = useState("");
  const [filterByPrice, setFilterByPrice] = useState("");

  useEffect(() => {
    fetch("/courses.json")
      .then((res) => res.json())
      .then((data) => setAllCourses(data))
      .catch((error) => console.error("Error fetching courses:", error));
  }, []);

  const coursesInfo = {
    allCourses,
    filterBySelectedLevel,
    filterBySelectedCategorie,
    filterBySelectedLevel2,
    filterByPrice,
    uniqueCategories,
    uniqueTypes,
    uniqueLevels,
    setAllCourses,
    setFilterBySelectedLevel,
    setFilterBySelectedCategorie,
    setFilterBySelectedLevel2,
    setFilterByPrice
  };
  return (
    <CoursesContext.Provider value={coursesInfo}>
      {children}
    </CoursesContext.Provider>
  );
};

export default CoursesProvider;
