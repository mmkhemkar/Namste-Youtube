import React, { useEffect, useState } from "react";
import ChartMessage from "./ChartMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateNames, generateRandomString } from "../utils/healper";

const LiveChat = () => {
  const dispatch = useDispatch();
  const [liveMessages, setLiveMessages] = useState("");
  const chatMessages = useSelector((store) => store.chart.messages);

  useEffect(() => {
    const t = setInterval(() => {
      dispatch(
        addMessage({
          name: generateNames(),
          message: generateRandomString(10),
        })
      );
      console.log("API polling");
    }, 2000);

    return () => clearInterval(t);
  }, []);

  return (
    <>
      <div className="w-full h-[600px] ml-2 bg-slate-100 rounded-lg p-2 border border-black  overflow-y-scroll flex-col-reverse">
        {chatMessages.map((c, i) => (
          <ChartMessage key={i} name={c.name} message={c.message} />
        ))}
      </div>
      <form
        className="w-full ml-2 p-2 border border-black"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(addMessage({
            name :"mayur",
            message : liveMessages
          }));
          setLiveMessages("")
        }}
      >
        <input
          type="text"
          className="w-96 px-2"
          value={liveMessages}
          onChange={(e) => setLiveMessages(e.target.value)}
        />
        <button className="px-2 mx-4 background colorr bg-green-400">
          Send
        </button>
      </form>
    </>
  );
};

export default LiveChat;
