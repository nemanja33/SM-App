"use client";

import React, { useState } from 'react'
import styles from './styles.module.css'

type InputFieldProps = {
  label: string;
  type: "text" | "email" | "password",
  placeholder: string;
  hasError?: boolean;
}

export default function InputField({
  label,
  type,
  placeholder,
  hasError = false
}: InputFieldProps) {
  const id = label.toLowerCase().replaceAll(" ", '-');
  const [value, setValue] = useState('');
 
  function handleChange(event: React.ChangeEvent<HTMLInputElement>): void {
    const newValue = event.target.value;

    setValue(newValue);
  }

  return (
    <div className={styles.fieldContainer}>
      <label htmlFor={id} className={styles.label}>{label}</label>
      <input
        type={type}
        name={id}
        id={id}
        placeholder={placeholder}
        className={`${styles.input} ${hasError ? styles.error : ''}`}
        value={value}
        onChange={handleChange}
      />
    </div>
  )
}
