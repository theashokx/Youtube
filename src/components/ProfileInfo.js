import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SecurityIcon from "@mui/icons-material/Security";
import LanguageIcon from "@mui/icons-material/Language";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SettingsIcon from "@mui/icons-material/Settings";
import { useSelector } from "react-redux";

const ProfileInfo = () => {
  const isUserOpen = useSelector((store) => store.app.isUserOpen);

  return (
    isUserOpen && (
      <div className="absolute right-4 mt-2 w-80 bg-white shadow-xl rounded-xl border border-gray-200 overflow-hidden z-50">
        <div className="flex items-center gap-4 p-4 border-b">
          <img
            src="https://t4.ftcdn.net/jpg/05/75/21/63/360_F_575216364_IrGn1B8XT0a3kse5vW7X5dg6mErnfyKQ.jpg"
            alt="profile"
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <h3 className="font-semibold text-gray-900">UserName</h3>
            <p className="text-sm text-blue-600 cursor-pointer hover:underline">
              Manage your Google Account
            </p>
          </div>
        </div>

        {/* Options */}
        <div className="flex flex-col">
          <MenuItem icon={<AccountCircleIcon />} label="Switch Account" />
          <MenuItem icon={<ExitToAppIcon />} label="Sign out" />
          <MenuItem icon={<VideoLibraryIcon />} label="YouTube Studio" />
          <MenuItem
            icon={<ShoppingCartIcon />}
            label="Purchases and memberships"
          />
          <MenuItem icon={<SecurityIcon />} label="Your data in YouTube" />
          <MenuItem icon={<LanguageIcon />} label="Language" />
          <MenuItem icon={<LocationOnIcon />} label="Location" />
          <MenuItem icon={<SettingsIcon />} label="Settings" />
        </div>
      </div>
    )
  );
};

const MenuItem = ({ icon, label }) => (
  <button className="flex items-center gap-3 px-4 py-2 text-sm text-gray-800 hover:bg-gray-100">
    <span className="text-gray-600">{icon}</span>
    {label}
  </button>
);

export default ProfileInfo;
