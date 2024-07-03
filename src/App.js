import { Suspense, lazy } from "react";
import { Provider } from "react-redux";
import "./App.css";
import MainContainer from "./Components/MainContainer";
// import Header from "./Components/Header";
import store from "./utils/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import WatchPage from "./Components/WatchPage";
const Body = lazy(() => import("./Components/Body"));

const appRouter = createBrowserRouter([{
  path: "/",
  element: 
  <Suspense fallback={<h1>Loading...</h1>}>
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
