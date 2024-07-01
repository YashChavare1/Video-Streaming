import { useEffect, useState } from "react";
import { YOUTUBE_API } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_API);
    const json = await data.json();
    setVideos(json.items);
  }

  return (
    <div className="grid grid-cols-1 fixed pb-24 mr-5 md:grid md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-4 mt-2 mb-2 flex-wrap h-[89vmin] overflow-y-scroll">
      {
        videos.map((video) => (
          <Link to={"/watch?v=" + video.id} key={video.id}>
            <VideoCard info={video} />
          </Link>
        ))
      }
    </div>
  )
}

export default VideoContainer;