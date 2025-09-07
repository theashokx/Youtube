import CurrentVideoPage from "./CurrentVideoPage";
import SuggestionPage from "./SuggestionPage";

const WatchPage = () => {
  return (
    <div className="flex gap-0 m-0 p-0 mt-4">
      <CurrentVideoPage />
      <SuggestionPage />
    </div>
  );
};

export default WatchPage;
