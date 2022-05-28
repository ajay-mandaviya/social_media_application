import React from "react";
import { NavLink } from "react-router-dom";

export const Sidebar = () => {
  return (
    <div className="p-2 bg-white border-2 m-auto sticky top-4 mt-4">
      <ul>
        <li className="mb-1">
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              `${
                isActive ? "bg-blue-100/70 text-blue-400" : ""
              } p-4 hover:bg-blue-200 bg-white flex items-center`
            }
          >
            <i className="fa-solid fa-house-chimney" />
            <div className="ml-4">Feed</div>
          </NavLink>
        </li>
        <li className="my-3">
          <NavLink
            to={"/explore"}
            className={({ isActive }) =>
              `${
                isActive ? "bg-blue-100/70 text-blue-400" : ""
              }  p-4 hover:bg-blue-200 bg-white flex items-center`
            }
          >
            <i className="fa-solid fa-compass" />
            <div className="ml-4">Explore</div>
          </NavLink>
        </li>
        <li className="my-3">
          <NavLink
            to={"/bookmarks"}
            className={({ isActive }) =>
              `${
                isActive ? "bg-blue-100/70 text-blue-400" : ""
              } p-4  hover:bg-blue-200 bg-white flex items-center`
            }
          >
            <i className="fa-solid fa-bookmark" />
            <div className="ml-4">BookMarks</div>
          </NavLink>
        </li>
        <li className="my-3">
          <NavLink
            to={"/profile"}
            className={({ isActive }) =>
              `${
                isActive ? "bg-blue-100/70 text-blue-400" : ""
              } p-4 hover:bg-blue-200 bg-white flex items-center`
            }
          >
            <i className="fa-solid fa-circle-user" />
            <div className="ml-4">Profile</div>
          </NavLink>
        </li>

        <button className="p-2 bg-blue-100/70 text-blue-400 hover:bg-blue-200 w-full">
          Post
        </button>
      </ul>
    </div>
  );
};
