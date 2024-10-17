import React from 'react';
import styles from '@/styles/dashboard/guest/components/GrowthSection.module.scss';

const GrowthSection = () => {
  return (
    <section className={styles.growthSection}>
      <div className={styles.container}>
        <div className={styles.heading}>
          <h2>Revolutionizing Growth with Fodela</h2>
          <p>
            At Fodela, we&apos;re redefining the outsourcing landscape. Our unique approach blends cutting-edge technologies 
            with a steadfast commitment to your vision, creating high-performing teams that transform your challenges 
            into opportunities for growth and profitability.
          </p>
        </div>

        <div className={styles.cardsContainer}>
          <div className={styles.card}>
            <h3>10X More Jobs</h3>
            <p>Explore job opportunities across multiple industries.</p>
          </div>

          <div className={styles.card}>
            <h3>Top Talents</h3>
            <p>Connect with skilled freelancers for your projects.</p>
            <p>+1,000</p>
          </div>

          <div className={styles.card}>
            <h3>+500 Certificates to be Issued</h3>
            <p>Get certified and increase your credibility.</p>
            <div className={styles.certificateImage}>
              {/* <img src="/images/certifcate.png" alt="Certificate" /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GrowthSection;
