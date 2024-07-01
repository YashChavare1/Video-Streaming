export const YOUTUBE_API_MOST_POPULAR = "https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" + process.env.REACT_APP_YOUTUBE_API_KEY;

export const YOUTUBE_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=10&regionCode=IN&key=" + process.env.REACT_APP_YOUTUBE_API_KEY;

export const YOUTUBE_SEARCH_API = "https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const YOUTUBE_COMMENTS_API = "https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&maxResults=20&key=" + process.env.REACT_APP_YOUTUBE_API_KEY + "&videoId=";

export const LIVE_CHAT_LIMIT = 40;