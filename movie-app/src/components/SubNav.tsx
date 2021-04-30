import React from "react";
import { VscTriangleDown } from "react-icons/vsc";
import { Link } from "react-router-dom";

function SubNav() {
  return (
    <div className="bg-white z-10 relative">
      <div>
        <div className="flex items-center justify-center">
          <div className="py-2 px-2 mx-2">
            <a className="ml-4 py-2 group inline-block relative cursor-pointer border-b-4 border-blue-400">
              <span className="flex items-center justify-center">
                <span className="mr-1">Overview</span> <VscTriangleDown />
              </span>
              <ul className="absolute hidden group-hover:block bg-white shadow-md rounded-sm text-gray-800 p-4 w-48">
                <li className="hover:bg-gray-200 px-2 py-1">
                  <Link to="/">Main</Link>
                </li>
                <li className="hover:bg-gray-200 px-2 py-1">
                  <Link to="/titles">Alternative</Link>
                </li>
                <li className="hover:bg-gray-200 px-2 py-1">
                  <Link to="/cast">Cast {"&"} Crew</Link>
                </li>
                <li className="hover:bg-gray-200 px-2 py-1">
                  <Link to="/episode_groups">Episode Groups</Link>
                </li>
                <li className="hover:bg-gray-200 px-2 py-1">
                  <Link to="/seasons">Seasons</Link>
                </li>
                <li className="hover:bg-gray-200 px-2 py-1">
                  <Link to="/translations">Translations</Link>
                </li>
                <li className="hover:bg-gray-200 px-2 py-1">
                  <Link to="/watch">Watch Now</Link>
                </li>
                <li className="hover:bg-gray-200 px-2 py-1">
                  <Link to="/changes">Changes</Link>
                </li>
              </ul>
            </a>
          </div>{" "}
          <div className="py-2 px-2 mx-2">
            <a className="pl-4 py-2 rounded-md group inline-block relative cursor-pointer">
              <span className="flex items-center justify-center">
                <span className="mr-1">Media</span> <VscTriangleDown />
              </span>
              <ul className="absolute hidden group-hover:block bg-white shadow-md rounded-sm text-gray-800 p-4 w-48">
                <li className="hover:bg-gray-200 px-2 py-1">
                  <Link to="/">
                    <div className="flex">
                      <span className="flex-grow">Backdrops</span>
                      <span className="text-gray-500">17</span>
                    </div>
                  </Link>
                </li>
                <li className="hover:bg-gray-200 px-2 py-1">
                  <Link to="/">
                    <div className="flex">
                      <span className="flex-grow">Logos</span>
                      <span className="text-gray-500">4</span>
                    </div>
                  </Link>
                </li>
                <li className="hover:bg-gray-200 px-2 py-1">
                  <Link to="/">
                    {" "}
                    <div className="flex">
                      <span className="flex-grow">Posters</span>
                      <span className="text-gray-500">16</span>
                    </div>
                  </Link>
                </li>
                <li className="hover:bg-gray-200 px-2 py-1">
                  <Link to="/">Videos</Link>
                </li>
              </ul>
            </a>
          </div>{" "}
          <div className="py-2 px-2 mx-2">
            <a className="pl-4 py-2 rounded-md group inline-block relative cursor-pointer">
              <span className="flex items-center justify-center">
                <span className="mr-1">Fandom</span> <VscTriangleDown />
              </span>
              <ul className="absolute hidden group-hover:block bg-white shadow-md rounded-sm text-gray-800 p-4 w-48">
                <li className="hover:bg-gray-200 px-2 py-1">
                  <Link to="/">Discussions</Link>
                </li>
                <li className="hover:bg-gray-200 px-2 py-1">
                  <Link to="/">Reviews</Link>
                </li>
              </ul>
            </a>
          </div>{" "}
          <div className="py-2 px-2 mx-2">
            <a className="pl-4 py-2 rounded-md group inline-block relative cursor-pointer">
              <span className="flex items-center justify-center">
                <span className="mr-1">Share</span> <VscTriangleDown />
              </span>
              <ul className="absolute hidden group-hover:block bg-white shadow-md rounded-sm text-gray-800 p-4 w-48">
                <li className="hover:bg-gray-200 px-2 py-1">
                  <Link to="/">Share Link</Link>
                </li>
                <li className="hover:bg-gray-200 px-2 py-1">
                  <Link to="/">Facebook</Link>
                </li>
                <li className="hover:bg-gray-200 px-2 py-1">
                  <Link to="/">Tweet</Link>
                </li>
              </ul>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubNav;
