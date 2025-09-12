import React, { useEffect, useState, useRef } from "react";
import { GOOGLE_API_KEY, SHORTS_API } from "../utils/constant";
import ShortsVideo from "./ShortsVideo";

const ShortsPage = () => {
  const [shortVideos, setShortVideos] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef();

  const getVideos = async () => {
    const data = await fetch(SHORTS_API + GOOGLE_API_KEY);
    const json = await data.json();
    setShortVideos(json.items.slice(0, 20));
  };

  useEffect(() => {
    getVideos();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveIndex(Number(entry.target.dataset.index));
          }
        });
      },
      { threshold: 0.7 }
    );

    const children = containerRef.current.children;
    Array.from(children).forEach((child) => observer.observe(child));

    return () => observer.disconnect();
  }, [shortVideos]);

  return (
    <div
      ref={containerRef}
      className="flex flex-col overflow-y-scroll h-screen snap-y gap-6 snap-mandatory mt-10"
    >
      {shortVideos.map((video, index) => (
        <div
          key={video.id.videoId || index}
          data-index={index}
          className="h-screen snap-start flex justify-center items-center"
        >
          <ShortsVideo video={video} autoplay={index === activeIndex} />
        </div>
      ))}
    </div>
  );
};

export default ShortsPage;
