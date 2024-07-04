export const YOUTUBE_API_MOST_POPULAR = "https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" + process.env.REACT_APP_YOUTUBE_API_KEY;

export const YOUTUBE_API_SHORTS = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&regionCode=IN&chart=mostPopular&maxResults=28&key=${process.env.REACT_APP_YOUTUBE_API_KEY}&q=#Shorts`;

export const YOUTUBE_API_LIVE_VIDEOS = `https://www.googleapis.com/youtube/v3/search?part=snippet&eventType=live&maxResults=28&regionCode=IN&chart=mostPopular&type=video&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`

export const YOUTUBE_CONTENT_SPECIFIED = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&type=video&key=${process.env.REACT_APP_YOUTUBE_API_KEY}&q=`;

export const YOUTUBE_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=10&regionCode=IN&key=" + process.env.REACT_APP_YOUTUBE_API_KEY;

export const YOUTUBE_SEARCH_API = "https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const YOUTUBE_COMMENTS_API = "https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&maxResults=20&key=" + process.env.REACT_APP_YOUTUBE_API_KEY + "&videoId=";

export const YOUTUBE_API_LIVE_COMMENTS=`https://www.googleapis.com/youtube/v3/liveChat/messages?part=snippet&key=${process.env.REACT_APP_YOUTUBE_API_KEY}&liveChatId=`;

export const LIVE_CHAT_LIMIT = 40;