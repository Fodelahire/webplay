import React from 'react';
import styles from '@/styles/jobform/rangeInput.module.scss';

interface RangeInputProps {
  label?: string;
  minValue: string;
  maxValue: string;
  currencyOptions: string[];
  selectedCurrency: string;
  onMinChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onMaxChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onCurrencyChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const RangeInput: React.FC<RangeInputProps> = ({
  label,
  minValue,
  maxValue,
  currencyOptions,
  selectedCurrency,
  onMinChange,
  onMaxChange,
  onCurrencyChange,
}) => (
  <div className={styles.rangeInput}>
    {label && <label className={styles.label}>{label}</label>}
    <div className={styles.inputGroup}>
      <input type="text" value={minValue} onChange={onMinChange} className={styles.input} placeholder="Min" />
      <input type="text" value={maxValue} onChange={onMaxChange} className={styles.input} placeholder="Max" />
      <select value={selectedCurrency} onChange={onCurrencyChange} className={styles.select}>
        {currencyOptions.map((currency, index) => (
          <option key={index} value={currency}>
            {currency}
          </option>
        ))}
      </select>
    </div>
  </div>
);

export default RangeInput;
