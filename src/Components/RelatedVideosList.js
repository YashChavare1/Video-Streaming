import { useDispatch, useSelector } from "react-redux";
import VideoCard from "./VideoCard";
import { useEffect } from "react";
import { YOUTUBE_API_MOST_POPULAR } from "../utils/constants";
import { storeVideos } from "../utils/VideoSlice";
import { Link } from "react-router-dom";

const RelatedVideosList = () => {
    const videos = useSelector(store => store.videos.videos);
    const dispatch = useDispatch();

    useEffect(() => {
        if(!videos.length) {
            getVideos();
        }
    }, [videos]);

    const getVideos = async () => {
        const data = await fetch(YOUTUBE_API_MOST_POPULAR);
        const json = await data.json();
        dispatch(storeVideos(json.items));
      }

    return (
        <div className='flex mt-5 flex-col justify-between shadow-lg w-full h-full ml-6'>
            <div className="h-[70vmin] w-full bg-slate-100 rounded-xl flex overflow-y-scroll p-3 flex-col items-center">
                {videos.map((video) => (
                    <Link to={"/watch?v=" + video.id} key={video.id} className="mb-7 shadow-md bg-white rounded-lg p-1">
                        <VideoCard info={video} viewCount={false} />
                    </Link>
                ))}
            </div>
        </div>
    )
}



export default RelatedVideosList;