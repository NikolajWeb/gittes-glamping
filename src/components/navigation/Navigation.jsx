import { useState } from "react";
import { NavLink } from "react-router";
import styles from "./navigation.module.css";
import burgerIcon from "/src/assets/burger_icon.svg";
import logo from "/logo.png";

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav>
      <img
        src={logo}
        alt="Logo"
        className={`${styles.logo} ${
          location.pathname === "/" ? styles.hidden : ""
        }`}
      />
      {/* Burger icon */}
      <div className={styles.burger} onClick={toggleMenu}>
        <img src={burgerIcon} alt="Menu" />
      </div>

      {/* Navigation links */}
      <ul
        className={`${styles.navLinks} ${menuOpen ? styles.navLinksActive : ""}`}
      >
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? styles.active : "")}
            onClick={() => setMenuOpen(false)}
          >
            Forside <br />
          </NavLink>
          <NavLink
            to="/stays"
            className={({ isActive }) => (isActive ? styles.active : "")}
            onClick={() => setMenuOpen(false)}
          >
            Ophold <br />
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? styles.active : "")}
            onClick={() => setMenuOpen(false)}
          >
            Kontakt <br />
          </NavLink>

          <NavLink
            to="/activities"
            className={({ isActive }) => (isActive ? styles.active : "")}
            onClick={() => setMenuOpen(false)}
          >
            Aktiviteter
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
