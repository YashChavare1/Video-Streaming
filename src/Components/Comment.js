import user from "../Assests/user.png";

const Comment = ({ data }) => {
    const { name, text, replies } = data;
    return (
        <div className="flex items-center py-2">
            <img
                className="w-8 h-8"
                src={user}
                alt="profile"
            />
            <div className="px-3">
                <p className="font-bold">{name}</p>
                <p>{text}</p>
            </div>
        </div>
    );
}

export default Comment;