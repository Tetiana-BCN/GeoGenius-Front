import React, { useState } from "react";
import Modal from "../../components/modal/Modal";
import { FaEye, FaEyeSlash } from "react-icons/fa"; 
import styles from "./Form.module.css"; 
function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
  });

 
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    validateField(name, value);
  };

  

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  const handleModalConfirm = (action) => {
    if (action === "yes") {
      
      alert("Saved successfully!");
    }
    setShowModal(false);
  };

  const validateField = (name, value) => {
    let message = "";

    if (name === "name") {
      const regex = /^[A-Za-z\s]+$/;
      if (!regex.test(value)) {
        message = "Name can only contain letters and spaces";
      }
    }

    if (name === "email") {
      const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!regex.test(value)) {
        message = "Please enter a valid email address";
      }
    }

    if (name === "password") {
      const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s<>:/])[A-Za-z\d^\w\s]{8,20}$/;
      if (!regex.test(value)) {
        message = "The password should contain between 8 and 20 characters, include at least menos 1 uppercase, 1 lowercase, 1 number and 1 symbol that is not /, <, > o :";
      }
    }

    setErrors({
      ...errors,
      [name]: message,
    });
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div>
      {showModal && (
        <Modal>
          <div className={styles.modalContent}>
            <p>¿Are you sure you want to save the changes?</p>
            <div className={styles.modalButtons}>
              <button
                className={styles.modalButtonYes}
                onClick={() => handleModalConfirm("yes")}
              >
                Sí
              </button>
              <button
                className={styles.modalButtonNo}
                onClick={() => handleModalConfirm("no")}
              >
                No
              </button>
            </div>
          </div>
        </Modal>
      )}

      <form className={styles.form} onSubmit={handleSubmit}>
        
        

        <label className={styles.label}>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.nombre}
          onChange={handleChange}
          className={styles.input}
        />
        {errors.nombre && <div className={styles.error}>{errors.nombre}</div>}

        <label className={styles.label}>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={styles.input}
        />
        {errors.email && <div className={styles.error}>{errors.email}</div>}

        <label className={styles.label}>Contraseña:</label>
        <div className={styles.passwordWrapper}>
          <input
            type={passwordVisible ? "text" : "password"}
            name="password"
            value={formData.password}
            onChange={handleChange}
            className={styles.input}
          />
          <span
            className={styles.passwordToggle}
            onClick={togglePasswordVisibility}
          >
            {passwordVisible ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>
        {errors.password && <div className={styles.error}>{errors.password}</div>}

       

        <button type="submit" className={styles.button}>
          Save
        </button>
      </form>
    </div>
  );
};

export default Form;



