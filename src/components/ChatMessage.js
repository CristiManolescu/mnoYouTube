import React from "react";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-center shadow-sm p-2">
      <img
        className="h-8"
        src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png"
        alt="user"
      />
      <span className="font-bold px-2">{name}</span>
      <span className="m-2">{message}</span>
    </div>
  );
};

export default ChatMessage;
