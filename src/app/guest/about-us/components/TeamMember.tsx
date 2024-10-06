import React from 'react';
import styles from '@/styles/dashboard/guest/about-us/teammembers.module.scss';

interface TeamMemberProps {
  name: string;
  role: string;
  imageSrc: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, role, imageSrc }) => {
  return (
    <div className={styles.teamMember}>
      <img src={imageSrc} alt={name} className={styles.memberImage} />
      <h3 className={styles.memberName}>{name}</h3>
      <p className={styles.memberRole}>{role}</p>
    </div>
  );
};

export default TeamMember;
