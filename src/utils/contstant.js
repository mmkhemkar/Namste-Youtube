const API_KEY = "AIzaSyBMoOs-7EQtIYYzxyO79nHMNfLPx4TqUcg"
// export const YOUTUBE_VIDEO_API = `https://youtube.googleapis.com/youtube/v3/videos?key=${API_KEY}`;
export const YOUTUBE_VIDEO_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=50&regionCode=IN&key=${API_KEY}`;
//export const YOUTUBE_VIDEO_API = ``;

export const YOUTUBE_SEARCH_API = "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";


export const YOUTUBE_SEARCH_RESULT_API = (query) => 
    `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&key=${API_KEY}&maxResults=20`;

