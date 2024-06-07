import { logToErrorReportingService } from "./error-handling";
import { useCallback, useEffect, useState } from "react";
import { useCookie, useSearchParam } from "react-use";

export { useCookies } from "react-cookie";
export const useLogToErrorReporting = (error: Error) => {
  useEffect(() => {
    logToErrorReportingService(error);
  }, [error]);
};

export { useAsync } from "react-use";

type TUseScrollToTopParams = {
  threshold?: number;
};

const DEFAULT_THRESHOLD = 300;

export const useScrollToTop = (params: TUseScrollToTopParams) => {
  const { threshold = DEFAULT_THRESHOLD } = params;
  const [isShown, setIsShown] = useState(false);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    const handleShowScroll = () => {
      const scrolledFromTop = window.scrollY;
      setIsShown(() => scrolledFromTop > threshold);
    };

    window.addEventListener("scroll", handleShowScroll);
    handleShowScroll();

    return () => {
      window.removeEventListener("scroll", handleShowScroll);
    };
  }, [threshold]);

  return { isShown, scrollToTop };
};

export const usePluginName = () => {
  const [pluginName] = useCookie("pluginName");
  const currentPlugin =
    useSearchParam("currentPlugin") ?? pluginName ?? "default";

  return currentPlugin;
};
