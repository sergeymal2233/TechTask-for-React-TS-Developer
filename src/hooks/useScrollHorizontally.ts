import { WheelEvent, useEffect, useRef } from "react";

export const useScrollHorizontally = <T extends HTMLElement>() => {
  const scrollElementRef = useRef<T>(null);

  const handleMouseWheel = (e: WheelEvent) => {
    const scrollElement = scrollElementRef.current as T;
    const scrollPosition = scrollElement.scrollLeft; 
    const delta = e.deltaY; 
    scrollElement.scrollLeft = scrollPosition + delta;
  };

  useEffect(() => {
    const scrollElement = scrollElementRef.current as T;
  
    const removeBodyScroll = (e: globalThis.WheelEvent) => {
      e.preventDefault()
    }

    const handleMouseEnter = () => {
      window.addEventListener("wheel", removeBodyScroll, { passive: false });
    };

    const handleMouseLeave = () => {
      window.removeEventListener("wheel", removeBodyScroll);
    };

    scrollElement.addEventListener("mouseenter", handleMouseEnter);
    scrollElement.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      scrollElement.removeEventListener("mouseenter", handleMouseEnter);
      scrollElement.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("wheel", removeBodyScroll);
    };
  }, []);

  return {
    scrollElementRef, 
    handleMouseWheel
  }
}