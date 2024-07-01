import { mockComments } from "../utils/mockComments"
import CommentsList from "./CommentsList";

const CommentsContainer = () => {
    return (
        <div className="mt-5 bg-gray-200 rounded-lg p-2 shadow-sm9 w-[62vmax]">
            <h1 className="text-2xl font-bold mb-3">Comments: </h1>
            <CommentsList comments={mockComments} />
        </div>
    )
}

export default CommentsContainer;