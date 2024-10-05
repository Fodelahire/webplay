import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import styles from '@/styles/components/categories/JobCategotyCard.module.scss';

interface JobCategoryCardProps {
  category: {
    id: number;
    title: string;
    openPositions: number;
    icon: IconDefinition;
  };
}

const JobCategoryCard: React.FC<{ category: JobCategoryCardProps['category'] }> = ({ category }) => {
  return (
    <div className={styles.card}>
      <FontAwesomeIcon icon={category.icon} className={styles.icon} aria-hidden="true" />
      <h3 className={styles.title}>{category.title}</h3>
      <p className={styles.openPositions}>{category.openPositions} Open Positions</p>
    </div>
  );
};

export default JobCategoryCard;
