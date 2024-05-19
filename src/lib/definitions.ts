// TODO: use `zod` for type validation

export type Breadcrumb = {
  label: string;
  href: string;
};

export type StorySearchResult = {
  title: string;
  author: string;
  image: string;
  url: string;
  nchapter: number;
};

export type StoryDetail = {
  title: string;
  author: string;
  image: string;
  url: string;
  description: string;
  genres: string[];
  nchapter: number;
};

export type StoryChapter = {
  title: string;
  url: string;
  index: number;
};

export type ReactSVGIconProps = React.SVGProps<SVGSVGElement>;

export type SearchParams = { [key: string]: string | string[] | undefined };

export type HttpError = {
  HttpStatus: number;
  errorCode: string;
  reason: string;
};

export type HttpMetadata = {
  pluginName: string;
  currentPage: number;
  maxPage: number;
};

export type HttpResponse<D = {}, E = HttpError, M = Record<string, unknown>> = {
  data: D | undefined;
  error: E | undefined;
  metadata: M;
};

export type StoryPlugin = {
  pluginName: string;
  pluginUrl: string;
};
