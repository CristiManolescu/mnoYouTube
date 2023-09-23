import VideoCard from "./VideoCard";
import useVideos from "../utils/useVideos";

const VideoContainer = () => {
  const videos = useVideos();

  return (
    <div className="flex flex-wrap">
      {videos.map((video) => (
        <VideoCard key={video.id} info={video} />
      ))}
    </div>
  );
};

export default VideoContainer;
