import WatchLater from "./WatchLater";
import History from "./History";

const YouPage = () => {
  return (
    <div className="ml-28 p-6">
      <div className="flex items-center justify-between pb-6 border-b">
        <div className="flex items-center gap-4">
          <img
            src="https://t4.ftcdn.net/jpg/05/75/21/63/360_F_575216364_IrGn1B8XT0a3kse5vW7X5dg6mErnfyKQ.jpg"
            alt="avatar"
            className="w-20 h-20 rounded-full"
          />
          <div>
            <h2 className="text-xl font-bold">UserName</h2>
            <h3 className="text-sm text-gray-600">Custom Url</h3>
          </div>
        </div>

        <div className="flex gap-3">
          <button className="px-4 py-2 rounded-full border hover:bg-gray-100">
            Switch Account
          </button>
          <button className="px-4 py-2 rounded-full border bg-blue-600 text-white hover:bg-blue-700">
            Google Account
          </button>
        </div>
      </div>
      <div className="mt-6">
        <History />
      </div>

      <div className="mt-6">
        <div>
          <WatchLater />
        </div>
      </div>
    </div>
  );
};

export default YouPage;
