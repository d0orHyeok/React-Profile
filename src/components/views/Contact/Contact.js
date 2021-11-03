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

  const listCards = contactData.map((data, index) => (
    <li key={index} className={styles.link}>
      <p>{data.title}</p>
      <a href={data.link} target="_blank" rel="noreferrer">
        {data.text}
      </a>
    </li>
  ));

  return (
    <section>
      <div className={styles.container}>
        <div className={styles.title}>
          <h2 className="heading">CONTACT</h2>
        </div>
        <div className={styles.content}>
          <ul className={styles.list}>{listCards}</ul>
        </div>
      </div>
    </section>
  );
}

export default Contact;
