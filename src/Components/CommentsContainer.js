import CommentsList from "./CommentsList";

const CommentsContainer = ({comments}) => {
    return (
        <div className="mt-5 bg-gray-200 rounded-lg p-2 shadow-sm9 w-[62vmax] h-[70vmin] overflow-y-scroll pb-3">
            <h1 className="text-2xl font-bold mb-3">Comments: </h1>
            <CommentsList comments={comments} />
        </div>
    )
}

export default CommentsContainer;