'use client';

import React, { useState } from 'react';
import styles from '@/styles/components/faq/page.module.scss';
import { faqData, FaqItem } from '../../../../data/faqData'; 

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className={styles.faqContainer}>
      <div className={styles.faqContent}>
        <h2 className={styles.heading}>FAQ</h2>
        <p className={styles.subheading}>
          Whatever questions you might have answered with some FAQs
        </p>
        <div className={styles.faqItems}>
          {faqData.map((item: FaqItem, index: number) => (
            <div key={index} className={styles.faqItem}>
              <div
                className={`${styles.question} ${activeIndex === index ? styles.active : ''}`}
                onClick={() => handleClick(index)}
              >
                {item.question}
                <span className={styles.icon}>
                  {activeIndex === index ? '▲' : '▼'}
                </span>
              </div>
              {activeIndex === index && (
                <div className={styles.answer}>{item.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className={styles.faqImage}>
        <img
          src="/images/csr.png"
          alt="Support"
          className={styles.image}
        />
      </div>
    </div>
  );
};

export default FAQ;