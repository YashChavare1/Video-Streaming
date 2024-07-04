import { Suspense, lazy } from "react";
import ButtonList from "./ButtonList";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const VideoContainer = lazy(() => import("./VideoContainer"));

const MainContainer = () => {
  return (
    <div className="p-5">
      <>
        <ButtonList />
        <Suspense fallback={<div className="flex justify-center text-5xl m-10 text-gray-500"><FontAwesomeIcon icon={faSpinner} spin /></div>} >
          <VideoContainer />
        </Suspense>
      </>
    </div>
  )
}

export default MainContainer;