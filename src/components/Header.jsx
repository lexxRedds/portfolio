import { useState } from "react";

import styles from '../assets/Header.module.css';
import ScramblingText from "./ScramblingText";

function Header() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleNav = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <header className={styles.navbar}>
      <code><ScramblingText text='<Lexx />' /></code>
      <button className={`navbar-toggler ${isExpanded ? 'active' : ''}`} onClick={toggleNav}>
        <span></span>
        <span></span>
        <span></span>
      </button>
      <nav>
        <ul className={`navbar-nav ${isExpanded ? 'expanded' : ''}`}>
          <li className="nav-item">
            <a href="/home">Home</a>
          </li>
          <li className="nav-item">
            <a href="/about">About</a>
          </li>
          <li className="nav-item">
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;