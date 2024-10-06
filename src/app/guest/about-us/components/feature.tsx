import React from 'react';
import styles from '@/styles/dashboard/guest/about-us/feature.module.scss';

const Features: React.FC = () => {
  return (
    <div className={styles.featuresGrid}>
      <div className={styles.feature}>
        <h3>Comprehensive Solutions</h3>
        <ul>
          <li>Advanced job search and posting capabilities</li>
          <li>Sophisticated applicant tracking systems</li>
          <li>Intuitive freelance project management tools</li>
          <li>Real-time communication features</li>
        </ul>
      </div>
      <div className={styles.feature}>
        <h3>Powerful Tools</h3>
        <ul>
          <li>Data-driven analytics for informed decision-making</li>
          <li>Customizable recruitment workflows</li>
          <li>Integrated networking platforms</li>
          <li>Smart matching algorithms</li>
        </ul>
      </div>
      <div className={styles.feature}>
        <h3>User-Centric Approach</h3>
        <ul>
          <li>Intuitive interface design</li>
          <li>Personalized user experiences</li>
          <li>Responsive support systems</li>
          <li>Continuous platform evolution</li>
        </ul>
      </div>
    </div>
  );
};

export default Features;
