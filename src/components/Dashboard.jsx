import React from "react";
import {
  FcDoughnutChart,
  FcAcceptDatabase,
  FcAbout,
  FcTemplate,
} from "react-icons/fc";
import Dp from "./img/dp.jpeg";
import A from "./img/a1.jpg";
import B from "./img/a2.jpg";
import C from "./img/a3.jpg";
import D from "./img/a4.jpg";

const Dashboard = () => {
  const courses = [A, C, B, D, B, A];
  return (
    <div>
      <div className="m-2 box-border border-4 bg-gray-200  rounded-xl">
        <div className="flex justify-between">
          <div className="flex">
            <h1 className="text-3xl my-1 p-2">
              <FcDoughnutChart />
            </h1>
            <h1 className=" text-gray-700 my-1 text-xl md:text-2xl p-2">
              Dashboard:
            </h1>
          </div>
          <div className="flex text-3xl my-1 p-2">
            <img
              className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
              src={Dp}
              alt=""
            />
            <h2 className="text-sm px-2 text-gray-400">@khalid_arnob</h2>
          </div>
        </div>
      </div>
      <div className=" my-4 mx-4 bg-gray-400 shadow rounded-xl h-auto p-6">
        <div className="flex justify-between">
          <h2 className="p-2 text-lg text-white">Attendance Monitor</h2>
          <h1 className="text-3xl p-2">
            <FcAcceptDatabase />
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-1">
          <div className="text-gray-700 text-base m-2   box-content h-parent w-5/5  border-4 px-2 py-2 bg-red-200 rounded-xl flex justify-between">
            <h2 className="text-base">This July: </h2>
            <h2 className="text-base text-center text-3xl mx-4">46%</h2>
          </div>
          <div className="text-gray-700 text-base m-2   box-content h-parent w-5/5  border-4 px-2 py-2 bg-green-300 rounded-xl flex justify-between">
            <h2 className="text-base">June: </h2>
            <h2 className="text-base text-center text-3xl mx-4">100%</h2>
          </div>
          <div className="text-gray-700 text-base m-2   box-content h-parent w-5/5  border-4 px-2 py-2 bg-blue-200 rounded-xl flex justify-between">
            <h2 className="text-base">May: </h2>
            <h2 className=" text-center text-3xl mx-4">80%</h2>
          </div>
          <div className="text-gray-700 text-base m-2   box-content h-parent w-5/5  border-4 px-2 py-2 bg-yellow-200 rounded-xl flex justify-between">
            <h2 className="text-base">April: </h2>
            <h2 className="text-base text-center text-3xl mx-4">55%</h2>
          </div>
        </div>
      </div>
      <div className="my-4 mx-4 bg-indigo-700 shadow m-2 rounded-xl h-auto p-6">
        <div className="flex justify-between">
          <h2 className="p-2 text-xl text-yellow-300">Notice Pane</h2>
          <h1 className="text-3xl p-2">
            <FcAbout />
          </h1>
        </div>
        <div className="p-6">
          <h1 className="text-xl text-white">
            All classes are postponed during covid pandemic!
          </h1>
        </div>
      </div>
      <div className="my-4 mx-4 bg-gray-400 shadow m-2 rounded-xl h-auto p-6">
        <div className="flex justify-between">
          <h2 className="p-2 text-lg text-white">Running Courses</h2>
          <h1 className="text-3xl p-2">
            <FcTemplate />
          </h1>
        </div>
        <div class="flex gap-4 overflow-x-scroll h-auto p-6 ">
          {courses.map(v => {
            return (
              <div className="bg-white rounded shadow max-w-xl border-4">
                <img
                  className="w-full h-32 sm:h-48 object-cover"
                  src={v}
                  alt=""
                />
                <div className="m-2 p-2 w-48 md:w-64">
                  <h1 className="font-bold text-base">English For Today</h1>
                  <span>XI-XII</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
