import { redirect } from "next/navigation";

export async function searchAction(formData: FormData) {
  "use server";

  const searchQuery = formData.get("search-input");

  if (searchQuery) {
    // TODO: trim whitespace
    const beautifiedSlug = searchQuery.toString().replace(/ /g, "+");
    redirect(`/tim-kiem?q=${beautifiedSlug}`);
  }
}
