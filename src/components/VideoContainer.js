import React, { useEffect, useState } from "react";
import { YOUTUBE_Videos_API } from "../utils/constant";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  const getPopularVideos = async () => {
    const data = await fetch(YOUTUBE_Videos_API);

    const json = await data.json();
    setVideos(json.items);
  };

  useEffect(() => {
    getPopularVideos();
  }, []);

  return (
    <div className="ml-28 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
      {videos.map((video) => (
        <Link key={video.id} to={`/watch?v=${video.id.videoId || video.id}`}>
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
