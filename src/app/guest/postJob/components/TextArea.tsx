import React from 'react';
import styles from '@/styles/jobform/testArea.module.scss';


interface TextAreaProps {
  label: string;
  placeholder: string;
  value: string;
  isRequired?: boolean;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextArea: React.FC<TextAreaProps> = ({ label, placeholder, value, isRequired, onChange }) => (
  <div className={styles.textArea}>
    <label className={styles.label}>
      {label} {isRequired && <span className={styles.required}>*</span>}
    </label>
    <textarea
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={styles.textAreaInput}
    />
  </div>
);

export default TextArea;