import React from "react";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { thumbnails, title, publishedAt, channelTitle } = snippet;
  const { viewCount } = statistics;

  return (
    <div className="w-full py-6 cursor-pointer">
      <img
        alt="thumbnail"
        src={thumbnails.medium.url}
        className="rounded-xl w-full aspect-video object-cover"
      />

      <div className="mt-3">
        <h3 className="font-semibold text-base line-clamp-2">{title}</h3>
        <p className="text-gray-600 text-sm">{channelTitle}</p>
        <div className="flex gap-2 text-gray-500 text-sm mt-1">
          <span>{Number(viewCount).toLocaleString()} views</span>
          <span>•</span>
          <span>{new Date(publishedAt).toDateString()}</span>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
