import React, { useState, useEffect, useMemo } from 'react';
import CrossfadeImage from 'react-crossfade-image';
import styles from './ImgAnimation.module.css';

import ba1 from "../../assets/images/ba1.jpeg";
import ba2 from "../../assets/images/ba2.jpeg";
import ba3 from "../../assets/images/ba3.jpeg";
import berlin from "../../assets/images/berlin.jpeg";
import berlin2 from "../../assets/images/berlin2.jpeg";
import bogota1 from "../../assets/images/bogota1.jpeg";
import bogota2 from "../../assets/images/bogota2.jpeg";
import bogota3 from "../../assets/images/bogota3.jpeg";
import bras1 from "../../assets/images/bras1.jpeg";
import bras2 from "../../assets/images/bras2.jpeg";
import caracas1 from "../../assets/images/caracas1.jpeg";
import caracas2 from "../../assets/images/caracas2.jpeg";
import kyiv1 from "../../assets/images/kyiv1.jpeg";
import kyiv2 from "../../assets/images/kyiv2.jpeg";
import kyiv3 from "../../assets/images/kyiv3.jpeg";
import kyiv4 from "../../assets/images/kyiv4.jpeg";
import lima1 from "../../assets/images/lima1.jpeg";
import lima2 from "../../assets/images/lima2.jpeg";
import london1 from "../../assets/images/london1.jpeg";
import london2 from "../../assets/images/london2.jpeg";
import london3 from "../../assets/images/london3.jpeg";
import london5 from "../../assets/images/london5.jpeg";
import madrid1 from "../../assets/images/madrid1.jpeg";
import madrid2 from "../../assets/images/madrid2.jpeg";
import madrid3 from "../../assets/images/madrid3.jpeg";
import mexico1 from "../../assets/images/mexico1.jpeg";
import mexico2 from "../../assets/images/mexico2.jpeg";
import mexico3 from "../../assets/images/mexico3.jpeg";
import ottawa1 from "../../assets/images/ottawa1.jpeg";
import ottawa2 from "../../assets/images/ottawa2.jpeg";
import paris1 from "../../assets/images/paris1.jpeg";
import paris2 from "../../assets/images/paris2.jpeg";
import paris3 from "../../assets/images/paris3.jpeg";
import paris4 from "../../assets/images/paris4.jpeg";
import praga1 from "../../assets/images/praga1.jpeg";
import praga2 from "../../assets/images/praga2.jpeg";
import quito1 from "../../assets/images/quito1.jpeg";
import quito2 from "../../assets/images/quito2.jpeg";
import quito3 from "../../assets/images/quito3.jpeg";
import roma1 from "../../assets/images/roma1.jpeg";
import roma2 from "../../assets/images/roma2.jpeg";
import roma3 from "../../assets/images/roma3.jpeg";
import roma4 from "../../assets/images/roma4.jpeg";
import wash1 from "../../assets/images/wash1.jpeg";
import wash2 from "../../assets/images/wash2.jpeg";

function ImgAnimation({ interval = 3000 }) {
  const [index, setIndex] = useState(0);

  const allImages = [
    ba1, ba2, ba3, berlin, berlin2, bogota1, bogota2, bogota3, bras1, bras2,
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
    <div className={styles.imgContainer}>
      <CrossfadeImage
        src={shuffledImages[index]}
        duration={1000}
        timingFunction="ease-in-out"
        style={{
          
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          borderRadius: '50%',
        }}
      />
    </div>
  );
}

export default ImgAnimation;
