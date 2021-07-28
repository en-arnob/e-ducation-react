import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaChalkboardTeacher } from "react-icons/fa";
import { HiOutlineBookOpen, HiAnnotation } from "react-icons/hi";
import StudyMaterialImg from "../img/undraw_book_lover_mkck.svg";
import ClassRecordingsImg from "../img/undraw_real_time_collaboration_c62i.svg";
import ExamsImg from "../img/undraw_exams_g4ow.svg";
import ProgressImg from "../img/undraw_Personal_goals_re_iow7.svg";
import AnnounceImg from "../img/undraw_a_day_off_w9ex.svg";

const CourseContent = props => {
  return (
    <div className="md:ml-20">
      <div className="bg-blue-400 p-2 my-2 rounded-xl mx-2">
        <h1 className="text-2xl text-white m-2 px-2">
          English For Today || {props.myparam}{" "}
        </h1>
      </div>
      <div className="bg-gray-800 p-2 my-2 rounded-xl mx-2">
        <div className="bg-gray-700 text-white m-2 rounded-xl p-2">
          <h1 className="text-xl flex gap-2 ">
            {" "}
            <FaChalkboardTeacher className="text-3xl" />
            Course Teacher: <span> Lebu Khan</span>
          </h1>
          <h1 className="text-xl flex gap-2">
            <HiOutlineBookOpen className="text-3xl" />
            Course Code: <span> ENG101</span>
          </h1>
          <h1 className=" text-sm md:text-base flex gap-2">
            {" "}
            <HiAnnotation className="text-2xl md:text-xl" /> Course Description:{" "}
            <span className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
              exercitationem excepturi reprehenderit nisi quos consectetur
              tenetur ipsam nobis!
            </span>
          </h1>
        </div>
        <div className=" grid grid-cols-2 md:grid-cols-5 mt-2 p-2 gap-4">
          <div className="bg-green-200  shadow-2xl align-center p-4 rounded-xl">
            <img
              className=" w-4/5 transform  transition duration-500 ease-in-out transform hover:-translate-y-2 hover:scale-105  "
              src={StudyMaterialImg}
              alt=""
            />
            <h1 className="text-xl text-gray-800 my-2">Study Materials</h1>
          </div>
          <div className="bg-yellow-300  shadow-2xl align-center p-4 rounded-xl">
            <img
              className="w-4/5 transform  transition duration-500 ease-in-out transform hover:-translate-y-2 hover:scale-105   "
              src={ClassRecordingsImg}
              alt=""
            />
            <h1 className="text-xl text-gray-800 my-2">Class Recordings</h1>
          </div>
          <div className="bg-blue-300 shadow-2xl align-center p-4 rounded-xl">
            <img
              className="w-4/5 transform  transition duration-500 ease-in-out transform hover:-translate-y-2 hover:scale-105 "
              src={ExamsImg}
              alt=""
            />
            <h1 className="text-xl text-gray-800 my-2">Exams</h1>
          </div>
          <div className="bg-indigo-500 shadow-2xl align-center p-4 rounded-xl">
            <img
              className="w-4/5 transform  transition duration-500 ease-in-out transform hover:-translate-y-2 hover:scale-105 "
              src={ProgressImg}
              alt=""
            />
            <h1 className="text-xl text-gray-800 my-2">Progress</h1>
          </div>
          <div className="bg-blue-200 shadow-2xl align-center p-4 rounded-xl">
            <img
              className="w-4/5 transform  transition duration-500 ease-in-out transform hover:-translate-y-2 hover:scale-105 "
              src={AnnounceImg}
              alt=""
            />
            <h1 className="text-xl text-gray-800 my-2">Class Discussion</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseContent;
