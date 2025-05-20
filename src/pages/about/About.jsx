import React from 'react';

import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

import styles from './About.module.css';
import Icons from '../../components/icons/Icons';

function About() {
  return (
   <>
    <div className={styles.container}>
      <Header />
      <h1 className={styles.aboutUs}>🌍 About GeoGenius</h1>
     
   <p>
    
At GeoGenius, we believe that understanding geography is more than just memorizing maps — it's about building awareness, empathy, and a sense of global citizenship.

Born from a desire to make learning about the world both fun and meaningful, GeoGenius was created to reignite curiosity about our planet. Through interactive quizzes focused on world capitals, countries, and cultures, we aim to help users of all ages connect with global knowledge in an exciting and accessible way.

Whether you're a student, an avid traveler, or simply someone with a curious mind, GeoGenius is your passport to exploring the world. We’ve transformed geographical learning into a game — because the best learning happens when you’re having fun.

We believe that knowing the world is the first step to understanding it. And with greater understanding comes better conversations, deeper cultural appreciation, and more informed global citizens.
   </p>
   <h3>
    Our Address: Barcelona, 08011, Pl.Cataluña 1.
   </h3>
   
   <h2 className={styles.joinIcons}> 🌟 Join the Movement</h2>
<p>Are you ready to become a true citizen of the world?
Start your journey with GeoGenius — and unlock the genius in you.

Follow us on:
<Icons />
   </p>
      <Footer />
    </div>
    </>
  );
}

export default About;
