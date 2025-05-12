import styles from "./Header.module.css";
import React from "react";
import { useState } from "react";
import Logo from "../../assets/logo.png";
import { Link } from 'react-router-dom';
//import menuHam from "../components/menuHam/MenuHam";

function Header() {
  const handleLogoClick = () => {
    window.location.reload();
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
</div>
  );
};

export default Header;