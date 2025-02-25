import { useState, useEffect } from "react";

export default function Iframer({ embed, title }) {
  const [videoUrl, setVideoUrl] = useState("");

  useEffect(() => {
    setVideoUrl(`https://www.youtube-nocookie.com/embed/${embed}`);
  }, [embed]);

  return (
    videoUrl && (
      <iframe
        loading="lazy"
        width="100%"
        height="100%"
        src={videoUrl}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="rounded-lg shadow-lg mb-4"
      ></iframe>
    )
  );
}
