import React, { useEffect, useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const addHover = () => setHovering(true);
    const removeHover = () => setHovering(false);

    document.addEventListener("mousemove", moveCursor);

    const hoverElements = document.querySelectorAll("a, button, .cursor-hover");
    hoverElements.forEach((el) => {
      el.addEventListener("mouseenter", addHover);
      el.addEventListener("mouseleave", removeHover);
    });

    return () => {
      document.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <div
      className={`
        fixed top-0 left-0 pointer-events-none z-[9999]
        rounded-full transition-all duration-300 ease-out
        ${hovering ? "w-16 h-16 bg-purple-500/20" : "w-8 h-8 bg-purple-500/30"}
      `}
      style={{
        transform: `translate(${position.x - 16}px, ${position.y - 16}px)`
      }}
    />
  );
};

export default CustomCursor;