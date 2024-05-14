import Breadcrumbs from "@/ui/layout/breadcrumbs";

export default function BreadcrumbsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Breadcrumbs />
      {children}
    </div>
  );
}
