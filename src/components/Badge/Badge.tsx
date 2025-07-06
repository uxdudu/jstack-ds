import React from 'react';
import styles from './badge.module.css';

export type BadgeType = 'color' | 'outline' | 'ghost' | 'live' | 'dot' | 'special' | 'alpha';
export type BadgeColor =
  | 'blue'
  | 'red'
  | 'gold'
  | 'sky'
  | 'cyan'
  | 'teal'
  | 'gradient'
  | 'live'
  | 'primary'
  | 'neutral'
  | 'emerald'
  | 'indigo'
  | 'dark'
  | 'light'
  | 'verified';
export type BadgeSize = 'xl' | 'lg' | 'md' | 'sm';
export type BadgeStyle = 'default' | 'circle';

export interface BadgeProps {
  label?: string;
  type?: BadgeType;
  color?: BadgeColor;
  size?: BadgeSize;
  styleType?: BadgeStyle;
  icon?: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  label = 'Label',
  type = 'color',
  color = 'blue',
  size = 'md',
  styleType = 'default',
  icon,
}) => {
  return (
    <span
      className={[
        styles.badge,
        styles[`badge--${type}`],
        styles[`badge--${color}`],
        styles[`badge--${size}`],
        styleType !== 'default' ? styles[`badge--${styleType}`] : '',
      ].join(' ')}
    >
      {icon && <span className={styles['badge__icon']}>{icon}</span>}
      {label && <span className={styles['badge__label']}>{label}</span>}
    </span>
  );
}; 