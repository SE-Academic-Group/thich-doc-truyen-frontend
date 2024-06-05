type ErrorTextProps = React.PropsWithChildren;

export default function ErrorText(props: ErrorTextProps) {
  return (
    <p
      role="alert"
      aria-live="polite"
      className="text-center text-xs text-danger"
      {...props}
    />
  );
}
