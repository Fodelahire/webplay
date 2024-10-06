import React from 'react';
import TeamMember from './TeamMember';
import Features from './feature';
import styles from '@/styles/dashboard/guest/about-us/meetUs.module.scss';

const MeetTheTeam: React.FC = () => {
  return (
    <div className={styles.container}>
      <section className={styles.teamSection}>
        <h2 className={styles.heading}>Meet The Team</h2>
        <div className={styles.teamGrid}>
          <TeamMember 
            name="Ayodeji Ejigbo" 
            role="Co-Founder" 
            imageSrc="/path-to-image/ayodeji.jpg" 
          />
          <TeamMember 
            name="Damilare Sam" 
            role="Co-Founder" 
            imageSrc="/path-to-image/damilare.jpg" 
          />
          <TeamMember 
            name="Folahan Mosunmola" 
            role="Co-Founder" 
            imageSrc="/path-to-image/folahan.jpg" 
          />
        </div>
      </section>

      <section className={styles.featureSection}>
        <h2 className={styles.heading}>What Sets Us Apart</h2>
        <Features />
      </section>
    </div>
  );
};

export default MeetTheTeam;
