export const GOOGLE_API_KEY = "AIzaSyDjlCqOyoP9XNHhp5f9WPMbU1cga6Eg7ko";

export const YOUTUBE_Videos_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  GOOGLE_API_KEY;

export const VIDEO_DETAILS =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id";

export const YOUTUBE_SEARCH_SUGG =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const LIVE_CHAT_COUNT = 25;
export const Search_Result_API =
  "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=";

export const SHORTS_API =
  "https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=45&videoDuration=short&q=shorts&regionCode=IN&key=";
