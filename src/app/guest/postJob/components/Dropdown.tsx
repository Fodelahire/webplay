import React from 'react';
import styles from '@/styles//jobform/dropdown.module.scss';

interface DropdownProps {
  label: string;
  subtitle?: string;
  options: string[];
  value: string;
  isRequired?: boolean;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ label, subtitle, options, value, isRequired, onChange }) => (
  <div className={styles.dropdownContainer}>
    <div className={styles.labelWrapper}>
      <label className={styles.label}>
        {label} {isRequired && <span className={styles.required}>*</span>}
      </label>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </div>
    <select className={styles.select} value={value} onChange={onChange}>
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  </div>
);

export default Dropdown;
