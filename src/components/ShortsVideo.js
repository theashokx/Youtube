const ShortsVideo = ({ video, autoplay }) => {
  if (!video) return null;
  const videoId = video.id.videoId;
  const { channelTitle, title, thumbnails } = video.snippet;

  return (
    <div className="relative w-[280px] h-[450px] rounded-lg overflow-hidden mx-auto shadow-lg">
      <iframe
        className="w-full h-full object-cover"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=${
          autoplay ? 1 : 0
        }&controls=1&mute=0`}
        allow="autoplay; encrypted-media"
      ></iframe>

      <div className="absolute bottom-0 left-0 right-0 p-2 text-white">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img
              src={thumbnails.default.url}
              alt="avatar"
              className="h-8 w-8 rounded-full"
            />
            <span className="font-semibold">{channelTitle}</span>
          </div>
          <button className="bg-red-600 px-3 py-1 rounded font-semibold">
            Subscribe
          </button>
        </div>
        <p className="mt-1 line-clamp-2">{title}</p>
      </div>
    </div>
  );
};

export default ShortsVideo;
