import type { Meta, StoryObj } from '@storybook/react';
import { Input, InputProps } from './Input';
import { ReactNode } from 'react';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['default', 'small'],
    },
    state: {
      control: { type: 'select' },
      options: ['default', 'focused', 'completed', 'disabled', 'error'],
    },
    type: {
      control: { type: 'select' },
      options: ['default', 'labelLeft'],
    },
    icon: { table: { disable: true } },
    label: { control: 'text' },
    helperText: { control: 'text' },
    errorText: { control: 'text' },
    placeholder: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Label',
    placeholder: 'Placeholder',
    helperText: 'Helper Text',
    size: 'default',
    state: 'default',
    type: 'default',
  },
};

export const Focused: Story = {
  args: {
    label: 'Label',
    placeholder: 'Placeholder',
    helperText: 'Helper Text',
    size: 'default',
    state: 'focused',
    type: 'default',
  },
};

export const Completed: Story = {
  args: {
    label: 'Label',
    placeholder: 'Placeholder',
    helperText: 'Helper Text',
    size: 'default',
    state: 'completed',
    type: 'default',
    value: 'Valor preenchido',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Label',
    placeholder: 'Placeholder',
    helperText: 'Helper Text',
    size: 'default',
    state: 'disabled',
    type: 'default',
    disabled: true,
  },
};

export const Error: Story = {
  args: {
    label: 'Label',
    placeholder: 'Placeholder',
    errorText: 'Mensagem de erro',
    size: 'default',
    state: 'error',
    type: 'default',
  },
};

export const Small: Story = {
  args: {
    label: 'Label',
    placeholder: 'Placeholder',
    helperText: 'Helper Text',
    size: 'small',
    state: 'default',
    type: 'default',
  },
};

export const LabelLeft: Story = {
  args: {
    label: 'Label',
    placeholder: 'Placeholder',
    helperText: 'Helper Text',
    size: 'small',
    state: 'default',
    type: 'labelLeft',
  },
};

export const ErrorLabelLeft: Story = {
  args: {
    label: 'Label',
    placeholder: 'Placeholder',
    errorText: 'Mensagem de erro',
    size: 'small',
    state: 'error',
    type: 'labelLeft',
  },
}; 