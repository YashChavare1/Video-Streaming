import user from "../Assests/user.png";
import React, { useState } from 'react';

const Comment = ({ data }) => {
    const [imgSrc, setImgSrc] = useState(data.snippet.topLevelComment.snippet.authorProfileImageUrl);

    const handleImageError = () => {
        setImgSrc(user);
    };

    return (
        <div className="flex py-2 item-center shadow-md m-2 p-2 rounded-lg">
            <img
                className="w-10 h-10 rounded-full"
                src={imgSrc}
                alt="Profile Image"
                onError={handleImageError}
            />
            <div className="px-3">
                <p className="font-bold">{data.snippet.topLevelComment.snippet.authorDisplayName}</p>
                <p>{data.snippet.topLevelComment.snippet.textOriginal}</p>
            </div>
        </div>
    );
};

export default Comment;
