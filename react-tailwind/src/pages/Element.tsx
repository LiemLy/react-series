import React from "react";
import { FaUpload, FaArrowLeft, FaArrowRight } from "react-icons/fa";

function Element() {
  return (
    <div>
      <div>
        <h1 className="font-light text-3xl">Buttons</h1>
        <div className="py-4 grid grid-flow-col auto-cols-max gap-4">
          <button className="py-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg">
            Valider
          </button>

          <button className="py-2 px-4 flex justify-center items-center  bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
            <FaUpload className="mr-2" /> Upload
          </button>

          <button className="py-2 px-4 flex justify-center items-center  bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  w-12 h-12 rounded-lg ">
            <FaUpload />
          </button>

          <button
            type="button"
            className="py-2 px-4 flex justify-center items-center  bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
          >
            <svg
              width="20"
              height="20"
              fill="currentColor"
              className="mr-2 animate-spin"
              viewBox="0 0 1792 1792"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M526 1394q0 53-37.5 90.5t-90.5 37.5q-52 0-90-38t-38-90q0-53 37.5-90.5t90.5-37.5 90.5 37.5 37.5 90.5zm498 206q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-704-704q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm1202 498q0 52-38 90t-90 38q-53 0-90.5-37.5t-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-964-996q0 66-47 113t-113 47-113-47-47-113 47-113 113-47 113 47 47 113zm1170 498q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-640-704q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm530 206q0 93-66 158.5t-158 65.5q-93 0-158.5-65.5t-65.5-158.5q0-92 65.5-158t158.5-66q92 0 158 66t66 158z"></path>
            </svg>
            Loading
          </button>

          <button
            type="button"
            disabled
            className="py-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg cursor-not-allowed"
          >
            Disabled
          </button>

          <button
            type="button"
            className="py-2 px-4 bg-pink-600 hover:bg-pink-700 focus focus:ring-pink-500 focus:ring-offset-pink-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-full"
          >
            Follow
          </button>

          <button
            type="button"
            className="py-2 px-4 flex justify-center items-center bg-pink-600 hover:bg-pink-700 focus focus:ring-pink-500 focus:ring-offset-pink-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-full"
          >
            <FaUpload className="mr-2" /> With Icon
          </button>

          <div className="flex items-center border border-1 rounded-md divide-x divide-solid overflow-hidden">
            <button
              type="button"
              className="w-full text-base font-medium text-black bg-white hover:bg-gray-100 px-4 py-3"
            >
              Left
            </button>
            <button
              type="button"
              className="w-full text-base font-medium text-black bg-white hover:bg-gray-100 px-4 py-3"
            >
              Center
            </button>
            <button
              type="button"
              className="w-full text-base font-medium text-black bg-white hover:bg-gray-100 px-4 py-3"
            >
              Right
            </button>
          </div>
        </div>

        <div className="flex">
          <button
            type="button"
            className="py-2 px-4  bg-gradient-to-r from-green-400 to-blue-500 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 "
          >
            Free space
          </button>

          <div className="flex items-center border border-1 rounded-md divide-x divide-solid overflow-hidden">
            <button
              type="button"
              className="px-4 py-2 text-base text-indigo-500 bg-white hover:bg-gray-100 "
            >
              1
            </button>
            <button
              type="button"
              className="px-4 py-2 text-base text-gray-600 bg-white hover:bg-gray-100"
            >
              2
            </button>
            <button
              type="button"
              className="px-4 py-2 text-base text-gray-600 bg-white hover:bg-gray-100"
            >
              3
            </button>
            <button
              type="button"
              className="px-4 py-2 text-base text-gray-600 bg-white hover:bg-gray-100"
            >
              4
            </button>
            <button
              type="button"
              className="px-4 py-2 text-base text-gray-600 bg-white hover:bg-gray-100"
            >
              5
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Element;
