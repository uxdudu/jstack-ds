import type { Meta, StoryObj } from '@storybook/react';
import { Badge, BadgeProps } from './Badge';

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['color', 'outline', 'ghost', 'special', 'alpha', 'live', 'dot'],
    },
    color: {
      control: { type: 'select' },
      options: ['blue', 'red', 'gold', 'sky', 'cyan', 'teal', 'gradient', 'live', 'primary', 'neutral', 'emerald', 'indigo', 'dark', 'light', 'verified'],
    },
    size: {
      control: { type: 'select' },
      options: ['xl', 'lg', 'md', 'sm'],
    },
    styleType: {
      control: { type: 'select' },
      options: ['default', 'circle'],
    },
    icon: { table: { disable: true } },
    label: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Badge',
    type: 'color',
    color: 'blue',
    size: 'md',
  },
};

export const Outline: Story = {
  args: {
    label: 'Outline',
    type: 'outline',
    color: 'neutral',
    size: 'md',
  },
};

export const Ghost: Story = {
  args: {
    label: 'Ghost',
    type: 'ghost',
    color: 'cyan',
    size: 'md',
  },
};

export const Special: Story = {
  args: {
    label: 'VIP',
    type: 'special',
    color: 'gold',
    size: 'lg',
  },
};

export const Alpha: Story = {
  args: {
    label: 'Alpha',
    type: 'alpha',
    color: 'light',
    size: 'md',
  },
};

export const Live: Story = {
  args: {
    label: 'AO VIVO',
    type: 'live',
    color: 'live',
    size: 'lg',
  },
};

export const Dot: Story = {
  args: {
    label: '',
    type: 'dot',
    color: 'red',
    size: 'md',
  },
};

export const Circle: Story = {
  args: {
    label: 'Circle',
    type: 'color',
    color: 'emerald',
    size: 'md',
    styleType: 'circle',
  },
};

export const Tamanhos: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 8 }}>
      <Badge label="XL" size="xl" />
      <Badge label="LG" size="lg" />
      <Badge label="MD" size="md" />
      <Badge label="SM" size="sm" />
    </div>
  ),
};

export const Cores: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
      <Badge label="Blue" color="blue" />
      <Badge label="Sky" color="sky" />
      <Badge label="Cyan" color="cyan" />
      <Badge label="Teal" color="teal" />
      <Badge label="Emerald" color="emerald" />
      <Badge label="Neutral" color="neutral" />
      <Badge label="Red" color="red" />
      <Badge label="Gold" color="gold" />
      <Badge label="Gradient" color="gradient" />
      <Badge label="Primary" color="primary" />
      <Badge label="Indigo" color="indigo" />
      <Badge label="Dark" color="dark" />
      <Badge label="Light" color="light" />
      <Badge label="Verified" color="verified" />
    </div>
  ),
}; 