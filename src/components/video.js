
export default function Video({videoUrl, ...props }) {
  return (
    <div className={`${props.className} flex justify-center align-middle`}>
      <iframe
        className="w-full aspect-video"
        src={videoUrl}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
}
