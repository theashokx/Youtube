import React from "react";
import SideBar from "./SideBar";
import MainContainer from "./MainContainer";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import ProfileInfo from "./ProfileInfo";

const Body = () => {
  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
        <Header />
      </div>
      <div className="flex pt-4">
        <div>
          <SideBar />
        </div>
        <div>
          <ProfileInfo />
        </div>
        <div className="flex-1 ml-4 ">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Body;
