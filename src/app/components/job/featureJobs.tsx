import React from 'react';
import styles from '@/styles/components/jobs/featureJobs.module.scss';
import JobCard from './jobCard';
import { jobs } from '../../../../data/jobsData';
const FeaturedJobs: React.FC = () => {
  return (
    <div className={styles.featuredJobs}>
      <div className={styles.header}>
        <h2 className={styles.title}>Featured Jobs</h2>
        <p className={styles.subtitle}>Search your career opportunity through 10,500 jobs</p>
      </div>
      <div className={styles.jobsGrid}>
        {jobs.map((job) => (
          <JobCard
            key={job.id}
            title={job.title}
            employmentType={job.employmentType}
            location={job.location}
            salaryRange={job.salaryRange}
          />
        ))}
      </div>
      <div className={styles.allJobsButtonWrapper}>
        <a href="/all-jobs" className={styles.allJobsButton}>All job offers &gt;</a>
      </div>
    </div>
  );
};

export default FeaturedJobs;