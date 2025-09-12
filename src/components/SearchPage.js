import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { GOOGLE_API_KEY, Search_Result_API } from "../utils/constant";
import SearchVideoResult from "./SearchVideoResult";

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("v");
  const [searchVideos, setSearchVideos] = useState([]);

  const getSearchVideos = async () => {
    const data = await fetch(
      Search_Result_API + query + "&key=" + GOOGLE_API_KEY
    );
    const json = await data.json();
    setSearchVideos(json.items);
  };

  useEffect(() => {
    getSearchVideos();
  }, []);

  return (
    <div className="pt-3 ml-28 relative">
      {searchVideos.map((video) => (
        <SearchVideoResult key={video.etag} info={video} />
      ))}
    </div>
  );
};

export default SearchPage;
