import React from 'react';
import cn from 'classnames';
// import styles from './Projects.module.css';
import styles from './Projects.module.css';

function Projects() {
  const projectData = [
    {
      title: 'Project Title',
      desc: 'Lorem ipsum dolor sit amet ',
      image:
        'https://images.unsplash.com/photo-1530435460869-d13625c69bbf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80',
      projectUrl: 'http://127.0.0.1:5500/publishing/index.html',
      demoUrl: 'http://127.0.0.1:5500/publishing/index.html',
    },
    {
      title: 'Project Title',
      desc: 'Lorem ipsum dolor sit amet ',
      image:
        'https://images.unsplash.com/photo-1530435460869-d13625c69bbf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80',
      projectUrl: 'http://127.0.0.1:5500/publishing/index.html',
      demoUrl: 'http://127.0.0.1:5500/publishing/index.html',
    },
  ];

  const projectCards = projectData.map((data, index) => {
    let rightStyle = false;
    if (index % 2 === 1) {
      rightStyle = true;
    }

    return (
      <article key={index} className={rightStyle ? cn(styles.wrapper, styles['wrapper-right']) : styles.wrapper}>
        <div className={styles.image}>
          <img src={data.image} alt="Project" />
        </div>
        <div className={rightStyle ? cn(styles.info, styles['info-right']) : styles.info}>
          <div className={styles.content}>
            <h2 className={styles.title}>{data.title}</h2>
            <p className={styles.desc}>{data.desc}</p>
          </div>
          <div className={styles.links}>
            <a href={data.demoUrl} className={styles.linkBtn} target="_blank" rel="noreferrer">
              LIVE DEMO
            </a>
            <a href={data.projectUrl} className={styles.linkBtn} target="_blank" rel="noreferrer">
              GITHUB
            </a>
          </div>
        </div>
      </article>
    );
  });

  return (
    <section id="projects" className={styles.section}>
      <h1 className={cn(styles.container, 'heading')}>PROJECTS</h1>
      <div className={styles.container}>{projectCards}</div>
    </section>
  );
}

export default Projects;
