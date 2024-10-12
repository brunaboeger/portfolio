import Button from "../button/Button";

export default function Navbar({ children }) {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <section className="navbar-logo-box">Bruna Boeger</section>
        <section className="navbar-actions-box">{children}</section>
      </div>
    </nav>
  );
}
