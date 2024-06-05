import { z } from "zod";

const sanitizeSearchQuery = (query: string) =>
  query.trim().replaceAll(" ", "+");

export const ZSearchQuery = z
  .string()
  .min(3, {
    message: "Từ khóa tìm kiếm phải có ít nhất 3 ký tự",
  })
  .transform(sanitizeSearchQuery);
