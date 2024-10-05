import React from 'react';
import styles from '@/styles/components/categories/sliderNavigation.module.scss';

interface SliderNavigationProps {
  currentPage: number;
  totalPages: number;
  goToNextPage: () => void;
  goToPreviousPage: () => void;
}

const SliderNavigation: React.FC<SliderNavigationProps> = ({
  currentPage,
  totalPages,
  goToNextPage,
  goToPreviousPage,
}) => {
  return (
    <div className={styles.navigation}>
      <button
        className={styles.prevButton}
        onClick={goToPreviousPage}
        disabled={currentPage === 1}
      >
        
      </button>

      {Array.from({ length: totalPages }, (_, index) => (
        <span
          key={index}
          className={`${styles.dot} ${currentPage === index + 1 ? styles.activeDot : ''}`}
        ></span>
      ))}

      <button
        className={styles.nextButton}
        onClick={goToNextPage}
        disabled={currentPage === totalPages}
      >
      
      </button>
    </div>
  );
};

export default SliderNavigation;
