import { useState } from "react";
import { NavLink } from "react-router";
import styles from "./navigation.module.css";
import burgerIcon from "/src/assets/burger_icon.svg";
import logo from "/logo.png";

const Navigation = () => {
  // Holder styr på om menuen er åben. useState bruges til at gemme og ændre data inde i et komponent og når state ændrer sig, re-renderer komponenten automatisk.
  const [menuOpen, setMenuOpen] = useState(false);

  // Skifter mellem at åbne og lukke menuen
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav>
      {/* Viser logoet, skjules på forsiden */}
      <img
        src={logo}
        alt="Logo"
        className={`${styles.logo} ${
          location.pathname === "/" ? styles.hidden : ""
        }`}
      />

      {/* Burger-ikon til mobilmenu */}
      <div className={styles.burger} onClick={toggleMenu}>
        <img src={burgerIcon} alt="Menu" />
      </div>

      {/* Navigationslinks */}
      <ul
        className={`${styles.navLinks} ${menuOpen ? styles.navLinksActive : ""}`}
      >
        <li>
          {/* Hvert link lukker menuen igen ved klik */}
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
            Aktiviteter <br />
          </NavLink>
          <NavLink
            to="/mylist"
            className={({ isActive }) => (isActive ? styles.active : "")}
            onClick={() => setMenuOpen(false)}
          >
            Min liste
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
