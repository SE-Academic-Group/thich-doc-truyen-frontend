export type KbdProps = Readonly<{
  keystrokes: readonly string[];
  screenReaderText: string;
}>;

export default function Kbd(props: KbdProps) {
  return (
    <div className="hidden items-center gap-1.5 text-xs md:flex">
      <span className="sr-only">{props.screenReaderText}</span>
      {props.keystrokes.map((keystroke, index) => (
        <kbd
          aria-hidden="true"
          className="rounded bg-bg-50 p-1"
          key={keystroke + index}
        >
          {keystroke}
        </kbd>
      ))}
    </div>
  );
}
