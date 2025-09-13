import React from "react";
import { formatViews } from "../utils/helper";

const ChannelProfile = ({ info }) => {
  if (!info) return null;

  const { snippet, statistics } = info;
  const { customUrl, description, thumbnails, title } = snippet;
  const { subscriberCount } = statistics;

  return (
    <div className="max-w-3xl mx-auto flex items-center justify-between p-3 border-b">
      <div className="flex items-center gap-4">
        <img
          src={thumbnails.high.url}
          alt="Profile Pic"
          className="w-14 h-14 rounded-full object-cover"
        />

        <div className="max-w-md">
          <h3 className="text-base font-semibold">{title}</h3>
          <p className="text-sm text-gray-600">
            {customUrl} • {formatViews(subscriberCount)} subscribers
          </p>
          <p className="text-sm text-gray-500 truncate">{description}</p>
        </div>
      </div>

      <div>
        <button className="bg-gray-100 px-3 py-1.5 rounded-full text-sm font-medium flex items-center gap-1 border">
          Subscribed
          <span className="ml-1">▼</span>
        </button>
      </div>
    </div>
  );
};

export default ChannelProfile;
