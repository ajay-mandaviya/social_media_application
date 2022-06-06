import React from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { logout } from "../features/auth/authSlice";
import { openModal } from "../features/Home/PostModaSlice";

export const Sidebar = () => {
  const dispatch = useDispatch();

  const handlePostModal = () => {
    dispatch(openModal());
  };

  return (
    <>
      <div className="p-2 bg-white border-2 m-auto sticky top-20 mt-6">
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

          <button
            className="p-2 bg-blue-100/70 text-blue-400 hover:bg-blue-200 w-full"
            onClick={handlePostModal}
          >
            Post
          </button>
          <button
            className="p-2 bg-blue-400 text-white hover:bg-blue-500 w-full mt-4"
            onClick={() => {
              dispatch(logout());
            }}
          >
            Logout
          </button>
        </ul>
      </div>
    </>
  );
};
