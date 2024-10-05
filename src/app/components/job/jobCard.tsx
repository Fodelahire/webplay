import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faDraftingCompass } from '@fortawesome/free-solid-svg-icons'; 
import styles from '@/styles/components/jobs/jobCard.module.scss';

interface JobCardProps {
  title: string;
  employmentType: string;
  location: string;
  salaryRange: string;
}

const JobCard: React.FC<JobCardProps> = ({ title, employmentType, location, salaryRange }) => {
  return (
    <div className={styles.jobCard}>
      <div className={styles.header}>
        <div className={styles.titleSection}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.employmentType}>{employmentType}</p>
        </div>
        <div className={styles.addButton}>
          <FontAwesomeIcon icon={faPlus} /> 
        </div>
      </div>
      <div className={styles.divider}></div>
      <div className={styles.details}>
        <p className={styles.location}>{location}</p>
        <p className={styles.salary}>Salary: {salaryRange}</p>
      </div>
      <div className={styles.footer}>
        <p className={styles.designScope}>Design Scope</p>
        <div className={styles.iconPlaceholder}>
          <FontAwesomeIcon icon={faDraftingCompass} size="2x" /> 
        </div>
      </div>
    </div>
  );
};

export default JobCard;
