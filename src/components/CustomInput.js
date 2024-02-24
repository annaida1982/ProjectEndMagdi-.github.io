import React from "react";

const CustomInput = (props) => {
  const { type, name, id, onBlur, placeholder, className, value, onChange,disabled } =
    props;
  return (
    <div>
      <input
        type={type}
        name={name}
        className={`'form-control' ${className}`}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        id={id}
        disabled={disabled}
      />
    </div>
  );
};

export default CustomInput;
