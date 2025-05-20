import React from 'react';
import ImgAnimation from "../../components/mainImg/ImgAnimation";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Button from '../../components/button/Button';
import styles from './Start.module.css';

function Start() {
  return (
   <>
    <div className={styles.startWrapper}>
      <Header />
      <h1 className={styles.welcomeTitle}>Welcome to GeoGenius — Where Curiosity Meets the World!</h1>
      <p className={styles.startText}>
      <div className={styles.shapeWrap}>
    <div className={styles.animationInner}>
      <ImgAnimation />
    </div>
  </div>
      Understanding geography is more than just memorizing maps — it's about building awareness, empathy, and a sense of global citizenship.</p> <p className={styles.startText}> <span className={styles.geo}>GeoGenius</span> was created to reignite curiosity about our planet through fun, interactive quizzes focused on world capitals and countries.</p>

    <p className={styles.startText}>Whether you're a student, a traveller, or a curious mind, <span className={styles.geo}>GeoGenius</span> is your passport to learning about the world. <span className={styles.geo}>GeoGenius</span> turns geographical learning into a game — because the best learning happens when you're having fun.</p>

      <p className={styles.startText}>Knowing the world is the first step towards understanding it and culture can empower better conversations and more informed decisions.</p>

      <p className={styles.startText}>Are you ready to become a true citizen of the world?</p> <p className={styles.startText}> Start your journey with <span className={styles.geo}>GeoGenius</span> — <span className={styles.italics}> and unlock the genius in you </span>.</p>
      
      <Footer />
    </div>
    </>
  );
}

export default Start;
