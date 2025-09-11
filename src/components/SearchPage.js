import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { GOOGLE_API_KEY } from "../utils/constant";
import SearchVideoResult from "./SearchVideoResult";

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("v");
  const [searchVideos, setSearchVideos] = useState([]);

  const getSearchVideos = async () => {
    const data = await fetch(
      "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=" +
        query +
        "&key=" +
        GOOGLE_API_KEY
    );
    const json = await data.json();
    setSearchVideos(json.items);
  };

  useEffect(() => {
    getSearchVideos();
  }, []);

  return (
    <div className="pt-3 relative">
      {searchVideos.map((video) => (
        <SearchVideoResult key={video.etag} info={video} />
      ))}
    </div>
  );
};

export default SearchPage;
