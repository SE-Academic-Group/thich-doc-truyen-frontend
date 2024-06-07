import { APP_ERROR_CODES } from "@/lib/constants";
import { reportError } from "@/lib/error-handling";
import { ZHttpError } from "@/types/http";
import { z } from "zod";

export const parseZodSchema = async <T extends z.ZodTypeAny>(
  schema: T,
  data: unknown,
): Promise<z.infer<T>> => {
  if (process.env.NODE_ENV === "development") {
    // Throw in development so we're aware of the error
    return await schema.parseAsync(data);
  }

  const parsed = await schema.safeParseAsync(data);

  if (!parsed.success) {
    const loggedData = Array.isArray(data) ? data.at(0) : data;
    const err = new Error();
    err.name = APP_ERROR_CODES.MISS_SHAPED_SCHEMA;
    err.message = [
      `Miss-shaped data received from server.`,
      `@${schema.description}`,
      `Received: ${JSON.stringify(loggedData)}`,
    ].join("\n");

    reportError(err);

    return data;
  }

  return parsed.data;
};

export const parseHttpErrorSchema = async (data: unknown) =>
  await parseZodSchema(ZHttpError, data);
