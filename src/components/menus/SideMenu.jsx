import Button from "../button/Button";

export default function SideMenu({ buttons, position }) {
  if (!buttons) {
    return <aside className={`side-menu is-${position}`}></aside>;
  }

  return (
    <aside className={`side-menu is-${position}`}>
      {buttons.map((buttonProps, index) => {
        return <Button key={index} {...buttonProps} />;
      })}
    </aside>
  );
}
