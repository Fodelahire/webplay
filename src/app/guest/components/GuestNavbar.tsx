import Link from "next/link";
import React from 'react';
import Button from '@/app/components/Button';
import styles from '@/styles/dashboard/guest/components/GuestNavbar.module.scss';
import Image from "next/image";

const GuestNavbar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContainer}>
      <Link href="/">
        <div className={styles.logo}>
            <Image src="/images/logo.png" alt="Fodelahire Logo" width={80} height={80} />
          <span className={styles.logoText}>Fodelahire</span>
        </div>
        </Link>


        <ul className={styles.navLinks}>
          <li><Link href="/about-us">About</Link></li>
          <li><Link href="/dashboard/employer">For Companies</Link></li>
          <li><Link href="/dashboard/talent">For Talent</Link></li>
          <li><Link href="#pricing">Pricing</Link></li>
          <li><Link href="/login">Login</Link></li>
          <li>
            <Link href="/signup">
              <Button text="Sign Up" className={styles.signUpButton} />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default GuestNavbar;
