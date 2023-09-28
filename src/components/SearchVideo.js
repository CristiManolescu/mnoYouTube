import React from "react";

const SearchVideo = ({ data }) => {
  const {
    id: { kind },
    snippet: {
      channelTitle,
      description,
      publishTime,
      thumbnails: {
        high: { url },
      },
      title,
    },
  } = data;
  return (
    <div className="flex my-2 shadow-lg rounded-lg">
      <div className="m-2">
        <img className="rounded-2xl w-80" alt="thumbnail" src={url} />
      </div>
      <div className="m-2">
        <h1 className="text-lg font-bold">{title}</h1>
        {kind === "youtube#video" && <p>X views - {publishTime}</p>}
        <span className="flex">
          <img
            className="w-5 mr-2"
            alt="logo"
            src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png"
          ></img>
          <p>{channelTitle}</p>
        </span>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default SearchVideo;
