import styles from './Footer.css';
import Logo from '../../assets/logo.png';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <img className="logo" src={Logo}/>
        <p className={styles.copyright}>
          © 2025 GeoGenius. All rights reserved.
        </p>
      
    </footer>
  );
};

export default Footer;
