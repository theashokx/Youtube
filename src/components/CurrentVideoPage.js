import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { hideMenuBar, showMenuBar } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import { GOOGLE_API_KEY } from "../utils/constant";
import ChannelInfo from "./ChannelInfo";

const CurrentVideoPage = () => {
  const dispatch = useDispatch();

  const [searchParams] = useSearchParams();
  const [videoDetails, setVideoDetails] = useState([]);
  const videoId = searchParams.get("v");

  const getVideoDetails = async () => {
    const data = await fetch(
      "https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&id=" +
        videoId +
        "&key=" +
        GOOGLE_API_KEY
    );
    const json = await data.json();
    setVideoDetails(json.items);
  };

  useEffect(() => {
    getVideoDetails();
  }, [videoId]);

  useEffect(() => {
    dispatch(hideMenuBar());

    return () => {
      dispatch(showMenuBar());
    };
  }, [dispatch]);

  return (
    videoDetails.length > 0 && (
      <div className="px-4">
        <div className="px-6 pt-2">
          <iframe
            className="block rounded-lg "
            width="840"
            height="400"
            src={"https://www.youtube.com/embed/" + videoId + "?autoplay=1"}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div className="px-2 py-2 w-[880px]">
          <ChannelInfo
            VideoId={videoId}
            snippet={videoDetails[0].snippet}
            statistics={videoDetails[0].statistics}
          />
        </div>
      </div>
    )
  );
};

export default CurrentVideoPage;
