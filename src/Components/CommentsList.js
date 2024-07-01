import Comment from "./Comment";

const CommentsList = ({ comments }) => {
    return comments.map((comment, index) =>
        <div key={index}>
            <Comment key={index} data={comment} />
            <div className="ml-10 pl-2 rounded-sm border-l-2 border-gray-500">
                <CommentsList comments={comment.replies} />
            </div>
        </div>

    );
};

export default CommentsList;