import React, { useEffect, useState } from "react";
import ChatMessages from "./ChatMessages";
import { useDispatch, useSelector } from "react-redux";
import { addMessages } from "../utils/chatSlice";
import { GOOGLE_API_KEY } from "../utils/constant";
import { generateRandomName } from "../utils/helper";
import { generateRandomMessage } from "../utils/helper";

const LiveChat = () => {
  const [liveChat, setLiveChat] = useState();
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const timer = setInterval(() => {
      dispatch(
        addMessages({
          name: generateRandomName(),
          message: generateRandomMessage(),
        })
      );
    }, 2000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="mt-2 border border-gray-300 rounded-lg bg-white h-[400px] flex flex-col">
      <div className="flex-1 flex flex-col-reverse overflow-y-auto p-2">
        {chatMessages.map((c, index) => (
          <ChatMessages key={index} name={c.name} message={c.message} />
        ))}
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();

          dispatch(
            addMessages({
              name: "Ashok",
              message: liveChat,
            })
          );
          setLiveChat("");
        }}
      >
        <div className="border-t border-gray-300 p-2 gap-2">
          <input
            type="text"
            placeholder="Say something..."
            value={liveChat}
            onChange={(e) => setLiveChat(e.target.value)}
            className="w-2/3 border border-gray-300 rounded-full px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
          <button className="mx-2 px-4 py-2 rounded-xl bg-gradient-to-r from-red-500 to-pink-500 text-white font-semibold shadow-md hover:from-red-600 hover:to-pink-600 hover:scale-105 active:scale-95 transition-transform duration-200">
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default LiveChat;
