export default function Navbar({ children }) {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <section className="navbar-logo-box">
          <div className="logo-symbol">
            <span className="material-icons">image</span>
          </div>
          <h1 className="logo-name">Bruna Boeger</h1>
        </section>
        <section className="navbar-actions-box">{children}</section>
      </div>
    </nav>
  );
}
