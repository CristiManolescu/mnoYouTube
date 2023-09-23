import VideoCard from "./VideoCard";
import useVideos from "../utils/useVideos";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const videos = useVideos();

  return (
    <div className="flex flex-wrap">
      {videos.map((video) => (
        <Link to={"/watch?v=" + video.id}>
          <VideoCard key={video.id} info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
