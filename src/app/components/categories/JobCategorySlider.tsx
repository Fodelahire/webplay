'use client';
import React from 'react';
import styles from '@/styles/components/categories/JobCategorySlider.module.scss';
import JobCategoryCard from './JobCategoryCard';
import SliderNavigation from './sliderNavigation';
import { jobCategories } from '../../../../data/jobCategories';

const JobCategorySlider: React.FC = () => {
  const itemsPerPage = 4;
  const [currentPage, setCurrentPage] = React.useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = jobCategories.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className={styles.jobCategorySlider}>
        <div className={styles.content}>
            <div className={styles.header}>
            <h2 className={styles.title}>Search by Category</h2>
            <p className={styles.subtitle}>Search your career opportunities by categories</p>
        </div>
      
        <div> 
        <a href="/all-categories" className={styles.allCategories}>
          All Categories &gt;
        </a>
        </div>

      </div>

      <div className={styles.slider}>
        {currentItems.map((category) => (
          <JobCategoryCard key={category.id} category={category} />
        ))}
      </div>

      <SliderNavigation
        currentPage={currentPage}
        totalPages={Math.ceil(jobCategories.length / itemsPerPage)}
        goToNextPage={() => setCurrentPage((prev) => Math.min(prev + 1, Math.ceil(jobCategories.length / itemsPerPage)))}
        goToPreviousPage={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
      />
    </div>
  );
};

export default JobCategorySlider;
