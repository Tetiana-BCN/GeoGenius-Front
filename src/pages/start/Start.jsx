import React from 'react';
import ImgAnimation from "../../components/mainImg/ImgAnimation";

import Footer from "../../components/footer/Footer";

import styles from './Start.module.css';

function Start() {
  return (
    <div className={styles.startWrapper}>
      <h1>Welcome</h1>
      <ImgAnimation />
      <Footer />
    </div>
  );
}

export default Start;
