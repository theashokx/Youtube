import React from "react";

const ChatMessages = ({ name, message }) => {
  return (
    <div className="flex items-center gap-2 p-2 hover:bg-gray-50 rounded-md cursor-pointer">
      <img
        className="h-8 w-8 rounded-full"
        alt="user-icon"
        src={
          "https://marketplace.canva.com/Dz63E/MAF4KJDz63E/1/tl/canva-user-icon-MAF4KJDz63E.png"
        }
      />

      <div className="flex items-center gap-2">
        <span className="text-sm font-semibold text-gray-800">{name}</span>
        <span className="text-sm text-gray-800">{message} </span>
      </div>
    </div>
  );
};

export default ChatMessages;
