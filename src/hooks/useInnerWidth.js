import { useState, useEffect } from "react";

const useInnerWidth = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const listener = () => {
      const windowInnerWidth = window.innerWidth;
      if (windowInnerWidth !== screenWidth) {
        setScreenWidth(windowInnerWidth);
      }
    };
    window.addEventListener("resize", listener);
    return () => window.removeEventListener("resize", listener);
  }, [screenWidth]);

  if (screenWidth < 768) return "mobile";
  if (screenWidth < 1200) return "tablet";
  return "desktop";
};

export { useInnerWidth };
