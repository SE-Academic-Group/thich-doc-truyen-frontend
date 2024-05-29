export type LayoutProps = Readonly<{
  story_chapters: React.ReactNode;
  story_text: React.ReactNode;
}>;

export default function Layout({ story_chapters, story_text }: LayoutProps) {
  return (
    <main className="container space-y-8 py-4">
      {story_text}
      {/* {story_chapters} */}
    </main>
  );
}
