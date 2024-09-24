import Button from "../button/Button";

export default function Navbar({ children }) {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <section className="navbar-logo-box">Bruna Boeger</section>
        <section className="navbar-actions-box">{children}</section>
      </div>
      <aside className="navbar-floating-menu">
        <Button text="Projetos" />
        <Button text="Experiências" />
        <Button text="Habilidades" />
        <Button text="Aprendizados" />
        <Button text="Contato" />
      </aside>
      <aside className="navbar-floating-menu is-right">
        <Button text="Esconder grid" />
      </aside>
    </nav>
  );
}
