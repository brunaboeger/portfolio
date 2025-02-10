import Link from "next/link";
import { NavigateToProps } from "@/app/lib/types";

export default function Button({
  text,
  navigateTo,
  onClick,
  startIcon,
  endIcon,
  ariaLabel,
  iconOnly = false,
  children,
  ref,
}: {
  text?: string;
  navigateTo?: NavigateToProps;
  onClick?: () => void;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  ariaLabel: string;
  iconOnly?: boolean;
  children?: React.ReactNode;
  ref?: React.RefObject<HTMLButtonElement>;
}) {
  return (
    <Link
      href={navigateTo?.link || ""}
      target={navigateTo?.target}
      className="w-fit"
    >
      <button
        ref={ref}
        onClick={onClick}
        aria-label={ariaLabel}
        className={`button flex align-center justify-center ${
          iconOnly ? "icon-only" : "border-orange-200 radius-2"
        }`}
      >
        {startIcon ? startIcon : null}
        <p className="text">
          {text}
          {children}
        </p>
        {endIcon ? endIcon : null}
      </button>
    </Link>
  );
}
