import React from 'react';
import styles from './button.module.css';

export interface ButtonProps {
  /** Button label */
  label: string;
  /** Button variant */
  variant?: 'primary' | 'secondary' | 'destructive' | 'outline' | 'ghost' | 'link' | 'icon' | 'primaryAlt' | 'outlineAlpha';
  /** Button size */
  size?: 'small' | 'medium' | 'large';
  /** Is the button disabled? */
  disabled?: boolean;
  /** Left icon */
  leftIcon?: React.ReactNode;
  /** Right icon */
  rightIcon?: React.ReactNode;
  /** Auto focus on render */
  autoFocus?: boolean;
  /** Loading state */
  loading?: boolean;
}

/**
 * Primary UI component for user interaction
 */
export const Button: React.FC<ButtonProps> = ({
  label,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  leftIcon,
  rightIcon,
  autoFocus,
  loading = false,
  ...props
}) => {
  return (
    <button
      type="button"
      className={[
        styles.button,
        styles[`button--${variant}`],
        styles[`button--${size}`],
      ].join(' ')}
      disabled={disabled || loading}
      autoFocus={autoFocus}
      {...props}
    >
      {loading ? (
        <span className={styles['button__spinner']} aria-label="Loading" />
      ) : (
        <>
          {leftIcon && <span className={styles['button__icon']}>{leftIcon}</span>}
          {label}
          {rightIcon && <span className={styles['button__icon']}>{rightIcon}</span>}
        </>
      )}
    </button>
  );
}; 