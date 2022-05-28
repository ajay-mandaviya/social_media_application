import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="flex h-14  bg-slate-300 p-4 justify-between items-center">
      <div>App Name</div>
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
          <i className="fa-solid fa-circle-user text-2xl" />
        </Link>
      </div>
    </div>
  );
};
