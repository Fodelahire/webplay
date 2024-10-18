'use client';

import React, { useState } from 'react';
import styles from '@/styles/components/signup.module.scss';

const SignUp: React.FC = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ firstName, lastName, email, password });
  };

  const handleGoogleSignUp = () => {
    // Handle Google sign-up logic
  };

  return (
    <div className={styles.signupPageContainer}>
      <div className={styles.signupImageContainer}>
        <img
          src="/images/signup.png"
          alt="Sign Up Characters"
          className={styles.signupImage}
        />
      </div>
      <div className={styles.signupFormContainer}>
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
            <label htmlFor="email">Company Email</label>
            <input
              type="email"
              id="email"
              placeholder="Company Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className={styles.inputWrapper}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter Your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit" className={styles.signUpButton}>
            Sign Up
          </button>

          <p className={styles.orText}>or</p>

          <button type="button" className={styles.googleSignUpButton} onClick={handleGoogleSignUp}>
            <img src="/images/google.png" alt="Google Icon" className={styles.googleIcon} />
            Sign Up with Google
          </button>

          <p className={styles.loginText}>
            Already have an account? <a href="/profile/login">Log In</a>
          </p>

          <p className={styles.terms}>
            By clicking `Sign up`, you acknowledge that you have read and accepted the 
            <a href="/terms"> Terms of Service </a> and <a href="/privacy"> Privacy Policy</a>.
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
