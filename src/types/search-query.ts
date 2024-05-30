import { z } from "zod";

export const sanitizeSearchQuery = (query: string) =>
  query.trim().replaceAll(" ", "+");

export const searchQuerySchema = z
  .string()
  .min(3, {
    message: "Từ khóa tìm kiếm phải có ít nhất 3 ký tự",
  })
  .transform(sanitizeSearchQuery);

export type SearchQuery = z.infer<typeof searchQuerySchema>;
