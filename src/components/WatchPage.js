import CurrentVideoPage from "./CurrentVideoPage";
import SuggestionPage from "./SuggestionPage";

const WatchPage = () => {
  return (
    <div className="flex ">
      <CurrentVideoPage />
      <SuggestionPage />
    </div>
  );
};

export default WatchPage;
