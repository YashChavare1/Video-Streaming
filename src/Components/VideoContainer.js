import { useEffect, useState } from "react";
import { YOUTUBE_API_LIVE_VIDEOS, YOUTUBE_API_MOST_POPULAR, YOUTUBE_API_SHORTS } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { storeLiveVideos, storeShorts, storeVideos } from "../utils/VideoSlice";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const location = useLocation();
  const dispatch = useDispatch();

  const allVideos = useSelector((store) => store.videos.videos);
  const shorts = useSelector((store) => store.videos.shorts);
  const liveVideos = useSelector((store) => store.videos.live);

  useEffect(() => {
    async function fetchData() {
      if (location.pathname === "/") {
        if (!allVideos.length) {
          await fetchVideos();
        } else {
          setVideos(allVideos);
        }
      } else if (location.pathname === "/shorts") {
        if (!shorts.length) {
          await fetchShorts();
        } else {
          setVideos(shorts);
        }
      } else if (location.pathname === "/live") {
        if (!liveVideos.length) {
          await fetchLiveVideos();
        } else {
          setVideos(liveVideos);
        }
      }
    }

    fetchData();
  }, [location.pathname, allVideos, shorts, liveVideos]);

  const fetchVideos = async () => {
    const response = await fetch(YOUTUBE_API_MOST_POPULAR);
    const data = await response.json();
    dispatch(storeVideos(data.items));
    setVideos(data.items);
  };

  const fetchShorts = async () => {
    const response = await fetch(YOUTUBE_API_SHORTS);
    const data = await response.json();
    dispatch(storeShorts(data.items));
    setVideos(data.items);
  };

  const fetchLiveVideos = async () => {
    const response = await fetch(YOUTUBE_API_LIVE_VIDEOS);
    const data = await response.json();
    dispatch(storeLiveVideos(data.items));
    setVideos(data.items);
  };

  if (!videos.length) return <div className="flex justify-center text-5xl m-10 text-gray-500"><FontAwesomeIcon icon={faSpinner} spin /></div>

  return (
    <div className="grid grid-cols-1 fixed pb-24 mr-5 md:grid md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-4 mt-2 mb-2 flex-wrap h-[89vmin] overflow-y-scroll">
      {videos.map((video) => (
        <Link key={video.id.videoId ? video.id.videoId : video.id} to={`/watch?v=${video.id.videoId ? video.id.videoId : video.id}`}>
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;