import { Suspense, lazy, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import { YOUTUBE_API_LIVE_COMMENTS, YOUTUBE_COMMENTS_API } from "../utils/constants";
import { addComments } from "../utils/commentSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
const LiveChat = lazy(() => import("./LiveChat"));
const RelatedVideosList = lazy(() => import("./RelatedVideosList"));

const WatchPage = () => {
    const [searchParams] = useSearchParams();
    const [comments, setComments] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(closeMenu());
    }, [dispatch]);

    useEffect(() => {
        videoComments(searchParams.get("v"))
    }, [searchParams.get("v")]);
    
    const videoComments = async (videoId) => {
        try {
            const data = await fetch(YOUTUBE_COMMENTS_API + videoId);
            const json = await data.json();
            setComments(json.items);
            dispatch(addComments(json.items));
        } catch (error) {
            return;
        }
    };
    

    return (
        <div className="relative">
            <div className="p-5">
                <div className="flex justify-between">
                    <div className="w-[62vmax] h-[70vmin] relative">
                        <iframe
                            className="rounded-xl w-full h-full"
                            src={"https://www.youtube.com/embed/" + searchParams.get("v")}
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        />
                        {
                            comments && <CommentsContainer comments={comments} />
                        }
                    </div>
                    <div className="w-[30vmax] h-[70vmin] relative">
                        <Suspense fallback={<div className="flex justify-center text-3xl m-10 text-gray-500"><FontAwesomeIcon icon={faSpinner} spin /></div>} >
                            <LiveChat />
                            <RelatedVideosList />
                        </Suspense>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WatchPage;