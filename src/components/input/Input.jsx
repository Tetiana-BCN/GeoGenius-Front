"use client";
import React from "react";
import { useState } from "react";
import styles from "./Input.module.css";

function Input({
  label,
  value,
  onChange,
  placeholder = "",
  type = "text",
  showResults = false,
  items = [],
  showIcon = true,
  name,

 }) {
  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(value.toLowerCase())
  );

  return (
    <div className={styles.container}>
      {label && <label className={styles.label}>{label}</label>}

      <div className={styles.inputWrapper}>
     
        <input
          type={type}
          name={name}    
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={styles.input}
          aria-label={label || placeholder}
         
        />
      </div>

      {showResults && filteredItems.length > 0 && (
        <ul className={styles.resultList}>
          {filteredItems.map((item, index) => (
            <li key={index} className={styles.resultItem}>
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Input;

