import type { Meta, StoryObj } from '@storybook/react';
import { BreadcrumbItem } from './BreadcrumbItem';

const meta: Meta<typeof BreadcrumbItem> = {
  title: 'Components/BreadcrumbItem',
  component: BreadcrumbItem,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Página atual',
  },
}; 