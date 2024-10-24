import React from 'react';
import styles from '@/styles/jobform/selectField.module.scss';

interface SelectFieldProps {
  label?: string;
  options: string[];
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const SelectField: React.FC<SelectFieldProps> = ({ label, options, value, onChange }) => (
  <div className={styles.selectField}>
    {label && <label className={styles.label}>{label}</label>}
    <select value={value} onChange={onChange} className={styles.select}>
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  </div>
);

export default SelectField;
