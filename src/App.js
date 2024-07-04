import { Suspense, lazy } from "react";
import { Provider } from "react-redux";
import "./App.css";
import MainContainer from "./Components/MainContainer";
// import Header from "./Components/Header";
import store from "./utils/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import WatchPage from "./Components/WatchPage";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Body = lazy(() => import("./Components/Body"));

const appRouter = createBrowserRouter([{
  path: "/",
  element: 
  <Suspense fallback={<div className="flex justify-center text-5xl m-10 text-gray-500"><FontAwesomeIcon icon={faSpinner} spin /></div>}>
    <Body />
  </Suspense>,
  children: [
    {
      path: "/",
      element: <MainContainer />
    },
    {
      path: "watch",
      element: <WatchPage />
    },
    {
      path: "live",
      element: <MainContainer />
    },
    {
      path: "shorts",
      element: <MainContainer />
    }
  ]
}]);

function App() {
  return (
    <Provider store={store}>
      <div>
        {/* <Header /> */}
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;
