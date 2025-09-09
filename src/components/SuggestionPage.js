import React, { useEffect, useState } from "react";
import SuggestionVideo from "./SuggestionVideo";
import { GOOGLE_API_KEY } from "../utils/constant";
import { Link } from "react-router-dom";

const SuggestionPage = ({ videoId }) => {
  const [videoInfo, setVideoInfo] = useState([]);
  const [categoryId, setVideoCategoryId] = useState();

  const getSuggestionVideos = async () => {
    const data = await fetch(
      " https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=40&regionCode=IN&videoCategoryId=" +
        categoryId +
        "&key=" +
        GOOGLE_API_KEY
    );
    const json = await data.json();
    setVideoInfo(json.items);
  };

  const getVideoDetails = async () => {
    const data = await fetch(
      "https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&id=" +
        videoId +
        "&key=" +
        GOOGLE_API_KEY
    );
    const json = await data.json();
    setVideoCategoryId(json.items[0].snippet.categoryId);
  };
  useEffect(() => {
    getVideoDetails();
  }, []);
  useEffect(() => {
    getSuggestionVideos();
  }, [categoryId]);
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
