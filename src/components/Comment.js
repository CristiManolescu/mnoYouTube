import React from "react";

const Comment = ({ data }) => {
  const { name, text } = data;

  return (
    <div className="flex shadow-lg bg-gray-100 p-2 rounded-lg my-2">
      <img
        className="w-12 h-12"
        src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png"
        alt="user"
      />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Comment;
