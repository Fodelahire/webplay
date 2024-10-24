'use client';

import React, { useState } from 'react';
import styles from '@/styles/components/signup.module.scss';
import { faEye, faEyeSlash, faGlobe, faChartLine, faAward } from '@fortawesome/free-solid-svg-icons'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { signIn } from 'next-auth/react'; 

const SignUpPage: React.FC = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ firstName, lastName, email, password });
  };

  const handleGoogleSignUp = async () => {
    try {
      await signIn('google', { callbackUrl: '/dashboard' }); 
    } catch (error) {
      console.error('Google sign-up error:', error);
    }
  };

  return (
    <div className={styles.signupPageContainer}>
      <div className={styles.signupFormContainer}>
        <div className={styles.signupHeader}>
          <h1>Unleash Your Potential with Fodelahire</h1>
          <p>Where Global Opportunities Meet Extraordinary Talent</p>
          <button type="button" className={styles.googleSignUpButton} onClick={handleGoogleSignUp}>
            <img src="/images/google.png" alt="Google Icon" className={styles.googleIcon} />
            Sign Up with Google
          </button>
        </div>
        <form className={styles.signupForm} onSubmit={handleSubmit}>
          <div className={styles.nameFields}>
            <div className={styles.inputWrapper}>
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                id="firstName"
                placeholder="Your First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className={styles.inputWrapper}>
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                id="lastName"
                placeholder="Your Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </div>

          <div className={styles.inputWrapper}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="eg: myname@myemail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className={styles.inputWrapper}>
            <label htmlFor="password">Password</label>
            <div className={styles.passwordInputWrapper}>
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                placeholder="Enter Your Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span className={styles.passwordIcon} onClick={togglePasswordVisibility}>
                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
              </span>
            </div>
          </div>

          <button type="submit" className={styles.signUpButton}>
            Sign Up
          </button>

          <p className={styles.orText}>or</p>

          <p className={styles.loginText}>
            Already have an account? <a href="/profile/login">Log In</a>
          </p>

          <p className={styles.terms}>
            By clicking `Sign up`, you acknowledge that you have read and accepted the 
            <a href="/terms">Terms of Service</a> and <a href="/privacy">Privacy Policy</a>.
          </p>
        </form>
      </div>

      <div className={styles.signupImageContainer}>
        <div className={styles.overlay}>
          <div className={styles.iconSection}>
            <div className={styles.iconWrapper}>
              <FontAwesomeIcon icon={faGlobe} className={styles.icon} />
              <p>Work Globally</p>
            </div>
            <div className={styles.iconWrapper}>
              <FontAwesomeIcon icon={faChartLine} className={styles.icon} />
              <p>Grow Rapidly</p>
            </div>
            <div className={styles.iconWrapper}>
              <FontAwesomeIcon icon={faAward} className={styles.icon} />
              <p>Excel Always</p>
            </div>
          </div>
          <h1>
            Join 100,000+ Professionals Shaping the Future
          </h1>
          <p>
            Ready to skyrocket your career? Sign up now and gain access to:
          </p>
          <p className={styles.quote}> 
            Cutting-edge projects from Fortune 500 companies <br/>
            Flexible work arrangements tailored to your lifestyle <br/>
            Competitive compensation packages that recognize your worth <br/>
            A supportive community of like-minded professionals
          </p>
        </div>
        <div className={styles.imagediv}>
          <img 
            src="/images/imageTalent.png" 
            alt="Sign Up Characters" 
            className={styles.signupImage} 
          />
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
