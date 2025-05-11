import React, { useState, useEffect, useMemo } from 'react';
import './ImgAnimation.css'; 
import ba1 from '../assets/images/ba1.jpg';
import ba2 from '../assets/images/ba2.jpg';
import ba3 from '../assets/images/ba3.jpg';
import berlin from '../assets/images/berlin.jpg';
import berlin2 from '../assets/images/berlin2.jpg';
import bogota from '../assets/images/bogota.jpg';
import bogota2 from '../assets/images/bogota2.jpg';
import bogota3 from '../assets/images/bogota3.jpg';
import bras1 from '../assets/images/bras1.jpg';
import bras2 from '../assets/images/bras2.jpg';
import caracas1 from '../assets/images/caracas1.jpg';
import caracas2 from '../assets/images/caracas2.jpg';
import kyiv1 from '../assets/images/kyiv1.jpg';
import kyiv2 from '../assets/images/kyiv2.jpg';
import kyiv3 from '../assets/images/kyiv3.jpg';
import kyiv4 from '../assets/images/kyiv4.jpg';
import lima1 from '../assets/images/lima1.jpg';
import lima2 from '../assets/images/lima2.jpg';
import london1 from '../assets/images/london1.jpg';
import london2 from '../assets/images/london2.jpg';
import london3 from '../assets/images/london3.jpg';
import london5 from '../assets/images/london5.jpg';
import madrid1 from '../assets/images/madrid1.jpg';
import madrid2 from '../assets/images/madrid2.jpg';
import madrid3 from '../assets/images/madrid3.jpg';
import mexico1 from '../assets/images/mexico1.jpg';
import mexico2 from '../assets/images/mexico2.jpg';
import mexico3 from '../assets/images/mexico3.jpg';
import ottawa1 from '../assets/images/ottawa1.jpg';
import ottawa2 from '../assets/images/ottawa2.jpg';
import paris1 from '../assets/images/paris1.jpg';
import paris2 from '../assets/images/paris2.jpg';
import paris3 from '../assets/images/paris3.jpg';
import paris4 from '../assets/images/paris4.jpg';
import praga1 from '../assets/images/praga1.jpg';
import praga2 from '../assets/images/praga2.jpg';
import quito1 from '../assets/images/quito1.jpg';
import quito2 from '../assets/images/quito2.jpg';
import quito3 from '../assets/images/quito3.jpg';
import roma1 from '../assets/images/roma1.jpg';
import roma2 from '../assets/images/roma2.jpg';
import roma3 from '../assets/images/roma3.jpg';
import roma4 from '../assets/images/roma4.jpg';
import wash1 from '../assets/images/wash1.jpg';
import wash2 from '../assets/images/wash2.jpg';

function ImgAnimation({ interval = 3000 }) {
  const [index, setIndex] = useState(0);

  
  const allImages = [
    ba1, ba2, ba3, berlin, berlin2, bogota, bogota2, bogota3, bras1, bras2,
    caracas1, caracas2, kyiv1, kyiv2, kyiv3, kyiv4, lima1, lima2, london1, london2,
    london3, london5, madrid1, madrid2, madrid3, mexico1, mexico2, mexico3, ottawa1,
    ottawa2, paris1, paris2, paris3, paris4, praga1, praga2, quito1, quito2, quito3,
    roma1, roma2, roma3, roma4, wash1, wash2
  ];

  
  const shuffledImages = useMemo(() => {
    return [...allImages].sort(() => Math.random() - 0.5);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % shuffledImages.length);
    }, interval);
    return () => clearInterval(timer);
  }, [shuffledImages, interval]);

  return (
    <div className="img-container">
      {shuffledImages.map((img, i) => (
        <img
          key={i}
          src={img}
          alt={`Slide ${i}`}
          className={`img-anim ${i === index ? 'visible' : 'hidden'}`}
        />
      ))}
    </div>
  );
}

export default ImgAnimation;
 