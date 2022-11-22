export default function Video() {
  return (
    <div className="flex justify-center align-middle">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/ZVuToMilP0A"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
}
