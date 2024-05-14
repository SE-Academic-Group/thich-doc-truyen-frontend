type SectionProps = React.ComponentProps<"section"> & {
  title: string;
};

export default function Section({ title, children, ...props }: SectionProps) {
  return (
    <section {...props}>
      <h2 className="mb-5 text-xl font-semibold uppercase underline underline-offset-4">
        {title}
      </h2>
      {children}
    </section>
  );
}
