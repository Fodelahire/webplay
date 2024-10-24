import React from 'react';
import styles from '@/styles/jobform/radioButton.module.scss';

interface RadioButtonGroupProps {
  label: string;
  options: { value: string; label: string }[];
  selectedValue: string;
  onChange: (value: string) => void;
}

const RadioButtonGroup: React.FC<RadioButtonGroupProps> = ({
  label,
  options,
  selectedValue,
  onChange,
}) => (
  <div className={styles.radioButtonGroup}>
    <label className={styles.label}>{label}</label>
    <div className={styles.radioOptions}>
      {options.map((option) => (
        <label key={option.value} className={styles.radioLabel}>
          <input
            type="radio"
            value={option.value}
            checked={selectedValue === option.value}
            onChange={() => onChange(option.value)}
          />
          {option.label}
        </label>
      ))}
    </div>
  </div>
);

export default RadioButtonGroup;
