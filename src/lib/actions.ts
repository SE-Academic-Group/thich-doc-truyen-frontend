import { redirect } from "next/navigation";

export type ServerAction<T = FormData> = ((data: T) => Promise<void>) &
  Function;

export async function searchAction(formData: FormData) {
  "use server";

  const searchQuery = formData.get("search-input");

  if (searchQuery) {
    const beautifiedSlug = searchQuery.toString().trim().replace(/ /g, "+");
    redirect(`/tim-kiem?q=${beautifiedSlug}`);
  }
}
