import "./App.css";

import Body from "./components/Body";
import { Provider } from "react-redux";
import Store from "./utils/Store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";

import SearchPage from "./components/SearchPage";
import ShortsPage from "./components/ShortsPage";
import SubscriptionPage from "./components/SubscriptionPage";
import YouPage from "./components/YouPage";
import History from "./components/History";
import WatchLater from "./components/WatchLater";
import LikedVideos from "./components/LikedVideos";
import YourVideos from "./components/YourVideos";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "/watch",
        element: <WatchPage />,
      },
      {
        path: "/search",
        element: <SearchPage />,
      },

      {
        path: "/subscriptions",
        element: <SubscriptionPage />,
      },
      {
        path: "/shorts",
        element: <ShortsPage />,
      },
      {
        path: "/you",
        element: <YouPage />,
      },
      {
        path: "/history",
        element: <History />,
      },
      {
        path: "/watchlater",
        element: <WatchLater />,
      },
      {
        path: "/liked",
        element: <LikedVideos />,
      },
      {
        path: "/yourvideos",
        element: <YourVideos />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <Provider store={Store}>
        <div className="pt-24 flex-1 overflow-y-auto">
          <RouterProvider router={appRouter} />
        </div>
      </Provider>
    </>
  );
}

export default App;
