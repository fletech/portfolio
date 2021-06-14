import { useEffect, useState } from "react";

export const useDisplay = () => {
  const width = window.screen.width;
  const [displayWidth, setDisplayWidth] = useState(0);
  const windowWidth = (window) => {
    if (window < 600) {
      setDisplayWidth(window);
      console.log("menor");
    } else {
      setDisplayWidth(window);
      console.log("mayor");
    }
  };

  useEffect(() => {
    //     Promise.resolve(
    //       typeof window.IntersectionObserver !== "undefined"
    //         ? window.IntersectionObserver
    //         : import("intersection-observer") // Polyfill - For not supported browsers
    //     ).then(() => {
    //       const observer = new window.IntersectionObserver(function (entries) {
    //         const { isIntersecting } = entries[0];
    //         if (isIntersecting) {
    //           setShow(true);
    //           observer.disconnect();
    //         }
    //       });
    //       observer.observe(element.current);
    //     });
    windowWidth(width);
  }, [width]);
  return [displayWidth, windowWidth];
};
