import React, { useState } from "react";
import { useEffect } from "react";
import { GOOGLE_API_KEY } from "../utils/constant";
import ChannelProfile from "./ChannelProfile";

const SubscriptionPage = () => {
  const [channelList, setChannelList] = useState([]);

  const getPopularChannels = async () => {
    const videosRes = await fetch(
      "https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=40&regionCode=IN&key=" +
        GOOGLE_API_KEY
    );
    const videos = await videosRes.json();

    const channelIds = videos.items
      .map((video) => video.snippet.channelId)
      .join(",");

    const channelsRes = await fetch(
      "https://youtube.googleapis.com/youtube/v3/channels?part=snippet,statistics&id=" +
        channelIds +
        "&key=" +
        GOOGLE_API_KEY
    );
    const channels = await channelsRes.json();
    setChannelList(channels.items);
    console.log(channels.items);
  };

  useEffect(() => {
    getPopularChannels();
  }, []);

  return (
    <div className="ml-28">
      <div className="flex justify-center mb-6">
        <h1 className="text-2xl font-semibold">All Subscriptions</h1>
      </div>

      <div className="p-2 rounded-lg">
        {channelList.map((channel) => (
          <ChannelProfile key={channel.id} info={channel} />
        ))}
      </div>
    </div>
  );
};

export default SubscriptionPage;
