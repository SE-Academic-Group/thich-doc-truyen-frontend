import { reportError } from "../lib/error-handling";
import { useEffect } from "react";

export const useErrorReporting = (error: Error) => {
  useEffect(() => {
    reportError(error);
  }, [error]);
};
