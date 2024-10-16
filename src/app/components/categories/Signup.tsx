'use client';

import React, { useState } from 'react';
import styles from '@/styles/SignUp.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons'; 

const SignUp: React.FC = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Submit form logic here
    console.log({ firstName, lastName, email, password });
  };

  const handleGoogleSignUp = () => {
    // Handle Google sign-up logic
  };

  return (
    <div className={styles.signupContainer}>
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
          <FontAwesomeIcon icon={faGoogle} className={styles.googleIcon} />
          Sign Up with Google
        </button>

        <p className={styles.loginText}>
          Already have an account? <a href="/profile/login">Log In</a>
        </p>

        <p className={styles.terms}>
          By clicking `&apos;Sign up`&apos;, you acknowledge that you have read and accepted the 
          <a href="#"> Terms of Service </a> and <a href="#"> Privacy Policy</a>.
        </p>
      </form>
    </div>
  );
};

export default SignUp;
