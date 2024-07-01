import { Suspense, lazy } from "react";
import ButtonList from "./ButtonList";
// import VideoContainer from "./VideoContainer";
const VideoContainer = lazy(() => import("./VideoContainer"));

const MainContainer = () => {
  return (
    <div className="p-5">
      <>
        <ButtonList />
        <Suspense fallback={<h1>Loading ...</h1>} >
          <VideoContainer />
        </Suspense>
      </>
    </div>
  )
}

export default MainContainer;