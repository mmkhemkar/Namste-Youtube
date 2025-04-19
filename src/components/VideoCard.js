import React from "react";
import DATA from "../utils/data.json";

export const VideoCard = ({ info }) => {
  console.log("info",info)

  const { snippet } = info;
  const { title, thumbnails, publishedAt, channelTitle } = snippet;

  return (
    <div className="p-2 m-2 w-72 shadow-lg">
      <img className="rounded-xl" alt="card" src={thumbnails.medium.url} />
      <ul>
        <li className="font-bold py-2">{title}</li>
        <li className="font-semibold">{channelTitle}</li>
        <li className="text-sm text-gray-500">{new Date(publishedAt).toDateString()}</li>
        <li>22M views</li>
      </ul>
    </div>
  );
};

export default VideoCard;
