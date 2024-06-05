export type ErrorTextProps = Readonly<React.PropsWithChildren>;

export default function ErrorText(props: ErrorTextProps) {
  return (
    <p
      role="alert"
      aria-live="polite"
      className="text-center text-xs text-danget"
      {...props}
    />
  );
}
