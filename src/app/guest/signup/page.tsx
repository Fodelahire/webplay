'use client';

import React, { useState } from 'react';
import styles from '@/styles/components/signup.module.scss';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { signIn } from 'next-auth/react'; 

const SignUp: React.FC = () => {
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
