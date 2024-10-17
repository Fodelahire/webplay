'use client';

import React from 'react';
import styles from '@/styles/components/categories/review.module.scss';
import { reviewsData, Review } from '../../../../../data/reviewData'; 

const Reviews: React.FC = () => {
  return (
    <div className={styles.reviewsContainer}>
      <h2 className={styles.heading}>Reviews</h2>
      <p className={styles.subheading}>
        Seize your career opportunity through 10,500 jobs
      </p>
      <div className={styles.reviewsGrid}>
        {reviewsData.map((review: Review) => (
          <div key={review.id} className={styles.reviewCard}>
            <img
              src={review.profileImage}
              alt={`${review.name}'s profile`}
              className={styles.profileImage}
            />
            <div className={styles.content}>
            <h3 className={styles.name}>{review.name}</h3>
            <p className={styles.jobTitle}>{review.jobTitle}</p>
            <div className={styles.rating}>
              </div>
              {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
