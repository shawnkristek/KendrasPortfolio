
export default function Video({videoUrl, ...props }) {
  return (
    <div className={`relative w-full overflow-hidden ${props.className}`}>
      <iframe
        className="w-full aspect-video"
        src={videoUrl + "?rel=0"}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
}
