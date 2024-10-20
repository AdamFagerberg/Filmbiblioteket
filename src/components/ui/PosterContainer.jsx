import { useEffect, useRef } from "react";

const PosterContainer = ({ children }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    const handleWheel = (e) => {
      e.preventDefault();
      container.scrollLeft += e.deltaY;
    };

    container.addEventListener("wheel", handleWheel);
    return () => container.removeEventListener("wheel", handleWheel);
  }, []);

  return (
    <ul
      className="flex flex-row overflow-x-auto no-scrollbar"
      ref={containerRef}
    >
      {children}
    </ul>
  );
};

export default PosterContainer;
