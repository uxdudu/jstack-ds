import type { Meta, StoryObj } from '@storybook/react';
import { Alert, AlertProps } from './Alert';
import { ReactNode } from 'react';

// Exemplo de ícone simples (pode ser substituído por SVG real)
const FlashIcon = (
  <svg width="20" height="20" viewBox="0 0 14 17" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6.85878 16.25C6.70878 16.25 6.55037 16.225 6.40037 16.175C5.79203 15.975 5.39212 15.4333 5.39212 14.7916V10.5917H1.4504C0.900401 10.5917 0.408743 10.2833 0.158743 9.79998C-0.0912575 9.30832 -0.0412407 8.73332 0.275426 8.28332L5.85045 0.600008C6.22545 0.0833418 6.86712 -0.124991 7.47545 0.0750085C8.08378 0.275009 8.4837 0.816675 8.4837 1.45834V5.65834H12.4255C12.9755 5.65834 13.4755 5.96668 13.7171 6.44998C13.9671 6.94165 13.9171 7.51665 13.6005 7.96665L8.02545 15.65C7.74212 16.0417 7.31712 16.25 6.85878 16.25ZM7.02537 1.25001C6.97537 1.25001 6.91703 1.26668 6.86703 1.33334L1.29207 9.01665C1.2254 9.10832 1.25043 9.19165 1.27543 9.23332C1.30043 9.27498 1.35041 9.34165 1.45874 9.34165H6.02545C6.36712 9.34165 6.65045 9.62498 6.65045 9.96665V14.7916C6.65045 14.9166 6.72545 14.9666 6.79212 14.9833C6.85878 15 6.95045 15.0083 7.01712 14.9083L12.6004 7.22498C12.667 7.13332 12.6421 7.04998 12.6171 7.00832C12.5921 6.96665 12.5421 6.89998 12.4338 6.89998H7.86712C7.52545 6.89998 7.24212 6.61665 7.24212 6.27501V1.45001C7.24212 1.32501 7.16712 1.27501 7.10045 1.25834C7.07545 1.25834 7.05037 1.25001 7.02537 1.25001Z" fill="#EBEEEF"/>
  </svg>
);

const meta: Meta<typeof Alert> = {
  title: 'Components/Alert',
  component: Alert,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['default', 'destructive'],
    },
    icon: { table: { disable: true } },
    title: { control: 'text' },
    description: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    type: 'default',
    title: 'Título do alerta',
    description: 'Descrição do alerta.',
    icon: FlashIcon,
  },
};

export const Destructive: Story = {
  args: {
    type: 'destructive',
    title: 'Erro ao salvar',
    description: 'Não foi possível salvar as alterações.',
    icon: FlashIcon,
  },
};

export const SemDescricao: Story = {
  args: {
    type: 'default',
    title: 'Alerta simples',
    icon: FlashIcon,
  },
}; 