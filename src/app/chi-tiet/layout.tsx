export default function Layout({
  story_chapters,
  story_text,
}: Readonly<{
  story_chapters: React.ReactNode;
  story_text: React.ReactNode;
}>) {
  return (
    <main className="container space-y-8 py-4">
      {story_text}
      {story_chapters}
    </main>
  );
}
