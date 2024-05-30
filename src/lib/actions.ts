"use server";

import { searchQuerySchema } from "@/types/search-query";
import { redirect } from "next/navigation";

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
