import React from 'react';
import ImgAnimation from "../../components/mainImg/ImgAnimation";

import Footer from "../../components/footer/Footer";

import styles from './Start.module.css';

function Start() {
  return (
    <div className={styles.startWrapper}>
      <h1>Welcome to GeoGenius — Where Curiosity Meets the World!</h1>
      <p className={styles.startText}>
      <div className={styles.shapeWrap}>
    <div className={styles.animationInner}>
      <ImgAnimation />
    </div>
  </div>
      Understanding geography is more than just memorizing maps — it's about building awareness, empathy, and a sense of global citizenship.</p> <p className={styles.startText}> <span className={styles.geo}>GeoGenius</span> was created to reignite curiosity about our planet through fun, interactive quizzes focused on world capitals and countries.</p>

      <p className={styles.startText}> Far too often, geography is overlooked in traditional education, despite its vital role in helping us understand global cultures, economies, and current events. <span className={styles.geo}>GeoGenius</span> aims to change that. </p> <p className={styles.startText}>Whether you're a student brushing up on school knowledge, a traveler planning your next adventure, or a curious mind eager to challenge yourself, <span className={styles.geo}>GeoGenius</span> is your passport to learning about the world — one country at a time.</p>

      <p className={styles.startText}>Our platform makes learning engaging with dynamic quizzes that test your knowledge and improve it at the same time. <span className={styles.geo}>GeoGenius</span> turns geographical learning into a game — because the best learning happens when you're having fun.</p>

      <p className={styles.startText}>Why does this matter? Because knowing the world is the first step toward understanding it. In a time where global issues impact us all, developing a stronger sense of place, people, and culture can empower better conversations and more informed decisions.</p>

      <p className={styles.startText}>Are you ready to become a true citizen of the world?</p> <p className={styles.startText}> Start your journey with <span className={styles.geo}>GeoGenius</span> — <span className={styles.italics}> and unlock the genius in you </span>.</p>
      
      <Footer />
    </div>
  );
}

export default Start;
