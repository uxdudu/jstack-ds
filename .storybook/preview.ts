import type { Preview } from '@storybook/nextjs-vite'
import React from 'react';
import '../src/styles/globals.css';

const preview: Preview = {
  parameters: {
    layout: 'centered',
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo'
    }
  },
  decorators: [
    (Story) => React.createElement('div', { style: { padding: '20px' } }, React.createElement(Story)),
  ],
};

export default preview;