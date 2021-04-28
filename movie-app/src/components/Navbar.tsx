import React from "react";
import { VscChevronDown } from "react-icons/vsc";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <div>
        <div>
          <nav className="bg-blue-900">
            <div className="w-full">
              <div className="w-4/5 m-auto">
                <div className="flex items-center justify-between h-16">
                  <div className="flex items-center">
                    <Link className="flex-shrink-0" to="/">
                      <img
                        className="w-36"
                        src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
                        alt=""
                      />
                    </Link>

                    <div>
                      <a className="text-white pl-4 py-2 rounded-md group inline-block relative cursor-pointer">
                        <span className="font-bold flex items-center justify-center">
                          Movies <VscChevronDown />
                        </span>
                        <ul className="absolute hidden group-hover:block bg-white shadow-md rounded-sm text-gray-800 p-4 w-48">
                          <li className="hover:bg-gray-200 px-2 py-1">
                            <Link to="/movie/popular">Popular</Link>
                          </li>
                          <li className="hover:bg-gray-200 px-2 py-1">
                            <a href="">Now Playing</a>
                          </li>
                          <li className="hover:bg-gray-200 px-2 py-1">
                            <a href="">Upcoming</a>
                          </li>
                          <li className="hover:bg-gray-200 px-2 py-1">
                            <a href="">Top Rated</a>
                          </li>
                        </ul>
                      </a>
                      <a
                        className="text-white pl-4 py-2 rounded-md font-bold"
                        href=""
                      >
                        TV Shows
                      </a>
                      <a
                        className="text-white pl-4 py-2 rounded-md font-bold"
                        href=""
                      >
                        People
                      </a>
                      <a
                        className="text-white pl-4 py-2 rounded-md font-bold"
                        href=""
                      >
                        More
                      </a>
                    </div>
                  </div>

                  <div>
                    <a
                      className="text-white pl-4 py-2 rounded-md font-bold"
                      href=""
                    >
                      Login
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
