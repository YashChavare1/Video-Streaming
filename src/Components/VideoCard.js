import { useSelector } from "react-redux";

const VideoCard = ({ info, viewCount }) => {
    const isMenuOpen = useSelector(store => store.app.isMenuOpen);
    const { snippet, statistics } = info;
    const { channelTitle, title, thumbnails } = snippet;

    function formatViewCount(count) {
        if (count >= 1000000) {
            return Math.floor(count / 1000000) + 'M';
        } else if (count >= 1000) {
            return Math.floor(count / 1000) + 'K';
        } else {
            return count.toString();
        }
    }

    function truncateTitle(title) {
        const maxLength = 55;
        if (title.length > maxLength) {
            return title.slice(0, maxLength) + '...';
        } else {
            return title;
        }
    }

    function timePeriod(publishedAt) {
        const publishedDate = new Date(publishedAt);
        const now = new Date();

        // Calculate the difference in milliseconds
        const diffMs = now - publishedDate;

        // Convert milliseconds to seconds, minutes, hours, and days
        const diffSeconds = Math.floor(diffMs / 1000);
        const diffMinutes = Math.floor(diffSeconds / 60);
        const diffHours = Math.floor(diffMinutes / 60);
        const diffDays = Math.floor(diffHours / 24);

        if (diffSeconds < 60) {
            return `${diffSeconds} seconds ago`;
        } else if (diffMinutes < 60) {
            return `${diffMinutes} minutes ago`;
        } else if (diffHours < 24) {
            return `${diffHours} hours ago`;
        } else if (diffDays < 30) {
            return `${diffDays} days ago`;
        } else if (diffDays < 60) {
            return "1 month ago";
        } else if (diffDays < 365) {
            const monthsAgo = Math.floor(diffDays / 30);
            return `${monthsAgo} months ago`;
        } else if (diffDays < 730) {
            return "1 year ago";
        } else {
            const yearsAgo = Math.floor(diffDays / 365);
            return `${yearsAgo} years ago`;
        }
    }

    return (
        <div className={isMenuOpen ? `w-[20vmax] h-80 shadow-lg box-border rounded-lg cursor-pointer` : `w-[23.5vmax]`}>
            <img
                className="rounded-lg w-full h-44"
                src={thumbnails.medium.url}
                alt="thumbnail"
                loading="lazy"
            />
            <ul className="p-2">
                <li className="font-bold py-2">{truncateTitle(title)}</li>
                <li className="text-gray-500 font-normal hover:text-black" title={channelTitle}>{channelTitle}</li>
                {
                    !viewCount && <li className="text-gray-500 font-normal">{formatViewCount(statistics.viewCount)} views • {timePeriod(snippet.publishedAt)}</li>
                }
            </ul>
        </div>
    )
}

export default VideoCard;