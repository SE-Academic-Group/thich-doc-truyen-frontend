"use server";

import { redirect } from "next/navigation";
import { z } from "zod";

const searchQuerySchema = z
  .string()
  .min(3, {
    message: "Từ khóa tìm kiếm phải có ít nhất 3 ký tự",
  })
  .transform((value) => value.trim().replaceAll(" ", "+"));

export async function searchAction(prevState: any, formData: FormData) {
  const searchQuery = formData.get("search-input");
  const result = searchQuerySchema.safeParse(searchQuery);

  if (result.success) {
    return redirect(`/tim-kiem?q=${result.data}`);
  }

  return {
    error: result.error.format()._errors.join("; "),
  };
}
