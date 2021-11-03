import React from 'react';
import { FaHtml5, FaCss3Alt, FaReact, FaNode } from 'react-icons/fa';
import { SiJavascript } from 'react-icons/si';
import styles from './About.module.css';

// profile img location
import profileImg from '../../../assets/img/sample-profile.png';

function About() {
  return (
    <section id="about">
      <div className={styles.container}>
        <div className={styles.profile}>
          <div className={styles.contents}>
            <div className={styles.desc}>
              <p>"가장 유능한 사람은 가장 배움에 힘쓰는 사람이다." 라는 말이 있습니다.</p>
              <p>
                끊임없이 배우며 성장하는 개발자를 꿈꾸고 있습니다. 계속해서 공부하고 개발 동향을 살피며 트렌드를
                파악하고, 배움과 개발에 있어 '왜?'라는 질문으로 고민과 해결을 반복하며 유능한 개발자가 되기위해 노력하고
                있습니다.
              </p>
            </div>
            <ul className={styles.skills}>
              <li>
                <FaHtml5 className={styles.icon} />
                HTML5
              </li>
              <li>
                <FaCss3Alt className={styles.icon} />
                CSS3
              </li>
              <li>
                <SiJavascript className={styles.icon} />
                JavaScript
              </li>
              <li>
                <FaReact className={styles.icon} />
                React
              </li>
              <li>
                <FaNode className={styles.icon} />
                Node.js
              </li>
            </ul>
          </div>
          <div className={styles.image}>
            <img src={profileImg} alt="profile" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
