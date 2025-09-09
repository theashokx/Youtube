import { useState } from "react";
import CurrentVideoPage from "./CurrentVideoPage";
import SuggestionPage from "./SuggestionPage";

import { useSearchParams } from "react-router-dom";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const [toggle, setToggle] = useState(false);
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");

  return (
    <div className="flex gap-4 m-0 p-0 mt-4 overflow-x-hidden">
      <div className="flex-1 min-w-0">
        <CurrentVideoPage />
      </div>
      <div className="w-[350px] max-w-[400px] relative shrink-0">
        <button
          className="mb-2 px-4 py-2 text-sm font-medium rounded-full bg-red-600 text-white 
                   hover:bg-red-700 transition duration-200"
          onClick={() => setToggle(!toggle)}
        >
          {!toggle ? "Join Live Chat" : "Watch Recommendations"}
        </button>

        <div>
          {toggle ? <LiveChat /> : <SuggestionPage videoId={videoId} />}
        </div>
      </div>
    </div>
  );
};

export default WatchPage;
