import React from "react";
import SideBar from "./SideBar";
import MainContainer from "./MainContainer";
import { Outlet } from "react-router-dom";
import Header from "./Header";

const Body = () => {
  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
        <Header />
      </div>
      <div className="flex">
        <div>
          <SideBar />
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Body;
