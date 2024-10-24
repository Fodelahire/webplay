import React from 'react';
import styles from '@/styles/jobform/fileUpload.module.scss';

interface FileUploadProps {
  label: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FileUpload: React.FC<FileUploadProps> = ({ label, onChange }) => (
  <div className={styles.fileUpload}>
    <label className={styles.label}>{label}</label>
    <input
      type="file"
      onChange={onChange}
      className={styles.input}
    />
  </div>
);

export default FileUpload;
