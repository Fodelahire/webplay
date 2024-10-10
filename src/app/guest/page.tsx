import React from "react";
import GuestLayout from "./layout"; 
import styles from "@/styles/dashboard/guest/GuestLayout.module.scss"; 
import WelcomePage from "./components/welcomePage";
import JobCategorySlider from "../components/categories/JobCategorySlider";
import FeaturedJobs from "../components/job/featureJobs";
import EmployerPostJob from "./components/postJobBanner";
import GrowthSection from "./components/GrowthSection";

export default function GuestPage() {
  return (
    <GuestLayout>
      <div className={styles.guestPage}>
       <WelcomePage/>
        <GrowthSection/>
       <JobCategorySlider/>
       <FeaturedJobs/>
       <EmployerPostJob/>
      </div>
    </GuestLayout>
  );
}
