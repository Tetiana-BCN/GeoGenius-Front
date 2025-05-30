import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { useNavigate } from "react-router-dom";
import Input from "../../components/input/Input";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

import styles from "./Login.module.css";
import Button from "../../components/button/Button";


function Login() {
    const [formData, setFormData] = useState({
      email: "",
      password: "",
    });
  
    const [errors, setErrors] = useState({
      email: "",
      password: "",
    });
  
    const [passwordVisible, setPasswordVisible] = useState(false);
    const navigate = useNavigate();
  
    const handleChange = (e) => {
      const { name, value } = e.target;
  
      setFormData({
        ...formData,
        [name]: value,
      });
  
      validateField(name, value);
    };
  
    const validateField = (name, value) => {
      let message = "";
  
      if (name === "email") {
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!regex.test(value)) {
          message = "Please enter a valid email address";
        }
      }
  
      if (name === "password") {
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s<>:/])[A-Za-z\d^\w\s]{8,20}$/;
        if (!regex.test(value)) {
          message =
            "Weak password: use 8–20 characters, uppercase, lowercase, number, and symbol";
        }
      }
  
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: message,
      }));
    };
  
    const togglePasswordVisibility = () => {
      setPasswordVisible(!passwordVisible);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      if (!errors.email && !errors.password && formData.email && formData.password) {
        console.log("Login with:", formData);
        navigate("/allevents");
      } else {
        alert("Check errors to proceed");
      }

      
    };
  
    return (
      <div className={styles.loginPage}>
        <Header />
        <h1 className={styles.welcome}>Welcome to Geo Quizes! <br/><span className={styles.spanLog}>Login</span> </h1>
  
        <form onSubmit={handleSubmit} className={styles.form}>
          
          <div className={styles.inputWrapper}>
            <Input
              name="email"
              variation="login"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              showIcon={false}
              className={styles.inputMail}
            />
            {errors.email && <div className={styles.error}>{errors.email}</div>}
          </div>
  
          
          <div className={styles.passwordWrapper}>
            <Input
              name="password"
              variation="login"
              type={passwordVisible ? "text" : "password"}
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              showIcon={false}
               className={styles.inputPass}
            />
            <div
              className={styles.eyeIconWrapper}
              onClick={togglePasswordVisibility}
              aria-label="Toggle password visibility"
            >
              {formData.password === "" || !passwordVisible ? (
                <FaEyeSlash />
              ) : (
                <FaEye />
              )}
            </div>
            {errors.password && <div className={styles.error}>{errors.password}</div>}
          </div>
  
          
          <h3 className={styles.forgot}>Forgot your password?</h3>
  
        
          <Button type="submit" label="Login" className={styles.buttonlogin}>
            Login
          </Button>
  
          
          <h3 className={styles.register}>
            Not a user?{" "}
            <Link to="/join" className={styles.reglink}>Join us</Link>
            
          </h3>
        </form>
  
        <Footer />
      </div>
    );
  };
  
  export default Login;