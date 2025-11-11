import { useState } from "react";
import { NavLink } from "react-router";
import styles from "./navigation.module.css";
import burgerIcon from "/src/assets/burger_icon.svg";

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav>
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
            to="/stays"
            className={({ isActive }) => (isActive ? styles.active : "")}
            onClick={() => setMenuOpen(false)}
          >
            Ophold
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
