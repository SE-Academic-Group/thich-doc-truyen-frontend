import { useCallback, useEffect, useState } from "react";

export { useCookies } from "react-cookie";
export { useAsync } from "react-use";

export type UseScrollToTopParams = Partial<
  Readonly<{
    threshold?: number;
  }>
>;

export function useScrollToTop({ threshold = 300 }: UseScrollToTopParams) {
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const scrollCallback = () => {
      const scrolledFromTop = window.scrollY;
      setShown(() => scrolledFromTop > threshold);

      //? Up or down scroll
      //       // Initial state
      // var scrollPos = 0;
      // // adding scroll event
      // window.addEventListener('scroll', function(){
      //   // detects new state and compares it with the new one
      //   if ((document.body.getBoundingClientRect()).top > scrollPos)
      // 		document.getElementById('info-box').setAttribute('data-scroll-direction', 'UP');
      // 	else
      // 		document.getElementById('info-box').setAttribute('data-scroll-direction', 'DOWN');
      // 	// saves the new position for iteration.
      // 	scrollPos = (document.body.getBoundingClientRect()).top;
      // });
    };

    window.addEventListener("scroll", scrollCallback);

    scrollCallback();

    return () => {
      window.removeEventListener("scroll", scrollCallback);
    };
  }, [threshold]);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return { shown, scrollToTop };
}
