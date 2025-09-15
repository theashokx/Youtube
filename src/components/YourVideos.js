import React from "react";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";

const YourVideos = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[80vh] text-center">
      <VideoLibraryIcon sx={{ fontSize: 120, color: "#9ca3af" }} />

      <h2 className="text-xl font-semibold mt-4">You have no videos</h2>
      <p className="text-gray-600 mb-6">
        Upload videos to share them with your audience.
      </p>

      <button className="flex items-center gap-2 px-6 py-3 rounded-full bg-blue-600 text-white font-medium shadow-md hover:bg-blue-700 transition">
        <CloudUploadIcon />
        Upload Video
      </button>
    </div>
  );
};

export default YourVideos;
