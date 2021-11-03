import React from 'react';
import styles from './Header.module.css';

function Header() {
  return (
    <header>
      <div className={styles.logo}>
        <span>JANGHYEOK KIM</span>
      </div>
      <nav>
        <ul className={styles.menu}>
          <li className={styles.item}>HOME</li>
          <li className={styles.item}>ABOUT</li>
          <li className={styles.item}>PROJECTS</li>
          <li className={styles.item}>CONTACT</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
