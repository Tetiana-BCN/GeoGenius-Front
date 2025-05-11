import styles from "./Header.module.css";
import React from "react";
import { useState } from "react";
import Logo from "../../assets/Logo.png";
//port menuHam from "../menuHam/MenuHam";

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
    </div>
  );
};

export default Header;