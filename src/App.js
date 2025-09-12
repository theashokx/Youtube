import "./App.css";

import Body from "./components/Body";
import { Provider } from "react-redux";
import Store from "./utils/Store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";

import SearchPage from "./components/SearchPage";
import ShortsPage from "./components/ShortsPage";

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
        path: "/shorts",
        element: <ShortsPage />,
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
