type YouTubeEmbedProps = {
  id: string
};

const YouTubeEmbed: React.FC<YouTubeEmbedProps> = (props) => {

  return (
    <div className="YouTubeEmbed">
      {
        <iframe 
        src={`https://www.youtube.com/embed/${props.id}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="m-auto w-5/6 lg:w-3/5 aspect-video"
        ></iframe> 
      }
    </div>
  );
};

export default YouTubeEmbed;