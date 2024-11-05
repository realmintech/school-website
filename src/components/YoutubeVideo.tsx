export default function YouTubeVideo() {
  return (
    <>
      <div className="video-container">
        <iframe
          width="100%"
          height="315"
          frameBorder="0"
          src="https://www.youtube.com/embed/kDNsjKXYWUE"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </>
  );
}
