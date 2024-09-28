import Button from "@/app/components/Button";
import styles from "@/styles/dashboard/guest/components/welcomepage.module.scss"; 

const WelcomePage = () => {
  return ( 
    <div className={styles.welcomePage}>
      <h1 className={styles.title}>Connecting Ambition with Opportunity</h1>
      <p className={styles.description}>
        Welcome to Fodelahire, where we transform careers and empower businesses. As industry leaders in recruitment and talent acquisition, we bridge the gap between exceptional candidates and forward-thinking companies.
      </p>
      <div className={styles.btnContainer}>
        <Button 
          type="submit" 
          text="Find Jobs" 
          variant="solid"     
          bgColor="#2f4454"   
          color="white"       
        />
        <Button 
          type="submit" 
          text="Hire a Freelancer" 
          variant="outlined"  
          bgColor="#2f4454"   
          color="#2f4454"     
        />
      </div>
    </div>
  );
};

export default WelcomePage;
