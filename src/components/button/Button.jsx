function buttonIconPosition(position) {
  if (position == "right") {
    return "icon-right";
  }

  return;
}

export default function Button({
  text,
  onClick,
  icon,
  color = "muted",
  variant = "no-background",
  ariaLabel = "",
  iconPosition,
}) {
  const buttonClass = `button color-${color} ${variant}`;
  const iconPositionXX =
    icon && iconPosition ? buttonIconPosition(iconPosition) : "";

  return (
    <button
      onClick={onClick}
      className={`${buttonClass} ${iconPositionXX}`}
      aria-label={ariaLabel}
    >
      {icon && <span className="button-icon">{icon}</span>}
      <p className="button-text">{text}</p>
    </button>
  );
}
