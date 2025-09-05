import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import SlowMotionVideoIcon from "@mui/icons-material/SlowMotionVideo";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import HistoryIcon from "@mui/icons-material/History";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const isMenuBarHidden = useSelector((store) => store.app.isMenuBarHidden);

  if (!isMenuOpen)
    return (
      <div className="w-28 p-3">
        <ul className="flex flex-col items-center space-y-6">
          <Link to="/">
            {" "}
            <li className="flex flex-col items-center cursor-pointer hover:bg-gray-100 p-2 rounded-lg w-full">
              <HomeIcon fontSize="medium" />

              <span className="text-xs mt-1">Home</span>
            </li>
          </Link>

          <li className="flex flex-col items-center cursor-pointer hover:bg-gray-100 p-2 rounded-lg w-full">
            <SlowMotionVideoIcon fontSize="medium" />
            <span className="text-xs mt-1">Shorts</span>
          </li>

          <li className="flex flex-col items-center cursor-pointer hover:bg-gray-100 p-2 rounded-lg w-full">
            <SubscriptionsIcon fontSize="medium" />
            <span className="text-xs mt-1">Subscriptions</span>
          </li>

          <li className="flex flex-col items-center cursor-pointer hover:bg-gray-100 p-2 rounded-lg w-full">
            <AccountCircleIcon fontSize="medium" />
            <span className="text-xs mt-1">You</span>
          </li>

          <li className="flex flex-col items-center cursor-pointer hover:bg-gray-100 p-2 rounded-lg w-full">
            <HistoryIcon fontSize="medium" />
            <span className="text-xs mt-1">History</span>
          </li>
        </ul>
      </div>
    );
  return (
    <div className="w-56 h-screen bg-white shadow-md p-4 text-sm">
      <ul className="space-y-2 mb-6">
        <Link to="/">
          <li className="flex items-center gap-4 p-2 rounded-lg hover:bg-gray-100 cursor-pointer">
            <HomeIcon fontSize="medium" />
            <span>Home</span>
          </li>
        </Link>
        <li className="flex items-center gap-4 p-2 rounded-lg hover:bg-gray-100 cursor-pointer">
          <SlowMotionVideoIcon fontSize="medium" />
          <span>Shorts</span>
        </li>
        <li className="flex items-center gap-4 p-2 rounded-lg hover:bg-gray-100 cursor-pointer">
          <SubscriptionsIcon fontSize="medium" />
          <span>Subscriptions</span>
        </li>
      </ul>

      <hr className="my-2" />

      <h1 className="font-semibold text-gray-700 px-2 mb-2">You</h1>
      <ul className="space-y-2">
        <li className="flex items-center gap-4 p-2 rounded-lg hover:bg-gray-100 cursor-pointer">
          <HistoryIcon fontSize="medium" />
          <span>History</span>
        </li>
        <li className="flex items-center gap-4 p-2 rounded-lg hover:bg-gray-100 cursor-pointer">
          <PlaylistAddIcon fontSize="medium" />
          <span>Playlists</span>
        </li>
        <li className="flex items-center gap-4 p-2 rounded-lg hover:bg-gray-100 cursor-pointer">
          <OndemandVideoIcon fontSize="medium" />
          <span>Your videos</span>
        </li>
        <li className="flex items-center gap-4 p-2 rounded-lg hover:bg-gray-100 cursor-pointer">
          <WatchLaterIcon fontSize="medium" />
          <span>Watch Later</span>
        </li>
        <li className="flex items-center gap-4 p-2 rounded-lg hover:bg-gray-100 cursor-pointer">
          <ThumbUpIcon fontSize="medium" />
          <span>Liked videos</span>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
