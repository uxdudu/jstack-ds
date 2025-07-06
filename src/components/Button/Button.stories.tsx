import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'destructive', 'outline', 'ghost', 'link', 'icon', 'primaryAlt', 'outlineAlpha'],
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    disabled: {
      control: { type: 'boolean' },
    },
    loading: {
      control: { type: 'boolean' },
    },
    leftIcon: {
      table: {
        disable: true,
      },
    },
    rightIcon: {
      table: {
        disable: true,
      },
    },
    autoFocus: {
      table: {
        disable: true,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Story padrão
export const Default: Story = {
  args: {
    label: 'Button',
    variant: 'primary',
    size: 'medium',
  },
};

// Variantes
export const Primary: Story = {
  args: {
    label: 'Primary Button',
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Secondary Button',
    variant: 'secondary',
  },
};

export const Destructive: Story = {
  args: {
    label: 'Destructive Button',
    variant: 'destructive',
  },
};

export const Outline: Story = {
  args: {
    label: 'Outline Button',
    variant: 'outline',
  },
};

export const Ghost: Story = {
  args: {
    label: 'Ghost Button',
    variant: 'ghost',
  },
};

export const Link: Story = {
  args: {
    label: 'Link Button',
    variant: 'link',
  },
};

export const PrimaryAlt: Story = {
  args: {
    label: 'Primary Alt Button',
    variant: 'primaryAlt',
  },
};

export const OutlineAlpha: Story = {
  args: {
    label: 'Outline Alpha Button',
    variant: 'outlineAlpha',
  },
}; 