import React from 'react';
import styles from '@/styles/jobform/datepicker.module.scss';

interface DatePickerProps {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const DatePicker: React.FC<DatePickerProps> = ({ label, value, onChange }) => (
  <div className={styles.datePicker}>
    <label className={styles.label}>{label}</label>
    <input
      type="date"
      value={value}
      onChange={onChange}
      className={styles.input}
    />
  </div>
);

export default DatePicker;
