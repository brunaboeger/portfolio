import { Bars3Icon } from "@heroicons/react/24/outline";

export default function Button({
  text,
  onClick,
  ariaLabel,
  iconOnly = false,
}: {
  text?: string;
  onClick: () => void;
  icon?: React.ReactNode;
  ariaLabel?: string;
  iconOnly?: boolean;
}) {
  return (
    <button
      onClick={onClick}
      className={`button flex align-center justify-center ${
        iconOnly ? "icon-only" : ""
      }`}
      aria-label={ariaLabel}
    >
      <Bars3Icon />
      <p className="text">{text}</p>
    </button>
  );
}
