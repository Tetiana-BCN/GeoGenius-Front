import styles from "./Header.module.css";
import React from "react";
import { useNavigate } from 'react-router-dom';

import Logo from "../../assets/logo.png";
import { Link } from 'react-router-dom';

import Menu from "../../components/menuHam/Menu";

function Header() {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/');  
  };

  return (
    <div className={styles.header}>
      
      <img
        className={styles.logo}
        src={Logo}
        alt="logo"
        onClick={handleLogoClick}
        style={{ cursor: "pointer" }}
      /> 
      <p>
  
  <Link to="/play" className={styles.link}>Go, Genius!</Link>
</p>
<div className={styles.menu}><Menu /></div>

</div>
  );
};

export default Header;