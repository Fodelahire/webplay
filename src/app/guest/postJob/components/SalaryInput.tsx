import React from 'react';
import styles from '@/styles/jobform/salaryInput.module.scss';

interface SalaryInputProps {
  minSalary: string;
  maxSalary: string;
  currency: string;
  currencyOptions: string[];
  onMinChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onMaxChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onCurrencyChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const SalaryInput: React.FC<SalaryInputProps> = ({
  minSalary,
  maxSalary,
  currency,
  currencyOptions,
  onMinChange,
  onMaxChange,
  onCurrencyChange,
}) => (
  <div className={styles.salaryInput}>
    <label className={styles.label}>Salary</label>
    <div className={styles.inputGroup}>
      <input
        type="text"
        value={minSalary}
        onChange={onMinChange}
        className={styles.input}
        placeholder="Min Salary"
      />
      <input
        type="text"
        value={maxSalary}
        onChange={onMaxChange}
        className={styles.input}
        placeholder="Max Salary"
      />
      <select value={currency} onChange={onCurrencyChange} className={styles.select}>
        {currencyOptions.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  </div>
);

export default SalaryInput;
