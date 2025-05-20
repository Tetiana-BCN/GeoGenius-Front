import { FaInstagram, FaTiktok, FaFacebook } from "react-icons/fa";
import styles from './Icons.module.css';


const icons = {

    insta: FaInstagram,
    tiktok: FaTiktok,
    facebook: FaFacebook,
 
};


function Icons ({ variation = "insta", size = 48, onClick, className="" }){
 const IconComponent = icons[variation] || FaInstagram;


 return (
   <button className={`${styles.iconContainer} ${styles[variation]} ${className}`} onClick={onClick}>
     <IconComponent className={styles.iconImg} size={size} />
   </button>
 );
};


export default Icons;