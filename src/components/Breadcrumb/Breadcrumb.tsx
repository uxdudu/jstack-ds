import React from 'react';
import styles from './breadcrumb.module.css';
import { BreadcrumbItem } from '../BreadcrumbItem/BreadcrumbItem';

export interface BreadcrumbProps {
  items: string[];
  actualPage: string;
  showBack?: boolean;
  onBackClick?: () => void;
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({
  items,
  actualPage,
  showBack = false,
  onBackClick,
}) => {
  return (
    <nav className={styles.breadcrumb} aria-label="breadcrumb">
      <ol className={styles.breadcrumb__list}>
        {showBack && (
          <li className={styles.breadcrumb__back} onClick={onBackClick} tabIndex={0} role="button" aria-label="Voltar">
            <span className={styles['breadcrumb__chevron']}>
              <svg width="16" height="16" viewBox="0 0 6 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.52 0.146C5.715 0.342 5.715 0.658 5.52 0.854L1.207 5.167L5.52 9.48C5.715 9.675 5.715 9.992 5.52 10.187C5.325 10.382 5.008 10.382 4.813 10.187L0.146 5.52C-0.049 5.325 -0.049 5.008 0.146 4.813L4.813 0.146C5.008 -0.049 5.325 -0.049 5.52 0.146Z" fill="#718089" />
              </svg>
            </span>
          </li>
        )}
        {items.map((item, idx) => (
          <React.Fragment key={item + idx}>
            <li>
              <BreadcrumbItem label={item} state="default" />
            </li>
            <li aria-hidden="true" className={styles.breadcrumb__separator}>
              <svg width="4" height="8" viewBox="0 0 4 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 8L3.13 0H4L0.87 8H0Z" fill="#718089" />
              </svg>
            </li>
          </React.Fragment>
        ))}
        <li>
          <span className={styles.breadcrumb__actualPage}>{actualPage}</span>
        </li>
      </ol>
    </nav>
  );
}; 