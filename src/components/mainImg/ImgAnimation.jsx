import React, { useState, useEffect } from 'react';
import './ImgAnimation.css'; 

function ImgAnimation({ images, interval = 3000 }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);
    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <div className="img-container">
      {images.map((img, i) => (
        <img
          key={i}
          src={img}
          alt={`Slide ${i}`}
          className={`img-anim ${i === index ? 'visible' : 'hidden'}`}
        />
      ))}
    </div>
  );
};

export default ImgAnimation;
