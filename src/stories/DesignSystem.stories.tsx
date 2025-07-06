import React from 'react';

// Primitive tokens (direct from Figma or color scale)
const primitiveColors = [
  { name: '--color-navy-black-400', value: '#718089' },
  { name: '--color-navy-black-700', value: '#32393d' },
  { name: '--color-navy-black-800', value: '#262b2e' },
  { name: '--color-navy-black-900', value: '#191c1f' },
  { name: '--color-navy-black-950', value: '#0d0e0f' },
  { name: '--color-red-700', value: '#b91c1c' },
  { name: '--color-red-800', value: '#991b1b' },
  { name: '--color-seagull-100', value: '#e0f4fe' },
  { name: '--color-seagull-300', value: '#7fdbfa' },
  { name: '--color-seagull-400', value: '#40cbf6' },
  { name: '--color-seagull-50', value: '#f0faff' },
].sort((a, b) => a.name.localeCompare(b.name));

// Alias tokens (usage tokens)
const aliasColors = [
  { name: '--accent', alias: 'var(--color-seagull-100)' },
  { name: '--accent-foreground', alias: 'var(--color-navy-black-900)' },
  { name: '--background', alias: 'var(--color-navy-black-950)' },
  { name: '--border', alias: 'var(--color-navy-black-800)' },
  { name: '--card', alias: 'var(--color-navy-black-900)' },
  { name: '--card-foreground', alias: 'var(--color-seagull-50)' },
  { name: '--destructive', alias: 'var(--color-red-700)' },
  { name: '--destructive-foreground', alias: 'var(--color-seagull-50)' },
  { name: '--destructive-hover', alias: 'var(--color-red-800)' },
  { name: '--foreground', alias: 'var(--color-seagull-50)' },
  { name: '--input', alias: 'var(--color-navy-black-700)' },
  { name: '--muted', alias: 'var(--color-navy-black-400)' },
  { name: '--muted-foreground', alias: 'var(--color-navy-black-700)' },
  { name: '--primary', alias: 'var(--color-seagull-400)' },
  { name: '--primary-foreground', alias: 'var(--color-navy-black-900)' },
  { name: '--primary-hover', alias: 'var(--color-seagull-300)' },
  { name: '--ring', alias: 'var(--color-seagull-400)' },
  { name: '--secondary', alias: 'var(--color-navy-black-900)' },
  { name: '--secondary-foreground', alias: 'var(--color-seagull-50)' },
  { name: '--secondary-hover', alias: 'var(--color-navy-black-700)' },
].sort((a, b) => a.name.localeCompare(b.name));

const typography = [
  {
    name: 'Heading 1',
    sample: 'The quick brown fox jumps over the lazy dog',
    style: {
      fontFamily: 'var(--font-heading)',
      fontSize: 'var(--text-h1)',
      fontWeight: 'var(--font-weight-bold)',
      lineHeight: 'var(--leading-h1)',
    },
    tokens: [
      '--font-heading',
      '--text-h1',
      '--font-weight-bold',
      '--leading-h1'
    ]
  },
  {
    name: 'Heading 2',
    sample: 'The quick brown fox jumps over the lazy dog',
    style: {
      fontFamily: 'var(--font-heading)',
      fontSize: 'var(--text-h2)',
      fontWeight: 'var(--font-weight-semibold)',
      lineHeight: 'var(--leading-h2)',
    },
    tokens: [
      '--font-heading',
      '--text-h2',
      '--font-weight-semibold',
      '--leading-h2'
    ]
  },
  {
    name: 'Body',
    sample: 'The quick brown fox jumps over the lazy dog',
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-body)',
      fontWeight: 'var(--font-weight-normal)',
      lineHeight: 'var(--leading-body)',
    },
    tokens: [
      '--font-body',
      '--text-body',
      '--font-weight-normal',
      '--leading-body'
    ]
  },
  {
    name: 'Caption',
    sample: 'The quick brown fox jumps over the lazy dog',
    style: {
      fontFamily: 'var(--font-caption)',
      fontSize: 'var(--text-caption)',
      fontWeight: 'var(--font-weight-normal)',
      lineHeight: 'var(--leading-caption)',
    },
    tokens: [
      '--font-caption',
      '--text-caption',
      '--font-weight-normal',
      '--leading-caption'
    ]
  },
];

export default {
  title: 'Design System/Colors',
  parameters: {
    docs: {
      description: {
        component: 'This table documents all color tokens used in the design system. **Aliases** are semantic tokens used in components, mapped to **primitives** (raw color values from the palette or Figma).',
      },
    },
  },
};

export const ColorTable = () => (
  <div style={{ maxWidth: 900 }}>
    <h3>Aliases (Usage Tokens)</h3>
    <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: 32 }}>
      <thead>
        <tr>
          <th style={{ textAlign: 'left', padding: 8 }}>Token</th>
          <th style={{ textAlign: 'left', padding: 8 }}>Alias Value</th>
          <th style={{ textAlign: 'left', padding: 8 }}>Example</th>
        </tr>
      </thead>
      <tbody>
        {aliasColors.map(({ name, alias }) => (
          <tr key={name}>
            <td style={{ padding: 8 }}><code>{name}</code></td>
            <td style={{ padding: 8 }}><code>{alias}</code></td>
            <td style={{ padding: 8 }}>
              <div style={{ width: 32, height: 32, borderRadius: 6, background: `var(${name})`, border: '1px solid #eee' }} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    <h3>Primitives</h3>
    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
      <thead>
        <tr>
          <th style={{ textAlign: 'left', padding: 8 }}>Token</th>
          <th style={{ textAlign: 'left', padding: 8 }}>Value</th>
          <th style={{ textAlign: 'left', padding: 8 }}>Example</th>
        </tr>
      </thead>
      <tbody>
        {primitiveColors.map(({ name, value }) => (
          <tr key={name}>
            <td style={{ padding: 8 }}><code>{name}</code></td>
            <td style={{ padding: 8 }}><code>{value}</code></td>
            <td style={{ padding: 8 }}>
              <div style={{ width: 32, height: 32, borderRadius: 6, background: value, border: '1px solid #eee' }} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export const TypographyTable = () => (
  <div style={{ maxWidth: 900, marginTop: 48 }}>
    <h3>Typography</h3>
    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
      <thead>
        <tr>
          <th style={{ textAlign: 'left', padding: 8 }}>Name</th>
          <th style={{ textAlign: 'left', padding: 8 }}>Example</th>
          <th style={{ textAlign: 'left', padding: 8 }}>Font Family</th>
          <th style={{ textAlign: 'left', padding: 8 }}>Font Size</th>
          <th style={{ textAlign: 'left', padding: 8 }}>Font Weight</th>
          <th style={{ textAlign: 'left', padding: 8 }}>Line Height</th>
          <th style={{ textAlign: 'left', padding: 8 }}>Tokens</th>
        </tr>
      </thead>
      <tbody>
        {typography.map((type) => (
          <tr key={type.name}>
            <td style={{ padding: 8 }}>{type.name}</td>
            <td style={{ padding: 8 }}>
              <span style={type.style}>{type.sample}</span>
            </td>
            <td style={{ padding: 8 }}>{type.style.fontFamily}</td>
            <td style={{ padding: 8 }}>{type.style.fontSize}</td>
            <td style={{ padding: 8 }}>{type.style.fontWeight}</td>
            <td style={{ padding: 8 }}>{type.style.lineHeight}</td>
            <td style={{ padding: 8 }}>
              {type.tokens.map(token => (
                <div key={token}><code>{token}</code></div>
              ))}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
); 