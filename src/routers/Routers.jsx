import { Route } from "react-router";
import App from "../App";
import Home from "../pages/Home/Home";
import Categories from "../pages/Categories/Categories";
import About from "../pages/About/About";
import CoursesLayout from "../pages/Courses/CoursesLayout/CoursesLayout";
import CourseGroupByCategory from "../pages/CourseGroupByCategory/CourseGroupByCategory";
import CourseDetailsLayout from "../pages/CourseDetails/CourseDetailsLayout";
import SignIn from "../pages/SignUpAndSignIn/SignIn";
import SignUp from "../pages/SignUpAndSignIn/SignUp";
import Dashboard from "../Dashboard/Dashboard";
import AddCourse from "../Dashboard/AddCourse/AddCourse";
import UpdateCourse from "../Dashboard/UpdateCourse";

const routes = (
  <>
    <Route element={<App />}>
      <Route path="/" element={<Home />} />
      <Route path="/courses" element={<CoursesLayout />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/about" element={<About />} />
      <Route path="/courses/category/:categoryName" element={<CourseGroupByCategory />}/>
      <Route path="/course-details/:id" element={<CourseDetailsLayout />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/add-course" element={<AddCourse/>}/>
      <Route path="/update-course" element={<UpdateCourse/>}/>
    </Route>
    <Route path="/sign-in" element={<SignIn />} />
    <Route path="/sign-up" element={<SignUp />} />
  </>
);

export default routes;
