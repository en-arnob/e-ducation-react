import React from "react";
import { useLocation } from "react-router-dom";
import SideNav from "../Courses/SideNav";
import CourseContent from "./CourseContent";

const CourseDetails = () => {
  const location = useLocation();
  const myparam = location.state.params;
  return (
    <div>
      <SideNav />
      <CourseContent myparam={myparam} />
    </div>
  );
};

export default CourseDetails;
