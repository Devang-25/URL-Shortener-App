import React from "react";
import styles from "../styles/navbar.module.css";
import logo from "../images/logo.svg";
const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <img src={logo} alt="logo" />
      <ul className={styles.links}>
        <li>
          <a href="#">Features</a>
        </li>
        <li>
          <a href="#">Pricing</a>
        </li>
        <li>
          <a href="#">Resources</a>
        </li>

        <button className={styles.login}>Login</button>
        <button className={styles.signup}>Sign up</button>
      </ul>
    </nav>
  );
};

export default Navbar;
