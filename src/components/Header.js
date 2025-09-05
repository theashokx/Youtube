import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Header = () => {
  const dispatch = useDispatch();

  const toggelMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="flex items-center justify-between p-3  shadow-md">
      {/* Left: Menu + Logo */}
      <div className="flex items-center gap-4">
        <img
          onClick={() => toggelMenuHandler()}
          className="h-8 w-8 m-8 cursor-pointer"
          alt="menu-icon"
          src="https://icons.veryicon.com/png/o/miscellaneous/linear-icon-45/hamburger-menu-4.png"
        />
        <img
          className="h-14 w-28 cursor-pointer object-contain"
          alt="youtube-icon"
          src="https://t4.ftcdn.net/jpg/07/32/01/31/360_F_732013128_4w36WRSEpuF1oT9nK0Bd31GT353WqFYi.jpg"
        />
      </div>

      <div className="flex items-center flex-1 max-w-2xl mx-6">
        <input
          type="text"
          placeholder="Search"
          className="flex-1 h-10 border border-gray-300 rounded-l-full px-4 text-sm focus:outline-none focus:border-blue-500"
        />
        <button className="h-10 w-12 border border-gray-300 bg-gray-100 rounded-r-full hover:bg-gray-200 flex items-center justify-center">
          <SearchIcon className="text-gray-600" fontSize="small" />
        </button>
      </div>

      <div>
        <img
          className="h-8 w-8 rounded-full cursor-pointer"
          alt="user-icon"
          src="https://marketplace.canva.com/Dz63E/MAF4KJDz63E/1/tl/canva-user-icon-MAF4KJDz63E.png"
        />
      </div>
    </div>
  );
};

export default Header;
