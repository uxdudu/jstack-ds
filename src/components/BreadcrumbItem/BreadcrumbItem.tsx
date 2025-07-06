import React from 'react';
import styles from './breadcrumb-item.module.css';

export interface BreadcrumbItemProps {
  label: string;
}

export const BreadcrumbItem: React.FC<BreadcrumbItemProps> = ({
  label,
}) => {
  return (
    <span className={styles.breadcrumbItem}>{label}</span>
  );
}; 