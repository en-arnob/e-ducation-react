import { React } from "react";
import Dp from "../img/dp.jpeg";

const PLCard = () => {
  return (
    <div
      className="bg-gray-700 shadow m-3 rounded-2xl
       h-auto p-2"
    >
      <h1 className="text-gray-700 text-base m-2 px-2 py-1 bg-green-300 rounded-xl">
        Student Profile
      </h1>
      <div className="p-4 ">
        <img
          className="w-48 h-48 align-middle  rounded-full border-solid border-4 mx-auto"
          src={Dp}
          alt=""
        />
        <h1 className="text-2xl mt-2 text-center text-white">
          Khalid Ibn Alam Utsob
        </h1>
        <h1
          className="text-base bg-yellow-200 
         rounded-xl text-center text-gray-700 font-bold"
        >
          @khalid_arnob6969
        </h1>
      </div>
      <div className="p-2 text-white">
        <h1 className="text-base text-green-300 font-bold">Institution:</h1>
        <h1 className="text-base">
          Ghatail Cantonment Public School & College
        </h1>
        <div className="flex">
          <h1 className="text-base text-green-300 font-bold">Class:</h1>
          <h1 className="text-base mx-2">XI</h1>
        </div>
        <div className="flex">
          <h1 className="text-base text-green-300 font-bold">Section:</h1>
          <h1 className="text-base mx-2">A</h1>
        </div>
        <div className="flex">
          <h1 className="text-base text-green-300 font-bold">Roll:</h1>
          <h1 className="text-base mx-2">465</h1>
        </div>
        <div className="flex">
          <h1 className="text-base text-green-300 font-bold">Blood Group:</h1>
          <h1 className="text-base mx-2">B+</h1>
        </div>
        <div className="flex">
          <h1 className="text-base text-green-300 font-bold">
            Emmergency Contact:
          </h1>
          <h1 className="text-base mx-2">01626123321</h1>
        </div>
        <div className="text-center">
          <button class="bg-green-300 hover:bg-green-500 text-gray-700 hover:text-white font-bold py-1 px-4 rounded-xl m-4">
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default PLCard;
