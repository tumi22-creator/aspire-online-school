
import { Link, NavLink } from "react-router-dom";
import { GraduationCap, Menu, X } from "lucide-react";
import { useState } from "react";
import Button from "./Button";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <div className="container nav-container">
        <Link to="/" className="brand" onClick={closeMenu}>
          <span className="brand-icon">
            <GraduationCap size={25} />
          </span>
          <span>
            <strong>Aspire</strong>
            <small>ONLINE SCHOOL</small>
          </span>
        </Link>

        <button
          className="mobile-menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>

        <nav className={`nav-links ${menuOpen ? "nav-open" : ""}`}>
          <NavLink to="/" onClick={closeMenu}>Home</NavLink>
          <a href="/#programmes" onClick={closeMenu}>Programmes</a>
          <a href="/#why-aspire" onClick={closeMenu}>Why Aspire</a>
          <a href="/#contact" onClick={closeMenu}>Contact</a>
          <Button to="/login" variant="outline" className="nav-login">
            Portal login
          </Button>
        </nav>
      </div>
    </header>
  );
}
