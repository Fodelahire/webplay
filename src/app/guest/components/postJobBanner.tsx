import React from 'react';
import styles from '@/styles/dashboard/guest/components/postJobBanner.module.scss';
import Button from '@/app/components/Button';

const EmployerPostJob: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageSection}>
        <div className={styles.imageGrid}>
          <img src="/images/pic1.png" alt="Teamwork" className={styles.image} />
          <img src="/images/pic2.png" alt="Collaboration" className={styles.image} />
        </div>
      </div>
      <div className={styles.textSection}>
        <p className={styles.forEmployers}>For Employers</p>
        <h2 className={styles.heading}>Looking to post a job?</h2>
        <p className={styles.subtext}>Find professionals from around the world and across all skills.</p>
            <Button text="Post jobs" className={styles.postJobButton} />      </div>
    </div>
  );
};

export default EmployerPostJob;
