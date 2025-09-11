import "./App.css";

import Body from "./components/Body";
import { Provider } from "react-redux";
import Store from "./utils/Store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";

import SearchPage from "./components/SearchPage";
import { BrowserRouter } from "react-router-dom";

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
    ],
  },
]);

function App() {
  return (
    <>
      <Provider store={Store}>
        {/* <div className="flex flex-col h-screen">
          <div className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
            <Header />
          </div> */}

        <div className="pt-24 flex-1 overflow-y-auto">
          <RouterProvider router={appRouter} />
        </div>
        {/* </div> */}
      </Provider>
    </>
  );
}

export default App;
