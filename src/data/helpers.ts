import { z } from "zod";

export const parseZodSchema = <T>(schema: z.ZodType<T>, data: unknown): T => {
  if (process.env.NODE_ENV === "development") {
    // Throw in development so we're aware of the error
    return schema.parse(data);
  }

  const parsed = schema.safeParse(data);

  if (!parsed.success) {
    // Log to service to be informed
    console.log(parsed.error, schema.description);
    throw new Error("SERVER_ERROR: Miss-shaped data received from server.");
  }

  return parsed.data;
};
