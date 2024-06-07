import { useCallback, useEffect, useState } from "react";

const DEFAULT_THRESHOLD = 300;

export const useScrollToTop = () => {
  const [isShown, setIsShown] = useState(false);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    const handleShowScroll = () => {
      const scrolledFromTop = window.scrollY;
      setIsShown(() => scrolledFromTop > DEFAULT_THRESHOLD);
    };

    window.addEventListener("scroll", handleShowScroll);
    handleShowScroll();

    return () => {
      window.removeEventListener("scroll", handleShowScroll);
    };
  }, []);

  return { isShown, scrollToTop };
};
