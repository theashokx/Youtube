import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const SuggestionVideo = ({ video }) => {
  const { snippet, statistics } = video;
  const { channelTitle, title, thumbnails, publishedAt } = snippet;
  const { viewCount } = statistics;

  return (
    <div className="flex mb-3 cursor-pointer hover:bg-gray-100 rounded-xl p-2 transition">
      <img
        src={thumbnails.medium.url}
        alt="Thumbnail"
        className="w-40 h-24 object-cover rounded-lg"
      />

      <div className="ml-3 flex flex-col justify-between">
        <h3 className="font-semibold text-sm line-clamp-2">{title}</h3>
        <h4 className="text-xs text-gray-600">
          {channelTitle}{" "}
          <CheckCircleIcon style={{ color: "green", fontSize: 12 }} />
        </h4>
        <div className="text-xs text-gray-500">
          <span>{parseInt(viewCount).toLocaleString()} views</span> •{" "}
          <span>{new Date(publishedAt).toDateString()}</span>
        </div>
      </div>
    </div>
  );
};

export default SuggestionVideo;
