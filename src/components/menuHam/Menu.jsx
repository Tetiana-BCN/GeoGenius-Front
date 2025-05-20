import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Menu.module.css";

import Button from "../../components/button/Button"; 

function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  const [isConfirmingLogout, setIsConfirmingLogout] = useState(false);
  const navigate = useNavigate();
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    setIsConfirmingLogout(false); 
    navigate("/login"); 
  };

  const confirmLogout = () => {
    setIsConfirmingLogout(true);
    closeMenu();
  };

  const cancelLogout = () => {
    setIsConfirmingLogout(false);
  };

  return (
    <div className={styles.container}>
      
      <div className={styles.hamburger} onClick={toggleMenu} aria-label="Toggle menu">
        <div className={`${styles.line} ${isOpen ? styles.open1 : ""}`}></div>
        <div className={`${styles.line} ${isOpen ? styles.open2 : ""}`}></div>
        <div className={`${styles.line} ${isOpen ? styles.open3 : ""}`}></div>
      </div>

  
      <div className={`${styles.menu} ${isOpen ? styles.show : ""}`}>
      <div className={styles.closeIcon} onClick={toggleMenu}>
    &times; 
  </div>
        <Link to="/" onClick={closeMenu}>Home</Link>
        <Link to="/play" onClick={closeMenu}>Play the Game!</Link>
        <Link to="/login" onClick={closeMenu}>Log In</Link>
        <Link to="/register" onClick={closeMenu}>Join us</Link>
        <Link to="/about" onClick={closeMenu}>About us & Contacts</Link>
        

        
        <Button
          label="Logout"
          onClick={confirmLogout}
          type="logout"
          className={styles.logoutBtn}
        />
      </div>

      
      {isConfirmingLogout && (
        <div className={styles.confirmationModal}>
          <p>Are you sure you want to logout?</p>
          <div className={styles.modalActions}>
            <Button
              label="Yes"
              onClick={handleLogout}
              type="primary"
              className="styles.primary"
            />
            <Button
              label="No"
              onClick={cancelLogout}
              type="secondary"
              className="styles.secondary"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Menu;