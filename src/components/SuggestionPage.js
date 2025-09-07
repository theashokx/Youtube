import React, { useEffect, useState } from "react";
import SuggestionVideo from "./SuggestionVideo";
import { GOOGLE_API_KEY } from "../utils/constant";
import { Link } from "react-router-dom";

const SuggestionPage = () => {
  const [videoInfo, setVideoInfo] = useState([]);

  const getSuggestionVideos = async () => {
    const data = await fetch(
      "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&maxResults=40&chart=mostPopular&regionCode=US&key=" +
        GOOGLE_API_KEY
    );
    const json = await data.json();
    setVideoInfo(json.items);
  };
  useEffect(() => {
    getSuggestionVideos();
  }, []);
  return (
    videoInfo && (
      <div className="">
        {videoInfo.map((video) => (
          <Link key={video.id} to={"/watch?v=" + video.id}>
            <SuggestionVideo video={video} />
          </Link>
        ))}
      </div>
    )
  );
};

export default SuggestionPage;
