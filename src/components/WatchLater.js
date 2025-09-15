import React from "react";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { GOOGLE_API_KEY } from "../utils/constant";

const WatchLater = () => {
  const [watchLaterVideos, setWatchLaterVideos] = useState([]);

  const getPopularVideos = async () => {
    const data = await fetch(
      "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=12&regionCode=IN&key=" +
        GOOGLE_API_KEY
    );

    const json = await data.json();
    setWatchLaterVideos(json.items);
  };

  useEffect(() => {
    getPopularVideos();
  }, []);

  return (
    <div className="ml-24">
      <h1 className="text-lg font-semibold mb-3">Watch Later</h1>
      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {watchLaterVideos.map((video) => (
          <Link key={video.id} to={`/watch?v=${video.id.videoId || video.id}`}>
            <VideoCard info={video} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default WatchLater;
