import { useEffect } from "react";

export const logToErrorReportingService = (error: Error) => {
  console.log("logging service");
  console.error(error.toString());
};

export const useLogToErrorReporting = (error: Error) => {
  useEffect(() => {
    logToErrorReportingService(error);
  }, [error]);
};
