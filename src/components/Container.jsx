import React from "react";
import { Navbar } from "./Navbar";
import { Sidebar } from "./Sidebar";
import { SuggestFollower } from "./SuggestFollower";

export const Container = ({ children }) => {
  return (
    <div className="max-w-screen-xl	 m-auto">
      <Navbar />
      <div className="flex w-full justify-between ">
        <div className="w-1/5	">
          <Sidebar />
        </div>
        <div className="w-6/12 mt-4">{children}</div>
        <div className="w-1/5	">
          <SuggestFollower />
        </div>
      </div>
    </div>
  );
};
