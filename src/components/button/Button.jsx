
import styles from './Button.module.css';

const Button = ({ label, onClick, type = "primary", disabled = false, className = "" }) => {
  return (
    <button
      className={`${styles.button} ${styles[type]} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default Button;
