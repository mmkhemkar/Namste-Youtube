import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useParams, useSearchParams } from "react-router-dom";

const WatchPage = () => {
  const dispatch = useDispatch();

  const [searchParams, setSearchParams] = useSearchParams();

  const getVideoId = searchParams.get("v");

  console.log("searchParams", getVideoId);

  useEffect(() => {
    dispatch(closeMenu());
  }, [dispatch]);

  return (
    <div className="py-5">
      <iframe
        width="1200"
        height="600"
        //src="https://www.youtube.com/embed/pAsmrKyMqaA?si=YbLSblnYA7Oghnjb"
        src={"https://www.youtube.com/embed/"+ searchParams.get("v")} 
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default WatchPage;
