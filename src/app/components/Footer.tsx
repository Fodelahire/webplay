import React from 'react';
import styles from '@/styles/components/footer.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope as solidEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.logo}>
        <img src="images/logo.png" alt="Fodelahire Logo" />
        <p>Connecting Ambition with Opportunity</p>
      </div>

      <div className={styles.footerSection}>
        <div>
          <p className={styles.sectionTitle}>Products</p>
          <ul>
            <li><a href="#">Jobs</a></li>
            <li><a href="#">Freelancers</a></li>
            <li><a href="#">Certifications</a></li>
          </ul>
        </div>
        <div>
          <p className={styles.sectionTitle}>Company</p>
          <ul>
            <li><a href="#">About us</a></li>
            <li><a href="#">Career</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Donate</a></li>
            <li><a href="#">Enquiries</a></li>
            <li><a href="#">Testimonials</a></li>
          </ul>
        </div>
        <div>
          <p className={styles.sectionTitle}>Resources</p>
          <ul>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Help center</a></li>
            <li><a href="#">Tutorials</a></li>
            <li><a href="#">Support</a></li>
          </ul>
        </div>
        <div>
          <p className={styles.sectionTitle}>Legal</p>
          <ul>
            <li><a href="#">Terms</a></li>
            <li><a href="#">Privacy</a></li>
            <li><a href="#">Cookies</a></li>
            <li><a href="#">Licenses</a></li>
            <li><a href="#">Settings</a></li>
          </ul>
        </div>
      </div>

      <div className={styles.subscribeSection}>
        <p className={styles.subscribeText}>Join our Slack community to connect with others and stay updated with the latest opportunities.</p>
        <div className={styles.subscribeInput}>
          <input type="email" placeholder="Enter your email" />
          <button>
            <FontAwesomeIcon icon={solidEnvelope} />
          </button>
        </div>
      </div>

      <hr className={styles.horizontalLine} />

      <div className={styles.footerNote}>
        <p>{new Date().getFullYear()} Fodelahire. All Rights Reserved.</p>
      </div>

      <div className={styles.socialMedia}>
        <a href="https://www.facebook.com" aria-label="Facebook">
          <FontAwesomeIcon icon={faFacebookF} />
        </a>
        <a href="https://www.twitter.com" aria-label="Twitter">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="https://www.instagram.com" aria-label="Instagram">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="https://www.linkedin.com" aria-label="LinkedIn">
          <FontAwesomeIcon icon={faLinkedinIn} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
