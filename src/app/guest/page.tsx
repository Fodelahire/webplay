import React from "react";
import GuestLayout from "./layout"; 
import styles from "@/styles/dashboard/guest/GuestLayout.module.scss"; 
import WelcomePage from "./components/welcomePage";

export default function GuestPage() {
  return (
    <GuestLayout>
      <div className={styles.guestPage}>
       <WelcomePage/>
      </div>
    </GuestLayout>
  );
}
