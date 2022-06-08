import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../features/auth/authSlice";

export const Navbar = () => {
  const { user } = useAuth();

  return (
    <div className="flex h-14  bg-white shadow-md		 p-4 justify-between items-center sticky top-0 left-0 z-10">
      <div className="font-bold text-2xl cursor-default text-indigo-600">Text Talk</div>
      <div>
        <div className="border-2  p-1 ">
          <i className="fas fa-search   " />
          <input
            placeholder="Search User"
            className="outline-none bg-inherit ml-4"
          />
        </div>
      </div>
      <div>
        <Link to={"/profile"}>
          {user?.profilePic ? (
            <img
              src={user?.profilePic}
              alt={"profilePic"}
              className="w-8 h-8 md:w-8 md:h-8 border object-cover object-top rounded-full bg-gray-200"
            />
          ) : (
            <div className="w-10 h-10 md:w-10 md:h-10 text-xl flex items-center justify-center font-semibold rounded-full bg-blue-400 text-white">
              {user?.firstName[0]?.toUpperCase()}
            </div>
          )}
        </Link>
      </div>
    </div>
  );
};
