import React from 'react';
import styles from '@/styles/jobform/testArea.module.scss';

interface TextAreaProps {
  label?: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextArea: React.FC<TextAreaProps> = ({ label, placeholder, value, onChange }) => (
  <div className={styles.textArea}>
    {label && <label className={styles.label}>{label}</label>}
    <textarea placeholder={placeholder} value={value} onChange={onChange} className={styles.textAreaInput} />
  </div>
);

export default TextArea;
