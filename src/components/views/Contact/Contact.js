import React from 'react';
import styles from './Contact.module.css';

function Contact() {
  const contactData = [
    {
      title: 'EMAIL',
      link: 'mailto:d0oR.hyeok@gmail.com',
      text: 'd0oR.hyeok@gmail.com',
    },
    {
      title: 'GITHUB',
      link: 'https://github.com/d0orHyeok',
      text: 'github.com/d0orHyeok',
    },
    {
      title: 'LINKEDIN',
      link: 'https://www.linkedin.com/in/d0orhyeok-dev/',
      text: 'linkedin.com/in/d0orhyeok-dev',
    },
    {
      title: 'INSTAGRAM',
      link: 'https://www.instagram.com/d0or_hyeok/',
      text: 'JangHyeok KIm',
    },
  ];

  return (
    <section>
      <div className={styles.container}>
        <div className={styles.title}>
          <h2 className="heading">CONTACT</h2>
        </div>
        <div className={styles.content}>
          <ul className={styles.list}>
            <li className={styles.link}>
              <p>EMAIL</p>
              <a href="mailto:d0oR.hyeok@gmail.com" target="_blank" rel="noreferrer">
                d0oR.hyeok@gmail.com
              </a>
            </li>
            <li className={styles.link}>
              <p>GITHUB</p>
              <a href="https://github.com/d0orHyeok" target="_blank" rel="noreferrer">
                github.com/d0orHyeok
              </a>
            </li>
            <li className={styles.link}>
              <p>LINKEDIN</p>
              <a href="https://www.linkedin.com/in/d0orhyeok-dev/" target="_blank" rel="noreferrer">
                linkedin.com/in/d0orhyeok-dev
              </a>
            </li>
            <li className={styles.link}>
              <p>INSTAGRAM</p>
              <a href="https://www.instagram.com/d0or_hyeok/" target="_blank" rel="noreferrer">
                JangHyeok KIm
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Contact;
