import React from 'react'

type InputFieldProps = {
  label: string;
  type: "text" | "email" | "password",
  placeholder: string
}

export default function InputField({
  label,
  type,
  placeholder
}: InputFieldProps) {
  const id = label.toLowerCase().replaceAll(" ", '-');

  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        name={id}
        id={id}
        placeholder={placeholder} />
    </div>
  )
}
