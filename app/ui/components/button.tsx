import { Bars3Icon } from "@heroicons/react/24/outline";

export default function Button({
  text,
  onClick,
  ariaLabel,
  iconOnly = false,
  children,
}: {
  text?: string;
  onClick: () => void;
  icon?: React.ReactNode;
  ariaLabel?: string;
  iconOnly?: boolean;
  children?: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={`button flex align-center justify-center ${
        iconOnly ? "icon-only" : ""
      }`}
      aria-label={ariaLabel}
    >
      <p className="text">
        {text}
        {children}
      </p>
    </button>
  );
}
