import ImgAnimation from '../components/mainImg/ImgAnimation';
import React from 'react';
import styles from './Start.css';

const images = [
  'photo1.jpg',
  'photo2.jpg',
  'photo3.jpg',
];

function Start() {
  return (
    <div>
      <h1>Welcome</h1>
      <ImgAnimation images={images} interval={4000} calssname={styles.img-anim}/>
    </div>
  );
}

export default Start;