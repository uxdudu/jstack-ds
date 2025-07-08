import React from 'react';
import styles from './input.module.css';

export interface InputProps {
  label?: string;
  helperText?: string;
  errorText?: string;
  size?: 'default' | 'small';
  state?: 'default' | 'focused' | 'completed' | 'disabled' | 'error';
  type?: 'default' | 'labelLeft';
  placeholder?: string;
  icon?: React.ReactNode;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
}

export const Input: React.FC<InputProps> = ({
  label,
  helperText,
  errorText,
  size = 'default',
  state = 'default',
  type = 'default',
  placeholder = '',
  icon,
  value,
  onChange,
  disabled = false,
  ...props
}) => {
  const isDisabled = state === 'disabled' || disabled;
  const isError = state === 'error';
  const isCompleted = state === 'completed';
  const isFocused = state === 'focused';
  const isLabelLeft = type === 'labelLeft';
  const inputClass = [
    styles.input,
    styles[`input--${size}`],
    isDisabled && styles['input--disabled'],
    isError && styles['input--error'],
    isCompleted && styles['input--completed'],
    isFocused && styles['input--focused'],
    isLabelLeft && styles['input--labelLeft'],
  ].filter(Boolean).join(' ');

  return (
    <div className={[
      styles.wrapper,
      styles[`wrapper--${size}`],
      isDisabled && styles['wrapper--disabled'],
      isLabelLeft && styles['wrapper--labelLeft'],
    ].filter(Boolean).join(' ')}>
      {label && (
        <label className={[
          styles.label,
          isError && styles['label--error'],
          isLabelLeft && styles['label--left'],
        ].filter(Boolean).join(' ')}>
          {label}
        </label>
      )}
      <div className={styles.fieldWrapper}>
        {icon && <span className={styles.icon}>{icon}</span>}
        <input
          className={inputClass}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled={isDisabled}
          aria-invalid={isError}
          {...props}
        />
      </div>
      {helperText && !isError && (
        <div className={styles.helperText}>{helperText}</div>
      )}
      {isError && errorText && (
        <div className={styles.errorText}>{errorText}</div>
      )}
    </div>
  );
}; 