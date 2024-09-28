import React from 'react';
import styles from '@/styles/components/Button.module.scss';

interface ButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  bgColor?: string;  
  color?: string;    
  variant?: 'solid' | 'outlined'; 
}

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  className,
  type = 'button',
  disabled = false,
  bgColor = '#2f4454',
  color = 'white',
  variant = 'solid',  
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${styles.button} ${styles[variant]} ${className}`}
      disabled={disabled}
      style={{
        '--button-bg-color': bgColor,
        '--button-color': color,
      } as React.CSSProperties}
    >
      {text}
    </button>
  );
};

export default Button;
