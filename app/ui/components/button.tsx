import { Bars3Icon } from "@heroicons/react/24/outline";

export default function Button({
  text,
  onClick,
  icon,
  ariaLabel,
}: {
  text?: string;
  onClick: () => void;
  icon?: React.ReactNode;
  ariaLabel?: string;
}) {
  return (
    <button onClick={onClick} className="button" aria-label={ariaLabel}>
      <Bars3Icon className="size-2" />
      {icon && <span className="button-icon">{icon}</span>}
      <p className="button-text">{text}</p>
    </button>
  );
}
