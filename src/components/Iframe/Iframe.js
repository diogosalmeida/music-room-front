function Iframe() {
  return (
    <div className="content">
      <iframe
        title="Video"
        width="560"
        height="315"
        src="https://www.youtube.com/embed/videoseries?list=PLx0sYbCqOb8TBPRdmBHs5Iftvv9TPboYG"
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
      />
    </div>
  );
}

export default Iframe;
