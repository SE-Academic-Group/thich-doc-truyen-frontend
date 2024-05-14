import { SettingsIcon } from "../icons";

export default function UserSettings() {
  return (
    <button className="flex items-center gap-0.5">
      <SettingsIcon />
      <span>Tùy chỉnh</span>
    </button>
  );
}
