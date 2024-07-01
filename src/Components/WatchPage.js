import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";
import { YOUTUBE_COMMENTS_API } from "../utils/constants";
import RelatedVideosList from "./RelatedVideosList";
import { addComments } from "../utils/commentSlice";

const WatchPage = () => {
    const [searchParams] = useSearchParams();
    const [comments, setComments] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(closeMenu());
        videoComments(searchParams.get("v"))
    }, [dispatch]);

    useEffect(() => {
        videoComments(searchParams.get("v"))
    }, [searchParams.get("v")]); 

    const videoComments = async (videoId) => {
        const data = await fetch(YOUTUBE_COMMENTS_API + videoId);
        const json = await data.json();
        setComments(json.items);
        dispatch(addComments(json.items))
    }

    return (
        // <div className="p-5">
        //     <div className="flex justify-between">
        //         <div className="w-[62vmax] h-[70vmin]">
        //             <iframe
        //                 className="rounded-xl w-full h-full"
        //                 src={"https://www.youtube.com/embed/" + searchParams.get("v")}
        //                 title="YouTube video player"
        //                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        //                 referrerPolicy="strict-origin-when-cross-origin"
        //                 allowFullScreen
        //             />
        //             <CommentsContainer />
        //         </div>
        //         <div className="w-[30vmax] h-[70vmin]">
        //             <LiveChat />
        //         </div>
        //     </div>
        // </div>

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
                        <LiveChat />
                        <RelatedVideosList />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WatchPage;