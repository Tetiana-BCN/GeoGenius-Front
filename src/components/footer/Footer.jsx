import styles from './Footer.module.css';
import Logo from '../../assets/logo.png';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div>
        <img className={styles.logo} src={Logo} alt="GeoGenius Logo" />
        <p className={styles.copyright}>
          © 2025 GeoGenius. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
