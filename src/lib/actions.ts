import { redirect } from "next/navigation";

export async function searchAction(formData: FormData) {
  "use server";

  const searchQuery = formData.get("search-input");

  if (searchQuery) {
    redirect(`/tim-kiem?q=${searchQuery}`);
  }
}
