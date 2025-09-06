import React, { useEffect, useState } from "react";

import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

import { GOOGLE_API_KEY } from "../utils/constant";
import Comments from "./Comments";

const ChannelInfo = ({ VideoId, snippet, statistics }) => {
  const [comments, setComments] = useState([]);
  const { title, channelTitle, publishedAt, thumbnails } = snippet || {};
  const { viewCount, likeCount } = statistics || {};

  const getComments = async () => {
    const data = await fetch(
      `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet,replies&videoId=${VideoId}&key=${GOOGLE_API_KEY}`
    );
    const json = await data.json();
    setComments(json.items);
  };

  useEffect(() => {
    getComments();
  }, []);

  return (
    <div className=" px-3 pt-4">
      <h3 className="text-xl  font-semibold max-w-full md:max-w-2xl break-words">
        {title}
      </h3>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mt-4 px-4 md:px-0 gap-4">
        {/* Left: Channel Info */}
        <div className="flex items-center gap-3">
          {/* Avatar */}
          <img
            src={thumbnails?.default?.url}
            alt={channelTitle}
            className="w-10 h-10 rounded-full"
          />
          {/* Channel name */}
          <span className="font-bold text-black hover:underline cursor-pointer">
            {channelTitle}
          </span>
          {/* Subscribe button */}
          <button className="ml-25 bg-red-600 text-white px-4 py-1 rounded font-semibold hover:bg-red-700">
            Subscribe
          </button>
        </div>

        <div className="flex flex-wrap items-center gap-3 text-gray-600 text-sm md:text-base">
          <span className="flex items-center gap-1">
            <VisibilityOutlinedIcon className="text-[16px]" />{" "}
            {Number(viewCount).toLocaleString()} views
          </span>

          <FiberManualRecordIcon className="text-[6px] md:text-[8px]" />

          <span className="flex items-center gap-1 cursor-pointer">
            <ThumbUpAltOutlinedIcon className="text-[16px]" />{" "}
            {Number(likeCount).toLocaleString()}
          </span>

          <FiberManualRecordIcon className="text-[6px] md:text-[8px]" />

          <span>{new Date(publishedAt).toDateString()}</span>
        </div>
      </div>
      <div className="mt-8 bg-gray-100 rounded-lg p-4 shadow-sm">
        <h1 className="font-bold text-xl">{comments.length} Comments</h1>
        {comments &&
          comments.map((comment) => (
            <Comments key={comment.id} info={comment.snippet} />
          ))}
      </div>
    </div>
  );
};
export default ChannelInfo;
