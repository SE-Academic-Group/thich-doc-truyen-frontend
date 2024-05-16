import { searchResults } from "./mock";
import { sleep } from "./utils";

export async function getSearchResult({ keyword }: { keyword: string }) {
  // mock fetching data from server

  console.log("@mock-getSearchResult", keyword);

  await sleep(2000);

  const results = await Promise.resolve(searchResults);

  return results;
}
