import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";
import { YOUTUBE_COMMENTS_API } from "../utils/constants";

const WatchPage = () => {
    const [searchParams] = useSearchParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(closeMenu());
    }, [dispatch]);

    const videoComments = async (videoId) => {
        const data = await fetch(YOUTUBE_COMMENTS_API + videoId);
        const json = await data.json();
        console.log(json);
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
                        <CommentsContainer />
                    </div>
                    <div className="w-[30vmax] h-[70vmin] relative">
                        <LiveChat />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WatchPage;