import { useEffect, useState } from "react";

const ImagePanel = ({ src, alt }) => {
  const [displayedSrc, setDisplayedSrc] = useState(src);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    // Start fade out
    setFade(false);
    // After fade out, change image and fade in
    const timeout = setTimeout(() => {
      setDisplayedSrc(src);
      setFade(true);
    }, 200); // 200ms fade out, adjust as needed

    return () => clearTimeout(timeout);
  }, [src]);

  return (
    <div className="flex-1 flex justify-center items-center h-full">
      <img
        src={displayedSrc}
        alt={alt}
        className={`
          w-full max-w-full mt-8 md:mt-0 md:w-[496px] md:max-w-[496px] rounded-lg
          transition-opacity duration-300
          ${fade ? "opacity-100" : "opacity-0"}
        `}
        style={{ transitionProperty: "opacity" }}
      />
    </div>
  );
};

export default ImagePanel; 