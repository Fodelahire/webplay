import Link from "next/link";
import React from 'react';
import Button from '@/app/components/Button';
import styles from '@/styles/components/button.module.scss';
import Image from "next/image";

const GuestNavbar: React.FC = () => {
  return (
<nav className={styles.navbar}>
      <div className={styles.logo}>
        <Image src="/logo.png" alt="Fodelahire Logo" width={50} height={50} />
        <span>Fodelahire</span>
      </div>
      <ul className={styles.navLinks}>
        <li><Link href="#about">About</Link></li>
        <li><Link href="/dashboard/employer">For Companies</Link></li>
        <li><Link href="/dashboard/talent">For Talent</Link></li>
        <li><Link href="#pricing">Pricing</Link></li>
        <li><Link href="/login">Login</Link></li>
        <li><Button text="Sign Up" className={styles.signUpButton} /></li>
      </ul>
    </nav>
  );
};

export default GuestNavbar;
