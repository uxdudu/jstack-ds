import React from 'react';
import styles from './alert-dialog.module.css';

export interface AlertDialogProps {
  title: string;
  description?: string;
  actions?: React.ReactNode;
}

export const AlertDialog: React.FC<AlertDialogProps> = ({
  title,
  description,
  actions,
}) => {
  return (
    <div className={styles.alertDialog} role="alertdialog">
      <div className={styles.alertDialog__container}>
        <div className={styles.alertDialog__content}>
          <div className={styles.alertDialog__title}>{title}</div>
          {description && (
            <div className={styles.alertDialog__description}>{description}</div>
          )}
        </div>
        {actions && (
          <div className={styles.alertDialog__actions}>{actions}</div>
        )}
      </div>
    </div>
  );
}; 