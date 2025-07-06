import type { Meta, StoryObj } from '@storybook/react';
import { AlertDialog } from './AlertDialog';
import { Button } from '../Button/Button';

const meta: Meta<typeof AlertDialog> = {
  title: 'Components/AlertDialog',
  component: AlertDialog,
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    description: { control: 'text' },
    actions: { table: { disable: true } },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Título do alerta',
    description: 'Descrição do alerta. Você tem certeza que deseja continuar?',
    actions: (
      <>
        <Button label="Cancelar" variant="ghost" size="small" />
        <Button label="Confirmar" variant="primary" size="small" />
      </>
    ),
  },
};

export const SemDescricao: Story = {
  args: {
    title: 'Atenção',
    actions: (
      <>
        <Button label="Fechar" variant="ghost" size="small" />
      </>
    ),
  },
}; 