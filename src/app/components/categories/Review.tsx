'use client';

import React, { useEffect, useState } from 'react';
import styles from '@/styles/components/categories/review.module.scss';

interface Review {
  id: number;
  name: string;
  jobTitle: string;
  profileImage: string;
  rating: number;
}

const Reviews: React.FC = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchReviews = async () => {
    try {
      const response = await fetch('/api/reviews'); 
      if (!response.ok) throw new Error('Failed to fetch reviews');

      const data: Review[] = await response.json(); 
      setReviews(data.slice(0, 6)); 
    } catch (err) {
      console.error('Error fetching reviews:', err);
      setError('Failed to load reviews. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  if (loading) return <p>Loading reviews...</p>;
  if (error) return <p className={styles.error}>{error}</p>;

  return (
    <div className={styles.reviewsContainer}>
      <h2 className={styles.heading}>Reviews</h2>
      <p className={styles.subheading}>
        Seize your career opportunity through 10,500 jobs
      </p>
      <div className={styles.reviewsGrid}>
        {reviews.map((review) => (
          <div key={review.id} className={styles.reviewCard}>
            <img
              src={review.profileImage}
              alt={`${review.name}'s profile`}
              className={styles.profileImage}
            />
            <h3 className={styles.name}>{review.name}</h3>
            <p className={styles.jobTitle}>{review.jobTitle}</p>
            <div className={styles.rating}>
              {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
