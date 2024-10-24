import React from 'react';
import styles from '@/styles/jobform/inputField.module.scss';

interface InputFieldProps {
  type: string;
  placeholder: string;
  label?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<InputFieldProps> = ({ type, placeholder, label, value, onChange }) => (
  <div className={styles.inputField}>
    {label && <label className={styles.label}>{label}</label>}
    <input type={type} placeholder={placeholder} value={value} onChange={onChange} className={styles.input} />
  </div>
);

export default InputField;
