import * as RadixUIPopover from "@radix-ui/react-popover";

const Root = RadixUIPopover.Root;
const Trigger = RadixUIPopover.Trigger;
const Content = ({ children }: { children: React.ReactNode }) => (
  <RadixUIPopover.Portal>
    <RadixUIPopover.Content
      side="bottom"
      align="end"
      sideOffset={4}
      className="rounded-md border bg-white px-4 py-2 shadow-lg"
    >
      {children}
    </RadixUIPopover.Content>
  </RadixUIPopover.Portal>
);

export const Popover = {
  Root,
  Trigger,
  Content,
};
