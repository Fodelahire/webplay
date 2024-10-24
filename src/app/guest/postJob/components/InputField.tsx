import React from 'react';
import styles from '@/styles/jobform/inputField.module.scss';

interface InputFieldProps {
  type: string;
  label: string;
  placeholder: string;
  value: string;
  isRequired?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<InputFieldProps> = ({ type, label, placeholder, value, isRequired, onChange }) => (
  <div className={styles.inputField}>
    <label className={styles.label}>
      {label} {isRequired && <span className={styles.required}>*</span>}
    </label>
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={styles.input}
    />
  </div>
);

export default InputField;