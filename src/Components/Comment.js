import React, { useState } from 'react';
import user from "../Assests/user.png";

const Comment = ({ data }) => {
    const [imgSrc, setImgSrc] = useState(data.snippet.topLevelComment.snippet.authorProfileImageUrl || user);
    const [message, setMessage] = useState(data.snippet.topLevelComment.snippet.textOriginal);
    const [showFullMessage, setShowFullMessage] = useState(false);

    const handleImageError = () => {
        setImgSrc(user);
    };

    const truncatedMessage = message.length > 220 ? `${message.slice(0, 220)}...` : message;

    const handleShowFullMessage = () => {
        setShowFullMessage(!showFullMessage);
    };

    return (
        <div className="flex py-2 items-center shadow-md m-2 p-2 rounded-lg">
            <img
                className="w-10 h-10 rounded-full"
                src={imgSrc}
                alt="Profile"
                onError={handleImageError}
            />
            <div className="px-3">
                <p className="font-bold">{data.snippet.topLevelComment.snippet.authorDisplayName}</p>
                {showFullMessage ? (
                    <p>{message} <span className="text-blue-600 font-bold cursor-pointer" onClick={handleShowFullMessage}>Show Less</span></p>
                ) : (
                    <p>{truncatedMessage} {message.length > 220 && <span className="text-blue-600 font-bold cursor-pointer" onClick={handleShowFullMessage}>Show More</span>}</p>
                )}
            </div>
        </div>
    );
};

export default Comment;
