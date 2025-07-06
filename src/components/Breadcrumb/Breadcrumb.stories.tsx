import type { Meta, StoryObj } from '@storybook/react';
import { Breadcrumb } from './Breadcrumb';

const meta: Meta<typeof Breadcrumb> = {
  title: 'Components/Breadcrumb',
  component: Breadcrumb,
  tags: ['autodocs'],
  argTypes: {
    items: { control: 'object' },
    actualPage: { control: 'text' },
    showBack: { control: 'boolean' },
    onBackClick: { table: { disable: true } },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: ['Home', 'Dashboard'],
    actualPage: 'Página atual',
    showBack: false,
  },
};

export const ComVoltar: Story = {
  args: {
    items: ['Home', 'Dashboard'],
    actualPage: 'Página atual',
    showBack: true,
  },
};

export const Simples: Story = {
  args: {
    items: ['Home'],
    actualPage: 'Página atual',
    showBack: false,
  },
}; 