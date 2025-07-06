import React from 'react';
import styles from './alert.module.css';

export interface AlertProps {
  type?: 'default' | 'destructive';
  icon?: React.ReactNode;
  title: string;
  description?: string;
}

export const Alert: React.FC<AlertProps> = ({
  type = 'default',
  icon,
  title,
  description,
}) => {
  return (
    <div
      className={[
        styles.alert,
        type === 'destructive' ? styles['alert--destructive'] : styles['alert--default'],
      ].join(' ')}
      role="alert"
    >
      <div className={styles['alert__content']}>
        <div className={styles['alert__header']}>
          {icon && <span className={styles['alert__icon']}>{icon}</span>}
          <span className={styles['alert__title']}>{title}</span>
        </div>
        {description && (
          <div className={styles['alert__description']}>
            {description}
          </div>
        )}
      </div>
    </div>
  );
}; 