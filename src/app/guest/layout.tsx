import React from "react";
import GuestNavbar from "./components/GuestNavbar"; 
import styles from "./GuestLayout.module.scss"; 

export default function GuestLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.guestLayout}>
      <GuestNavbar /> 
      <main className={styles.mainContent}>{children}</main>
    </div>
  );
}
