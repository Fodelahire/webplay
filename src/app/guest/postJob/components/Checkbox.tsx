import React from 'react';
import styles from '@/styles/jobform/checkbox.module.scss';

interface CheckboxProps {
  label: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({ label, checked, onChange }) => (
  <div className={styles.checkbox}>
    <input type="checkbox" checked={checked} onChange={onChange} className={styles.input} />
    <label className={styles.label}>{label}</label>
  </div>
);

export default Checkbox;
