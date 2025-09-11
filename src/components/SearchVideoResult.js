import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import { timeAgo } from "../utils/helper";
import { Link } from "react-router-dom";

const SearchVideo = ({ info }) => {
  const { snippet, id } = info;
  const { channelTitle, description, publishedAt, thumbnails, title } = snippet;

  return (
    <div className="flex mb-4 hover:bg-gray-100 p-2 rounded-lg cursor-pointer transition">
      <div className="flex-shrink-0 w-2/5 h-48 md:h-56">
        <Link to={"/watch?v=" + id.videoId}>
          <img
            src={thumbnails.high.url}
            alt="Thumbnail"
            className="w-full h-full object-cover rounded-lg"
          />
        </Link>
      </div>

      <div className="flex flex-col ml-6 w-3/5">
        <h3 className="text-xl md:text-2xl font-semibold text-gray-900 line-clamp-2">
          {title}
        </h3>

        <div className="flex items-center mt-3 mb-2">
          <img
            src={thumbnails.high.url}
            alt={channelTitle}
            className="w-12 h-12 rounded-full mr-4"
          />
          <p className="text-base text-gray-800 font-medium">
            {channelTitle}{" "}
            <CheckCircleIcon style={{ color: "green", fontSize: 15 }} />
          </p>
        </div>

        <p className="text-sm text-gray-500 mb-3">{timeAgo(publishedAt)}</p>

        <p className="text-base text-gray-700 line-clamp-4">{description}</p>
      </div>
    </div>
  );
};

export default SearchVideo;
