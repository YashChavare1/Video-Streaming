import { useEffect } from "react";
import { YOUTUBE_API_MOST_POPULAR } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { storeVideos } from "../utils/VideoSlice";

const VideoContainer = () => {
  const dispatch = useDispatch();
  const videos = useSelector(store => store.videos.videos);

  useEffect(() => {
    if (!videos.length) {
      getVideos();
    }
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_API_MOST_POPULAR);
    const json = await data.json();
    dispatch(storeVideos(json.items));
  }

  if (!videos) return null;

  return (
    <div className="grid grid-cols-1 fixed pb-24 mr-5 md:grid md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-4 mt-2 mb-2 flex-wrap h-[89vmin] overflow-y-scroll">
      {
        videos?.map((video) => (
          <Link to={"/watch?v=" + video.id} key={video.id}>
            <VideoCard info={video} />
          </Link>
        ))
      }
    </div>
  )
}

export default VideoContainer;