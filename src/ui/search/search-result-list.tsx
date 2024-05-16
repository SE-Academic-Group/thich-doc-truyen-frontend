import { getSearchResult } from "@/lib/data";
import Section from "../section";
import Image from "next/image";

export default async function SearchResultList({
  keyword,
}: {
  keyword: string;
}) {
  const searchResult = await getSearchResult({ keyword });

  return (
    <Section title="Kết quả tìm kiếm">
      <ul>
        {searchResult.map((result) => (
          <li key={result.url}>
            <a href={result.url}>
              <Image
                src={result.image}
                alt={result.title}
                width={200}
                height={200}
                className="size-[200px]"
              />
              <h3>{result.title}</h3>
              <p>{result.author}</p>
              <p>{result.nchapter} chương</p>
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}
