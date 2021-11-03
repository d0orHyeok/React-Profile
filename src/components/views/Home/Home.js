import React from 'react';
import Typist from 'react-typist';
import styles from './Home.module.css';
import video from '../../../assets/video/space.mp4';

function Home() {
  return (
    <section className={styles.Home}>
      {/* Background Video */}
      <video className={styles['video-background']} muted loop autoPlay>
        <source src={video} />
      </video>
      <div className={styles.greeting}>
        <h2 className={styles['greeting-intro']}>
          <p>Hi There!</p>
          <p>I'M JANGHYEOK KIM</p>
        </h2>
        <h2>Front-End Web Developer</h2>
      </div>
    </section>
  );
}

export default Home;
