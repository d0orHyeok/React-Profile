import React from 'react';
import { Link } from 'react-scroll';
import styles from './Header.module.css';

function Header() {
  const goHome = () => {
    window.location.href = window.location.href;
  };

  return (
    <header>
      <div className={styles.logo}>
        <span onClick={goHome}>JANGHYEOK KIM</span>
      </div>
      <nav>
        <ul className={styles.menu}>
          <li className={styles.item}>
            <Link activeClass="active" to="home" spy={true} smooth={true}>
              HOME
            </Link>
          </li>
          <li className={styles.item}>
            <Link to="about" spy={true} smooth={true}>
              ABOUT
            </Link>
          </li>
          <li className={styles.item}>
            <Link to="projects" spy={true} smooth={true}>
              PROJECTS
            </Link>
          </li>
          <li className={styles.item}>
            <Link to="contact" spy={true} smooth={true}>
              CONTACT
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
