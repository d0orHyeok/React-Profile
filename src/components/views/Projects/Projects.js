import React from 'react';
import cn from 'classnames';
import styles from './Projects.module.css';

function Projects() {
  return (
    <section className={styles.section}>
      <h1 className={cn(styles.container, 'heading')}>PROJECTS</h1>
      <div className={styles.container}>
        <aritle className={styles.wrapper}>
          <div className={styles.image}>
            <img
              src="https://images.unsplash.com/photo-1530435460869-d13625c69bbf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
              alt="img"
            />
          </div>
          <div className={styles.info}>
            <div className={styles.content}>
              <h2 className={styles.title}>Project Title</h2>
              <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, quo?</p>
            </div>
            <div className={styles.links}>
              <a
                href="http://127.0.0.1:5500/publishing/index.html"
                className={styles.linkBtn}
                target="_blank"
                rel="noreferrer"
              >
                LIVE DEMO
              </a>
              <a
                href="http://127.0.0.1:5500/publishing/index.html"
                className={styles.linkBtn}
                target="_blank"
                rel="noreferrer"
              >
                GITHUB
              </a>
            </div>
          </div>
        </aritle>
      </div>
    </section>
  );
}

export default Projects;
