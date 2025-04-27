import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { cacheResults } from "../utils/searchSlice";
import { YOUTUBE_SEARCH_API, YOUTUBE_SEARCH_RESULT_API } from "../utils/contstant";

const Head = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestion, setSuggestion] = useState([]);
  const [showSuggestionPannel, setShowSuggestionPannel] = useState(false);
  const [videos, setVideos] = useState([]);

  const searchCache = useSelector((store) => store.search);

  const getSearchSuggestion = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestion(json[1]);
    // if not in cache add that searched result in cache ;
    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestion(searchCache[searchQuery]);
      } else {
        getSearchSuggestion();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  const handleSuggestionClick = async (searchTerm) => {
    setSearchQuery(searchTerm);
    setShowSuggestionPannel(false);

    // Fetch Videos related to clicked suggestion
    const res = await fetch(YOUTUBE_SEARCH_RESULT_API(searchTerm));

    const data = await res.json();
    setVideos(data.items);
  };

  return (
    <div className="sticky top-0 z-50 bg-white grid grid-flow-col p-5 shadow-lg">
      {/* Logo + Menu */}
      <div className="flex col-span-1 pt-2">
        <img
          alt="menu"
          className="h-8 cursor-pointer"
          onClick={toggleMenuHandler}
          src="https://cdn-icons-png.flaticon.com/512/56/56763.png" // simple menu icon
        />
        <a href="/">
          <img
            alt="youtube-logo"
            className="h-8 w-40 mx-2"
            src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
          />
        </a>
      </div>
      {/* Search box */}
      <div className="col-span-10 px-10 relative">
        <div>
          <input
            className="w-1/2 border border-gray-800 px-5 py-2 rounded-l-full"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestionPannel(true)}
            onBlur={() => setShowSuggestionPannel(false)}
            placeholder="Search"
          />
          <button className="border border-gray-800 py-2 px-5 rounded-r-full bg-gray-100">
            🔍
          </button>
        </div>

        {/* Suggestion Panel */}
        {showSuggestionPannel && suggestion.length > 0 && (
          <div className="absolute bg-white w-[36rem] mt-1 shadow-lg rounded-2xl z-50">
            <ul>
              {suggestion.map((s) => (
                <li
                  key={s}
                  onMouseDown={() => handleSuggestionClick(s)}
                  className="py-2 px-4 flex items-center gap-3 shadow-sm hover:bg-gray-100 cursor-pointer"
                >
                  🔍 {s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Videos Section */}
      <div className="col-span-12 mt-8 px-20">
        {videos.length > 0 && (
          <div className="grid grid-cols-3 gap-5">
            {videos.map((video) => (
              <div key={video.id.videoId} className="border p-3 rounded-lg shadow-md">
                <iframe
                  width="100%"
                  height="200"
                  src={`https://www.youtube.com/embed/${video.id.videoId}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title={video.snippet.title}
                />
                <h3 className="font-bold text-sm mt-2">{video.snippet.title}</h3>
                <p className="text-xs text-gray-500">{video.snippet.channelTitle}</p>
              </div>
            ))}
          </div>
        )}

      </div>
       {/* User Profile */}
       <div className="col-span-1">
        <img
          alt="user-logo"
          className="h-8"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        />
      </div>
    </div>
  );
};

export default Head;
