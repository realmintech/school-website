
export default function YouTubeVideo() {
  return (
    <>
      <div className="video-container">
        <video className="object-cover w-full h-[300px]" controls>
          <source src="/assests/fruit.mp4" type="video/mp4" />
        </video>
      </div>
    </>
  );
}
