export const logToErrorReportingService = (error: Error) => {
  console.log("logging service");
  console.error(error.toString());
};
